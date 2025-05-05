import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Center Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800">
            Get in Touch With Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Have any questions about courses, admission, or fees? Fill the form or contact us below.
          </p>
        </div>

        {/* Content: Grid with Info & Form */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left" data-aos="fade-right">
  {/* Logo */}
  <div className="w-50 h-50 rounded-full bg-gray-200 overflow-hidden mb-6 shadow-lg flex items-center justify-center">
    <img
      src="/IB_logo.png"
      alt=" Institute Logo"
      className="w-50 h-50 object-contain"
    />
  </div>

  {/* Contact Info */}
  <ul className="space-y-4 text-gray-700 text-lg">
    <li><strong>📍 Address:</strong>   पता – रुषिया फर्नीचर्स की नई वाली बिल्डिंग में <br />
    जायसवाल टॉवर के पास, कालपी रोड, उरई</li>
    <li><strong>📞 Phone:</strong>  9336305261, 7266842150</li>
    <li><strong>✉️ Email:</strong>  intelligent_bharat@gmail.com</li>
  </ul>
</div>


          {/* Right Side - Form */}
          <form
            className="bg-gray-100 p-6 rounded-xl shadow-lg space-y-4"
            data-aos="fade-left"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Send us a message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
