import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white fade-in">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">Contact & Location</h3>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h4 className="text-2xl font-bold mb-6">Get In Touch</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your fitness goals or ask any questions..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Location & Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6">Visit Us</h4>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="font-semibold text-lg mb-2">📍 Address</h5>
                <p className="text-gray-700">
                  Near Vyapar Kendra, DLF<br />
                  Gurugram, Haryana, India
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="font-semibold text-lg mb-2">🕒 Hours</h5>
                <div className="space-y-1 text-gray-700">
                  <p><span className="font-medium">Monday - Friday:</span> 6:00 AM - 10:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 7:00 AM - 8:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> 7:00 AM - 8:00 PM</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h5 className="font-semibold text-lg mb-2">📞 Contact</h5>
                <div className="space-y-1 text-gray-700">
                  <p><span className="font-medium">Phone:</span> +91 12345 67890</p>
                  <p><span className="font-medium">WhatsApp:</span> +91 98765 43210</p>
                  <p><span className="font-medium">Email:</span> fitness@example.com</p>
                </div>
              </div>
            </div>

            {/* Interactive Google Map */}
            <div className="mt-6">
              <h5 className="font-semibold text-lg mb-3">🗺️ Find Us</h5>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0812!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM0LjIiTiA3N8KwMDQnNTIuMyJF!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FitLife Gym - Near Vyapar Kendra, DLF, Gurugram"
                  className="w-full h-64"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h6 className="font-semibold text-blue-900 mb-2">📍 FitLife Gym Location</h6>
                  <p className="text-blue-800 text-sm mb-2">Near Vyapar Kendra, DLF, Gurugram</p>
                  <a 
                    href="https://maps.google.com/?q=Vyapar+Kendra+DLF+Gurugram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                  >
                    <span>🗺️</span>
                    Get Directions to FitLife Gym
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
