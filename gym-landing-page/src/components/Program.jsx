import React from "react";
import strengthImg from "../assets/strength-training.jpg";
import cardioImg from "../assets/cardio.webp"
import yogaImg from "../assets/yoga.webp"

function Programs() {
  const data = [
    {
      title: "Strength Training",
      desc: "Progressive overload plans that focus on core lifts, accessory work, and perfect form.",
      img: strengthImg,
      tags: ["Barbell", "Hypertrophy", "Form Coaching"],
    },
    {
      title: "Cardio Fitness",
      desc: "Intervals, steady-state, and fun group sessions that torch calories and boost VO2 max.",
      img: cardioImg,
      tags: ["HIIT", "Endurance", "Heart Health"],
    },
    {
      title: "Yoga & Mobility",
      desc: "Build flexibility and balance while relieving stress through guided flows and breathwork.",
      img: yogaImg,
      tags: ["Vinyasa", "Recovery", "Mindfulness"],
    },
    {
      title: "Functional Training",
      desc: "Full-body circuits that improve everyday movement and athletic performance.",
      img: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=900&q=60",
      tags: ["Kettlebell", "Core", "Balance"],
    },
    {
      title: "CrossFit Basics",
      desc: "Coach-led fundamentals to master technique before intensity.",
      img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=900&q=60",
      tags: ["WOD", "Olympic Lifts", "Community"],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 uppercase">Programs</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-xl transition">
              <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="h-52 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs bg-white px-2 py-1 rounded border">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
