// import React from "react";
// import Particle from "./Particle";

// const SocialLink = ({ href, iconClass, ariaLabel }) => (
//   <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
//     <i className={`${iconClass} text-white`}></i>
//   </a>
// );

// export default function Home() {
//   return (
//     <>
//       <Particle />
//       <div className="home flex flex-col items-center justify-center gap-4 h-screen">
//         <p className="name font-medium text-white text-8xl">
//           Aryaman<span className="text-sky-500"> Gupta</span>
//         </p>
//         <p className="title text-white text-2xl">
//           Software Developer & Data Engineer
//         </p>
//         <div className="socials text-white text-3xl flex gap-6 mt-2">
//           <SocialLink
//             href="mailto:aryamangupta2121@gmail.com"
//             iconClass="fa-solid fa-envelope"
//             ariaLabel="Email Aryaman Gupta"
//           />
//           <SocialLink
//             href=""
//             iconClass="fa-solid fa-file-lines"
//             ariaLabel="Resume"
//           />
//           <SocialLink
//             href="https://www.linkedin.com/in/aryaman-gupta-b077b2257/"
//             iconClass="fa-brands fa-linkedin"
//             ariaLabel="LinkedIn Profile"
//           />
//           <SocialLink
//             href="https://github.com/Aryam2121"
//             iconClass="fa-brands fa-github"
//             ariaLabel="GitHub Profile"
//           />
//           <SocialLink
//             href="https://twitter.com/AryamanGupta21"
//             iconClass="fa-brands fa-twitter"
//             ariaLabel="Twitter Profile"
//           />
//           <SocialLink
//             href="https://medium.com/@aryamanguptabilari"
//             iconClass="fa-brands fa-medium"
//             ariaLabel="Medium Profile"
//           />
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect } from "react";
import Particle from "./Particle";
import { motion } from "framer-motion";

const SocialLink = ({ href, iconClass, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="relative z-10"  // Ensure it's above other elements
  >
    <motion.i
      className={`${iconClass} text-white`}
      whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
    />
  </a>
);

export default function Home() {
  useEffect(() => {
    // Any other effects you may need
  }, []);

  return (
    <>
      <Particle />
      <div className="home flex flex-col items-center justify-center gap-6 h-screen relative">
        {/* Main Name Text */}
        <motion.p
          className="name font-bold text-white text-8xl md:text-8xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Aryaman<span className="text-sky-500"> Gupta</span>
        </motion.p>

        {/* Title Text */}
        <motion.p
          className="title text-white text-2xl md:text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Software Developer & Data Engineer
        </motion.p>

        {/* Social Links with Hover Animations */}
        <div className="socials text-white text-3xl md:text-4xl flex gap-6 mt-6">
          <SocialLink
            href="mailto:aryamangupta2121@gmail.com"
            iconClass="fa-solid fa-envelope"
            ariaLabel="Email Aryaman Gupta"
          />
          <SocialLink
          href="https://drive.google.com/file/d/1bSvw7G-OglSu3rcLx0IR73nY74O2jKCJ/view?usp=drive_link"  // Path to the PDF
          iconClass="fa-solid fa-file-lines"
          ariaLabel="Download Resume"
          download="AryamanGuptaResume.pdf" 
        />

          <SocialLink
            href="https://www.linkedin.com/in/aryaman-gupta-b077b2257/"
            iconClass="fa-brands fa-linkedin"
            ariaLabel="LinkedIn Profile"
          />
          <SocialLink
            href="https://github.com/Aryam2121"
            iconClass="fa-brands fa-github"
            ariaLabel="GitHub Profile"
          />
          <SocialLink
            href="https://twitter.com/AryamanGupta21"
            iconClass="fa-brands fa-twitter"
            ariaLabel="Twitter Profile"
          />
          <SocialLink
            href="https://medium.com/@aryamanguptabilari"
            iconClass="fa-brands fa-medium"
            ariaLabel="Medium Profile"
          />
        </div>

        {/* Glowing Border */}
        <motion.div
          className="absolute inset-0 border-2 border-sky-500 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ pointerEvents: "none" }}  // Ensure this doesn't block interactions
        ></motion.div>
      </div>
    </>
  );
}
