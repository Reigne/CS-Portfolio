import React, { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa6";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home"); // Treat empty hash as #home
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    // Set initial active section based on the current URL hash
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

        <div className="flex flex-row justify-center items-center gap-8 w-4/12">
          <a
            href="#home"
            className={`font-montserrat relative group cursor-pointer ${getLinkClass(
              "#home"
            )}`}
          >
            Home
            <span
              className={`rounded block absolute left-1/2 bottom-0 h-0.5 bg-white group-hover:bg-zinc-400 w-full transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-x-100 ${getUnderlineClass(
                ["#home", ""]
              )}`}
            ></span>
          </a>
          <a
            href="#services"
            className={`font-montserrat relative group cursor-pointer ${getLinkClass(
              "#services"
            )}`}
          >
            Services
            <span
              className={`rounded block absolute left-1/2 bottom-0 h-0.5 bg-white group-hover:bg-zinc-400 w-full transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-x-100  ${getUnderlineClass(
                ["#services"]
              )}`}
            ></span>
          </a>
          <a
            href="#portfolio"
            className={`font-montserrat relative group cursor-pointer ${getLinkClass(
              "#portfolio"
            )}`}
          >
            Portfolio
            <span
              className={`rounded block absolute left-1/2 bottom-0 h-0.5 bg-white group-hover:bg-zinc-400 w-full transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-x-100  ${getUnderlineClass(
                ["#portfolio"]
              )}`}
            ></span>
          </a>
          <a
            href="#ourteam"
            className={`font-montserrat relative group cursor-pointer ${getLinkClass(
              "#ourteam"
            )}`}
          >
            Our Team
            <span
              className={`rounded block absolute left-1/2 bottom-0 h-0.5 bg-white group-hover:bg-zinc-400 w-full transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-x-100 ${getUnderlineClass(
                ["#ourteam"]
              )}`}
            ></span>
          </a>
        </div>

        <div className="flex flex-row justify-end items-center gap-4 w-4/12">
          <a
            href="https://www.tiktok.com/@capstonesolutions?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <FaTiktok size={20} />
          </a>
          <a
            // href=""
            // target="_blank"
            // rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/capstonesolutions24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <AiFillInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61559731192667"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <FaFacebookF size={20} />
          </a>

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
    </nav>
  );
};

export default Navbar;
