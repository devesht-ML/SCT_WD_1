import React from "react";
import heroBg from "../assets/background.jpeg";  // use your own image path here

function Hero() {
  return (
    <section id="home"
      className="relative h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase">
          Transform Your Body, Elevate Your Life
        </h2>
        <p className="mt-4 text-gray-200 max-w-2xl">
          Join FitLife and train with expert coaches, smart programs, and a community that keeps you motivated.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#plans" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Join Now</a>
          <a href="#programs" className="px-6 py-3 bg-white/90 text-gray-900 rounded-md hover:bg-white transition">Explore Programs</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
