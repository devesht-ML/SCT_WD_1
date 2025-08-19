import React from "react";

function Plans() {
  const plans = [
    {
      name: "Basic",
      price: "$29/mo",
      desc: "Great for getting started",
      features: ["Gym Access", "Locker", "1 Trainer Session"],
      highlight: false,
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=200&q=60",
    },
    {
      name: "Standard",
      price: "$49/mo",
      desc: "Best value for most members",
      features: ["Gym + Yoga", "3 Trainer Sessions", "Group Classes"],
      highlight: true,
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=200&q=60",
    },
    {
      name: "Premium",
      price: "$69/mo",
      desc: "Unlimited access to everything",
      features: ["All Areas", "Unlimited Trainers", "Personalized Plan"],
      highlight: false,
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=200&q=60",
    },
  ];

  return (
    <section id="plans" className="py-20 bg-white fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 uppercase">Membership Plans</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative p-8 rounded-xl text-center shadow hover:shadow-xl transition border ${plan.highlight ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
              {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-blue-600 text-white px-3 py-1 rounded-full">Popular</span>}
              <img src={plan.img} alt={`${plan.name} plan`} loading="lazy" decoding="async" className="w-16 h-16 object-cover rounded-full mx-auto mb-3 ring-4 ring-white shadow" />
              <h4 className="text-2xl font-extrabold mb-1">{plan.name}</h4>
              <p className="text-gray-600 mb-1">{plan.desc}</p>
              <p className="text-blue-600 font-bold text-2xl mb-4">{plan.price}</p>
              <ul className="text-gray-800 mb-6 space-y-2 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-blue-600">✓</span>{f}</li>
                ))}
              </ul>
              <button className={`w-full px-6 py-2 rounded font-semibold ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 border hover:bg-blue-50'}`}>Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plans;
