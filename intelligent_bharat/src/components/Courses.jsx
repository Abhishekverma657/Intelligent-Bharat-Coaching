import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const courses = [
    {
      title: 'PRE - FOUNDATION',
      standard: 'Std: 7th, 8th',
      bgColor: 'bg-red-400',
    },
    {
      title: 'FOUNDATION',
      standard: 'Std: 9th, 10th',
      bgColor: 'bg-blue-400',
    },
    {
      title: 'IIT & NEET',
      standard: 'Std: 11th, 12th, 12th (Pass Out)',
      subtitle: 'Along with Board Preparation',
      bgColor: 'bg-green-400',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 bg-gradient-to-br from-white via-gray-100 to-white">
      <h2 className="text-3xl font-bold text-center  mb-12" data-aos="fade-down">
        Our Course Offerings
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center gap-20 lg:gap-28 xl:gap-32" data-aos="zoom-in">
        {courses.map((course, idx) => (
          <DiamondCard key={idx} course={course} />
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center space-y-10 md:hidden" data-aos="fade-up">
        {courses.map((course, idx) => (
          <DiamondCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
};

const DiamondCard = ({ course }) => {
  return (
    <div className="transform rotate-45 w-52 h-52 flex items-center justify-center shadow-xl hover:scale-105 transition duration-300 ease-in-out">
      <div
        className={`transform -rotate-45 text-center p-4 rounded-lg ${course.bgColor} w-full h-full flex flex-col justify-center items-center`}
      >
        <h3 className="text-lg font-bold text-white">{course.title}</h3>
        <p className="text-sm text-white mt-1">{course.standard}</p>
        {course.subtitle && (
          <p className="text-xs text-white mt-1 italic">{course.subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
