import { useState } from "react";
import "@fontsource/orbitron";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-xl font-bold text-blue-600">
            <img src="/IB_logo.png" alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
            <h1 className="text-2xl font-bold text-red-600 font-orbitron tracking-wide drop-shadow-sm">
              Intelligent <span className="text-blue-900">Bharat</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-600 font-medium hover:text-red-600"
              activeClass="text-red-600 border-b-2 border-red-600"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-600 font-medium hover:text-red-600"
              activeClass="text-red-600 border-b-2 border-red-600"
            >
              About Us
            </Link>
            <Link
              to="selections"
              smooth={true}
              duration={500}
              className="text-gray-600 font-medium hover:text-red-600"
              activeClass="text-red-600 border-b-2 border-red-600"
            >
              Selections
            </Link>
            <Link
              to="courses"
              smooth={true}
              duration={500}
              className="text-gray-600 font-medium hover:text-red-600"
              activeClass="text-red-600 border-b-2 border-red-600"
            >
              Courses
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-600 font-medium hover:text-red-600"
              activeClass="text-red-600 border-b-2 border-red-600"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block text-gray-600 font-medium hover:text-red-600"
            activeClass="text-red-600 border-b-2 border-red-600"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block text-gray-600 font-medium hover:text-red-600"
            activeClass="text-red-600 border-b-2 border-red-600"
          >
            About Us
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="block text-gray-600 font-medium hover:text-red-600"
            activeClass="text-red-600 border-b-2 border-red-600"
          >
            Selections
          </Link>
          <Link
            to="courses"
            smooth={true}
            duration={500}
            className="block text-gray-600 font-medium hover:text-red-600"
            activeClass="text-red-600 border-b-2 border-red-600"
          >
            Courses
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-gray-600 font-medium hover:text-red-600"
            activeClass="text-red-600 border-b-2 border-red-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
