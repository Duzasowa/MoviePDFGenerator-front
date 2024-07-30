import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/movies/movie/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch PDF document");
        }
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
        setLoading(false);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchPDF();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <div className="loader mb-4"></div>
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <div className="absolute left-4" style={{ top: 92 }}>
        <Link
          to="/movies"
          className="bg-blue-500 text-white text-lg px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Back to Movies
        </Link>
      </div>
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          width="80%"
          height="80%"
          className="border-2 border-gray-700 rounded-lg shadow-lg"
          title="Movie Detail"
        ></iframe>
      ) : (
        <p className="text-xl">PDF is loading...</p>
      )}
    </div>
  );
};

export default MovieDetail;
