import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Movie {
  id: number;
  title: string;
}

const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/movies/json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/movies`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch PDF document");
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        setError(errorMessage);
      }
    };

    fetchPDF();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="loader mb-4"></div>
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 text-xl mb-4">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white text-lg px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row h-screen bg-gray-900">
      <div className="w-1/4 p-4 overflow-y-auto">
        <h2 className="text-white text-xl mb-4">Top 20 best movies</h2>
        <ul>
          {movies.map((movie) => (
            <li
              key={movie.id}
              className="text-white mb-2 cursor-pointer hover:text-blue-500"
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 flex items-center justify-center p-4">
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            title="Movies List"
            style={{ maxHeight: "90vh" }}
          ></iframe>
        ) : (
          <p className="text-white text-xl">PDF is loading...</p>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
