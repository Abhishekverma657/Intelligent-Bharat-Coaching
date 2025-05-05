import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* Logo + Description */}
        <div>
          <h1 className="text-2xl font-bold text-red-600 font-orbitron tracking-wide drop-shadow-sm">
            Intelligent <span className="text-blue-900">Bharat</span>
          </h1>
          <p className="mt-4 text-sm">
          Our coaching center helps students achieve academic excellence and personal growth. With expert educators, we provide personalized support in \[subjects or exams], fostering confidence and success. Join us to unlock your full potential!

          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
            <FaFacebookF className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-red-500 cursor-pointer" />
            <FaXTwitter className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">Selections</a></li>
            <li><a href="#" className="hover:text-red-500">Courses</a></li>
             
            <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Others</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Help Center</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <MdLocationOn className="text-lg mt-1 shrink-0" />
              <p>
                पता – रुषिया फर्नीचर्स की नई वाली बिल्डिंग में <br />
                जायसवाल टॉवर के पास, कालपी रोड, उरई
              </p>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MdPhone className="text-lg" />
              Mob: 9336305261, 7266842150
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MdEmail className="text-lg" />
              intelligent_bharat@gmail.com
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © Copyright 2025 Intelligent Bharat. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
