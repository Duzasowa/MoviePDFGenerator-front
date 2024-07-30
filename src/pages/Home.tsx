import React from "react";
import bgImage from "../assets/bg1.jpg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-center text-white px-4 fade-in">
          <h1 className="text-4xl md:text-6xl mb-4">
            Welcome to Movie PDF
            <span className="text-blue-500">Generator</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Discover the top-rated movies and generate detailed PDF documents
            with just a click. Dive deeper into your favorite films and access
            comprehensive information all in one place.
          </p>
          <Link
            to="/movies"
            className="bg-blue-500 text-white text-lg px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Show Top Movies List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
