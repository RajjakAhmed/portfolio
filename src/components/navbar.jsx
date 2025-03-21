import { useState } from "react";
import { FaLink, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="fixed top-2 right-4 text-white px-6 py-3 flex items-center gap-6 z-[9999]">
      {/* LinkTree Button */}
      <div className="relative">
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="flex items-center gap-2 bg-purple-500 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105"
        >
          <FaLink /> LinkTree
        </button>

        {/* LinkTree Dropdown */}
        {showLinks && (
          <div className="absolute right-0 mt-2 bg-gray-900 p-3 rounded-lg shadow-lg">
            <a
              href="https://github.com/RajjakAhmed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-4 py-2 hover:text-purple-400 transition-all"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rajjak-ahmed-abb1a1219/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-4 py-2 hover:text-purple-400 transition-all"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/_rajjak_ahmed_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-4 py-2 hover:text-purple-400 transition-all"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





  