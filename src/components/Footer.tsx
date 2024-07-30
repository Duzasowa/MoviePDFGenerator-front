import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-5 bg-black text-center text-gray-500">
      <div className="text-sm uppercase tracking-wider mb-2">
        Movie PDF Generator
      </div>
      <div className="text-xs text-gray-600">
        © {new Date().getFullYear()} Movie PDF Generator. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
