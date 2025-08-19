import React from "react";
import LisaImg from "../assets/lisa_trainer.webp"
import CardioTrainerImg from "../assets/mike_trainer.webp"
import MobilityImg from "../assets/mobility_trainer.jpg"
import StrengthImg from "../assets/carlos_trainer.webp"

function Trainers() {
  const trainers = [
    {
      name: "John Strong",
      expert: "Strength Coach",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=60",
      bio: "John specializes in powerlifting and injury-prevention strategies for safe strength gains.",
    },
    {
      name: "Lisa Kudrow",
      expert: "Yoga Specialist",
      img: LisaImg,
      bio: "Lisa blends vinyasa flow with mobility drills to improve flexibility and reduce stress.",
    },
    {
      name: "Mike Cardio",
      expert: "Cardio Trainer",
      img: CardioTrainerImg,
      bio: "Mike builds endurance with fun HIIT sessions and personalized cardio plans.",
    },
    {
      name: "Aisha Flex",
      expert: "Mobility & Rehab",
      img: MobilityImg,
      bio: "Aisha helps members move pain‑free with mobility drills and corrective exercise.",
    },
    {
      name: "Carlos Power",
      expert: "Functional Strength",
      img: StrengthImg,
      bio: "Carlos builds athletic strength with kettlebells, sleds, and compound movements.",
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-50 fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 uppercase">Our Trainers</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition">
              <img src={trainer.img} alt={trainer.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100" />
              <h4 className="text-xl font-bold">{trainer.name}</h4>
              <p className="text-blue-600 font-medium">{trainer.expert}</p>
              <p className="text-gray-700 mt-2 text-sm">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
