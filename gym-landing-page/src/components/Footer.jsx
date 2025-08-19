import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-5 text-center md:text-left">
        <div>
          <h4 className="text-2xl font-extrabold mb-2">FitLife Gym</h4>
          <p className="text-gray-300">Train smarter with expert coaches and modern programs.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Visit</h5>
          <p>1234 Fitness Street<br/>New Delhi, India</p>
          <p className="mt-2">Mon–Fri: 6am – 10pm<br/>Sat–Sun: 7am – 8pm</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <p>Email: fitness@example.com</p>
          <p>Phone: +91 12345 67890</p>
          <p className="mt-2">WhatsApp: +91 98765 43210</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#programs" className="hover:text-blue-400">Programs</a></li>
            <li><a href="#trainers" className="hover:text-blue-400">Trainers</a></li>
            <li><a href="#plans" className="hover:text-blue-400">Plans</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Follow Us</h5>
          <ul className="space-y-2">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">Instagram</a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">Twitter</a>
            </li>
            <li>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">YouTube</a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-10">© {new Date().getFullYear()} FitLife Gym. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
