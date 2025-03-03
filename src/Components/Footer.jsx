import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-gradient-to-b from-slate-900 to-gray-950 py-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Tagline */}
      <p className="text-white font-semibold text-xl md:text-2xl tracking-wide">
        Let's Connect
      </p>

      {/* Social Links with Glow Effect */}
      <ul className="flex gap-x-8 justify-center mt-4">
        {[
          { href: "mailto:aryamangupta2121@gmail.com", icon: "fa-solid fa-envelope socials-icon text-white text-2xl", label: "Email" },
          { href: "https://github.com/Aryam2121", icon: "fa-github", label: "GitHub" },
          { href: "https://www.linkedin.com/in/aryaman-gupta-b077b2257/", icon: "fa-linkedin", label: "LinkedIn" },
          { href: "https://twitter.com/AryamanGupta21", icon: "fa-twitter", label: "Twitter" },
          { href: "https://www.instagram.com/_aryaman_gupta_01/", icon: "fa-instagram", label: "Instagram" }
        ].map((social, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.2, textShadow: "0px 0px 12px rgba(0, 255, 255, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              <i className={`fa-brands ${social.icon} text-white text-3xl transition-all`}></i>
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Glowing Horizontal Divider */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mt-6 h-[3px] bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-lg shadow-sky-500 rounded-full mx-auto w-full max-w-5xl"
      ></motion.div>

      {/* Copyright Text */}
      <p className="text-gray-400 text-sm mt-4">
        Made with <span className="text-red-500">❤️</span> by Aryaman Gupta
      </p>
    </motion.footer>
  );
}
