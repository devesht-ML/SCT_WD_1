import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold tracking-tight text-blue-600">FitLife</a>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Reviews</a></li>
          <li><a href="#programs" className="hover:text-blue-600">Programs</a></li>
          <li><a href="#trainers" className="hover:text-blue-600">Trainers</a></li>
          <li><a href="#plans" className="hover:text-blue-600">Plans</a></li>
          <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
