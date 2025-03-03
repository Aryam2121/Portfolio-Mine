import React, { useState, useEffect } from "react";

const navLinks = [
  { url: "#", label: "Home" },
  { url: "#about-section", label: "About" },
  { url: "#skill-container", label: "Skills" },
  { url: "#workex-container", label: "Work Exp" },
  { url: "#projects-container", label: "Projects" },
  { url: "#certifications-container", label: "Certifications" },
  { url: "https://medium.com/@aryamanguptabilari", label: "Blogs" },
];

const Navbar = () => {
  const [isOpaque, setIsOpaque] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isClosingAnimation, setIsClosingAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpaque(window.scrollY > 220);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setIsClosingAnimation(false);
  };

  const handleCloseClick = () => {
    setIsClosingAnimation(true);
    setTimeout(() => {
      setIsMobileNavOpen(false);
      setIsClosingAnimation(false);
    }, 500);
  };

  const handleNavItemClick = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* 🔹 Desktop Navbar */}
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center h-16 px-10 md:px-20 transition-all duration-300 ${
          isOpaque ? "bg-slate-900/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
        style={{ zIndex: 10000 }}
      >
        {/* 🔹 Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">AG</div>

        {/* 🔹 Toggle Button for Mobile */}
        <button
          className="text-white text-2xl md:hidden"
          aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
          onClick={handleToggleClick}
        >
          {isMobileNavOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>

        {/* 🔹 Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              onClick={handleNavItemClick}
              className="relative group transition-all duration-300 hover:text-sky-400"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* 🔹 Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-slate-950 transition-transform duration-500 ${
          isMobileNavOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{ zIndex: 9999 }}
      >
        <button
          className="absolute top-6 right-8 text-white text-3xl"
          aria-label="Close menu"
          onClick={handleCloseClick}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <nav className="flex flex-col items-center justify-center h-full space-y-6 text-white text-xl font-medium">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              onClick={handleNavItemClick}
              className="transition-all duration-300 hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
