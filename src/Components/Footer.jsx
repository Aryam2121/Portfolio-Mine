import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="footer bg-slate-900 py-5 mx-auto"
      style={{ zIndex: 100, position: "relative" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <p className="footer-tagline text-white font-medium text-center text-xl md:text-2xl mb-4">
        Connect with me
      </p>
      <ul className="socials-container flex gap-x-6 justify-center my-3">
        {/* Social Links with Hover Effects */}
        <motion.li
          whileHover={{
            scale: 1.3,
            rotate: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <a
            href="mailto:aryamangupta2121@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Aryaman Gupta"
          >
            <i className="fa-solid fa-envelope socials-icon text-white text-2xl"></i>
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.3,
            rotate: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <a
            href="https://github.com/Aryam2121"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fa-brands fa-github socials-icon text-white text-2xl"></i>
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.3,
            rotate: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <a
            href="https://www.linkedin.com/in/aryaman-gupta-b077b2257/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin socials-icon text-white text-2xl"></i>
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.3,
            rotate: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <a
            href="https://twitter.com/AryamanGupta21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <i className="fa-brands fa-twitter socials-icon text-white text-2xl"></i>
          </a>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 1.3,
            rotate: 15,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <a
            href="https://www.instagram.com/_aryaman_gupta_01/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <i className="fa-brands fa-instagram socials-icon text-white text-2xl"></i>
          </a>
        </motion.li>
      </ul>

      <hr className="horizontal-line border-gray-700 my-4" />
      <p className="copyright text-gray-400 text-center text-xs mt-4 mb-2">
        Made with <span className="text-red-500">❤️</span> by Aryaman Gupta
      </p>
    </motion.div>
  );
}
