import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-2xl">
          Movie PDF <span className="text-blue-500">Generator</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
