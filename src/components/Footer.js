import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Quick-Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:text-gray-400 cursor-pointer">Restaurants</li>
              <li className="hover:text-gray-400 cursor-pointer">Offers</li>
              <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
              <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-gray-400 cursor-pointer">FAQs</li>
              <li className="hover:text-gray-400 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Top Cities</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">Mumbai</li>
              <li className="hover:text-gray-400 cursor-pointer">Delhi</li>
              <li className="hover:text-gray-400 cursor-pointer">Bengaluru</li>
              <li className="hover:text-gray-400 cursor-pointer">Kolkata</li>
              <li className="hover:text-gray-400 cursor-pointer">Bhubaneswar</li>
              <li className="hover:text-gray-400 cursor-pointer">Patna</li>
              <li className="hover:text-gray-400 cursor-pointer">Lucknow</li>
              <li className="hover:text-gray-400 cursor-pointer">Jaipur</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Social Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">Facebook</li>
              <li className="hover:text-gray-400 cursor-pointer">Twitter</li>
              <li className="hover:text-gray-400 cursor-pointer">Instagram</li>
              <li className="hover:text-gray-400 cursor-pointer">LinkedIn</li>
              <li className="hover:text-gray-400 cursor-pointer">Youtube</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} BiteBazaar. All rights reserved.
          <h4> Github Repository Link</h4>
          <Link ></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;