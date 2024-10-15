import React, { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai"; // Import hamburger icon

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for fullscreen menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    setActiveSection(window.location.hash || "#home");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const getLinkClass = (hash) => {
    return activeSection === hash ? "text-white" : "text-gray-400";
  };

  const getUnderlineClass = (hashes) => {
    return hashes.includes(activeSection) ? "scale-x-100" : "scale-x-0";
  };

  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu function

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-10 sm:px-20 md:px-32 lg:px-40 xl:px-48 transition-colors duration-300 ${
        scrolled ? "bg-zinc-950/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between items-center py-5">
        <a
          href="#home"
          className="flex flex-row justify-start items-center gap-4 w-4/12"
        >
          <img
            src="/images/logo.jpg"
            height={40}
            width={40}
            className="rounded-full shadow shadow-zinc-50"
          />
          <h1 className="font-montserrat font-bold text-lg">
            Capstone Solutions
          </h1>
        </a>

        {/* Hamburger Icon for small screens */}
        <div className="block sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            <AiOutlineMenu size={24} />
          </button>
        </div>

        {/* Desktop Navigation (hidden on small screens) */}
        <div className="hidden sm:flex flex-row justify-center items-center gap-8 w-4/12">
          {["#home", "#services", "#portfolio", "#ourteam"].map((section) => (
            <a
              key={section}
              href={section}
              className={`font-montserrat relative group cursor-pointer ${getLinkClass(
                section
              )}`}
            >
              {section.replace("#", "").charAt(0).toUpperCase() + section.slice(2)}
              <span
                className={`rounded block absolute left-1/2 bottom-0 h-0.5 bg-white group-hover:bg-zinc-400 w-full transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-x-100 ${getUnderlineClass(
                  [section]
                )}`}
              ></span>
            </a>
          ))}
        </div>

        {/* Social Icons and Hire Us Button (hidden on small screens) */}
        <div className="hidden sm:flex flex-row justify-end items-center gap-4 w-4/12">
          {[
            { icon: <FaTiktok size={20} />, link: "https://www.tiktok.com/@capstonesolutions?is_from_webapp=1&sender_device=pc" },
            { icon: <FaTwitter size={20} />, link: "#" },
            { icon: <AiFillInstagram size={20} />, link: "https://www.instagram.com/capstonesolutions24" },
            { icon: <FaFacebookF size={20} />, link: "https://www.facebook.com/profile.php?id=61559731192667" },
          ].map(({ icon, link }) => (
            <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300 cursor-pointer">
              {icon}
            </a>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=capstone.solutions24@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-full border-zinc-700 px-8 py-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <p className="font-montserrat">Hire Us</p>
          </a>
        </div>
      </div>

      {/* Fullscreen Menu for Small Screens */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button onClick={toggleMenu} className="absolute top-5 right-5 text-white">
            Close
          </button>
          <div className="flex flex-col gap-8">
            {["#home", "#services", "#portfolio", "#ourteam"].map((section) => (
              <a
                key={section}
                href={section}
                onClick={toggleMenu} // Close menu on link click
                className={`font-montserrat text-2xl text-white ${getLinkClass(section)}`}
              >
                {section.replace("#", "").charAt(0).toUpperCase() + section.slice(2)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
