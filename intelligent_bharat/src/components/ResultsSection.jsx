import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const students = [
  { name: "Radhika", college: "AIIMS, Delhi", exam: "NEET", img: "/female3.png" },
  { name: "Harnoor", college: "IIT Bombay", exam: "IIT-JEE", img: "/male3.png" },
  { name: "Vipasha", college: "Maulana Azad Medical College", exam: "NEET", img: "/female2.png" },
  { name: "Kapil", college: "IIT Kanpur", exam: "IIT-JEE", img: "/male2.png" },
  { name: "Anshika", college: "GMC, Patiala", exam: "NEET", img: "/female3.png" },
  { name: "Vanika", college: "IIT Delhi", exam: "IIT-JEE", img: "/female2.png" },
  { name: "Anshika", college: "Lady Hardinge Medical College", exam: "NEET", img: "/female3.png" },
  { name: "Parvesh", college: "IIT Kharagpur", exam: "IIT-JEE", img: "/male2.png" },
  { name: "Arshdeep", college: "KGMU, Lucknow", exam: "NEET", img: "/male3.png" },
  { name: "Kashish", college: "IIT Madras", exam: "IIT-JEE", img: "/female2.png" },
];

const ResultsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800" data-aos="fade-down">
          Meet Our Toppers from IIT-JEE & NEET — Selected in India's Top Institutes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              data-aos="zoom-in"
            >
              <div className="h-48 w-full overflow-hidden bg-gray-100">
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.college}</p>
                <p className="text-xs text-blue-600 font-medium mt-1">
                  {student.exam} Topper
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
