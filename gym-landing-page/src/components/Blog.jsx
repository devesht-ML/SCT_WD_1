import React, { useState } from "react";

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const posts = [
    {
      title: "5 Beginner Strength Tips",
      excerpt: "Start with form, focus on compound lifts, and progress weekly for steady gains.",
      img: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=60",
      date: "Aug 20, 2025",
      content: "Master form on squats, deadlifts, presses; add weight slowly; track workouts; recover with sleep and protein; stay consistent for 12+ weeks.",
    },
    {
      title: "Cardio: HIIT vs Steady State",
      excerpt: "When to choose intervals and when to go long. Pros, cons, and sample workouts.",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=60",
      date: "Aug 12, 2025",
      content: "Use HIIT when time is short and you want metabolic punch; use steady state to build base endurance and aid recovery. Mix both across the week.",
    },
    {
      title: "Recovery 101: Sleep & Mobility",
      excerpt: "Better recovery means better results. Simple routines to feel great and perform better.",
      img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=60",
      date: "Aug 5, 2025",
      content: "Aim for 7–9 hours sleep, hydrate, and add 10–15 minutes of mobility work daily to reduce stiffness and improve performance.",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">From Our Blog</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" decoding="async" className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-1">{p.date}</p>
                <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                <p className="text-gray-700 mb-4">{p.excerpt}</p>
                <button
                  type="button"
                  onClick={() => setSelectedPost(p)}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden">
            <img src={selectedPost.img} alt={selectedPost.title} loading="lazy" decoding="async" className="h-56 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-1">{selectedPost.date}</p>
              <h4 className="text-2xl font-extrabold mb-2">{selectedPost.title}</h4>
              <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 rounded border hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;


