import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black p-5 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Architecture Firm</h1>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <ul className="flex space-x-8 list-none text-lg text-white font-semibold">
              <a href="#">
                <li className="hover:text-yellow-500 cursor-pointer transition duration-300 ease-in-out">
                  1. Home
                </li>
              </a>
              <a href="#AboutUs">
                <li className="hover:text-yellow-500 cursor-pointer transition duration-300 ease-in-out">
                  2. About Us
                </li>
              </a>
              <a href="#Projects">
                <li className="hover:text-yellow-500 cursor-pointer transition duration-300 ease-in-out">
                  3. Projects
                </li>
              </a>
              <a href="#Services">
                <li className="hover:text-yellow-500 cursor-pointer transition duration-300 ease-in-out">
                  4. Services
                </li>
              </a>
              <a href="#Team">
                <li className="hover:text-yellow-500 cursor-pointer transition duration-300 ease-in-out">
                  5. Team
                </li>
              </a>
              <a href="#Blog">
                <li className="hover:text-yellow-500 cursor-pointer transition duration-300 ease-in-out">
                  6. Blog
                </li>
              </a>
              <a href="#ContactUs">
                <li className="hover:text-yellow-500 cursor-pointer transition duration-300 ease-in-out">
                  7. Contact Us
                </li>
              </a>
            </ul>
          </div>
          <div className="flex md:hidden items-center">
            <button
              className="text-lg text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <ul className="py-2 text-lg text-white font-semibold text-center">
            <a href="#">
              <li className="hover:text-yellow-500 cursor-pointer py-2 transition duration-300 ease-in-out">
                Home
              </li>
            </a>
            <a href="#AboutUs">
              <li className="hover:text-yellow-500 cursor-pointer py-2 transition duration-300 ease-in-out">
                About Us
              </li>
            </a>
            <a href="#Projects">
              <li className="hover:text-yellow-500 cursor-pointer py-2 transition duration-300 ease-in-out">
                Projects
              </li>
            </a>
            <a href="#Services">
              <li className="hover:text-yellow-500 cursor-pointer py-2 transition duration-300 ease-in-out">
                Services
              </li>
            </a>
            <a href="#Team">
              <li className="hover:text-yellow-500 cursor-pointer py-2 transition duration-300 ease-in-out">
                Team
              </li>
            </a>
            <a href="#Blog">
              <li className="hover:text-yellow-500 cursor-pointer py-2 transition duration-300 ease-in-out">
                Blog
              </li>
            </a>
            <a href="#ContactUs">
              <li className="hover:text-yellow-500 cursor-pointer py-2 transition duration-300 ease-in-out">
                Contact Us
              </li>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
