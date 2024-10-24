import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left section with brand name or message */}
          <span className="text-sm sm:text-base mb-4 sm:mb-0">
            © 2024 EEPL Classroom. All rights reserved.
          </span>

          {/* Right section with navigation links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="text-sm hover:text-gray-400 transition-colors duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm hover:text-gray-400 transition-colors duration-200 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:text-gray-400 transition-colors duration-200 ease-in-out"
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className="text-sm hover:text-gray-400 transition-colors duration-200 ease-in-out"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
