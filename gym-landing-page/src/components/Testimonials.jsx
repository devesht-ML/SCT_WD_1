import React from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Priya S.",
      text: "I lost 8kg in 3 months. Coaches here actually care and personalize every session!",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60",
      rating: 5,
    },
    {
      name: "Arjun K.",
      text: "The programs are structured and fun. I feel stronger and more confident every week.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60",
      rating: 5,
    },
    {
      name: "Meera T.",
      text: "Clean facility, great community, and amazing trainers. Highly recommend!",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60",
      rating: 5,
    },
    {
      name: "Rahul M.",
      text: "Best gym I've ever joined. The equipment is top-notch and trainers are incredibly knowledgeable.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=60",
      rating: 5,
    },
    {
      name: "Anjali P.",
      text: "Lost 12kg and gained so much confidence. The community here is amazing and supportive.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=60",
      rating: 5,
    },
    {
      name: "Vikram S.",
      text: "Professional trainers, clean environment, and results-driven programs. Worth every penny!",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=60",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50 fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">What People Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img src={r.img} alt={r.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
              <div className="flex justify-center mb-2">
                {[...Array(r.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{r.text}"</p>
              <p className="mt-3 font-semibold">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;


