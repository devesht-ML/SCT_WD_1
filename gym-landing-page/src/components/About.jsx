import React from "react";
import pic2Img from "../assets/pic2.jpg";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 fade-in">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">About FitLife</h3>
          <p className="text-gray-700 leading-relaxed">
            We started FitLife with a simple mission: make fitness welcoming, effective, and sustainable
            for everyone. Our facility blends science-backed training, modern equipment, and personalized
            coaching so you see progress, stay safe, and enjoy the process.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-4 text-gray-800">
            <li className="bg-white p-4 rounded shadow">Certified Coaches</li>
            <li className="bg-white p-4 rounded shadow">Goal-Based Programs</li>
            <li className="bg-white p-4 rounded shadow">Clean, Modern Facility</li>
            <li className="bg-white p-4 rounded shadow">Supportive Community</li>
          </ul>
        </div>
        <div className="relative">
          <img src={pic2Img} alt="Gym interior" loading="lazy" decoding="async" className="rounded-xl shadow-lg object-cover w-full h-80 md:h-[26rem]"/>
          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg">
            5,000+ Members Transformed
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
