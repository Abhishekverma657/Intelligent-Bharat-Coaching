import React, { useEffect } from 'react';
 
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-gray-100">
      {/* Image */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0" data-aos="fade-right">
        <img
          src="/IB_logo.png" // Apne image ka path yahan daalo
          alt="About Us"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 w-full md:pl-10" data-aos="fade-left">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">About Us</h2>
        <div className="w-24 h-1 bg-red-600 mb-6 rounded"></div>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Welcome to the Best Coaching Center – your trusted partner in the pursuit of academic excellence and holistic personal development.
We specialize in guiding students who aspire to not only excel in their studies but also build strong foundational skills for long-term success.

Our team of highly experienced and passionate educators creates a nurturing, disciplined, and motivating learning environment. We offer focused, exam-oriented support in subjects such as IIT , JEE , NEET, tailored to the unique learning pace and needs of each student.

At our core, we believe education goes beyond textbooks. Through concept clarity, practical understanding, and regular mentoring, we aim to instill confidence, curiosity, and a growth mindset in every learner.

Join us in this empowering journey – where knowledge meets guidance, efforts turn into results, and students evolve into confident achievers ready to take on every challenge of the future.
        </p>
        <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
