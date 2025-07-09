import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Neptun</h3>
          <p className="text-sm text-gray-300">
            Neptun supermarketləri gündəlik ehtiyaclarınızı qarşılamaq üçün geniş çeşiddə məhsullar təqdim edir.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">Phone: +994 12 345 67 89</p>
          <p className="text-sm text-gray-300">Email: support@neptun.az</p>
          <p className="text-sm text-gray-300">Address: Baku, Azerbaijan</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Neptun Supermarket. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
