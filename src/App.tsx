import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MoviesList from "./pages/MoviesList";
import MovieDetail from "./pages/MovieDetail";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/movie/:id" element={<div>Movie Detail</div>} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
