import profileImg from "../assets/superman1.jpeg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about-section"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 overflow-hidden"
      style={{ zIndex: 100 }}
    >
      {/* Subtle Animated Glow Effect in Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-sky-500/20 rounded-full blur-[150px] animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Left Section - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        {/* Greeting */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-sky-400">Aryaman Gupta</span>{" "}
          <span className="wave">👋🏻</span>
        </h1>

        {/* Introduction */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Based in <span className="text-sky-400">Ghaziabad</span>, I'm a
          results-driven{" "}
          <span className="text-sky-400">MERN Stack Developer</span> pursuing my{" "}
          <span className="text-sky-400">
            B.Tech in Computer Science & Engineering
          </span>{" "}
          from Ajay Kumar Garg Engineering College, Ghaziabad.
        </p>

        
        {/* 🔹 Technical Skills */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I specialize in{" "}
          <span className="text-sky-400">MERN Stack Development</span>, working with:  
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
          <li><strong className="text-sky-400">Programming:</strong> C, C++, JavaScript, SQL, HTML, CSS</li>
          <li><strong className="text-sky-400">Frontend:</strong> ReactJS, Next.js, Tailwind CSS, Heroicons, Axios, Fetch API</li>
          <li><strong className="text-sky-400">Backend:</strong> Node.js, Express.js, Socket.IO, REST API, WebSockets</li>
          <li><strong className="text-sky-400">Databases:</strong> MongoDB, PostgreSQL, SQL, Prisma, Firebase</li>
          <li><strong className="text-sky-400">State Management:</strong> Redux Toolkit, Context API</li>
          <li><strong className="text-sky-400">DevOps:</strong> Docker, Git, GitHub, Render, Vercel</li>
          <li><strong className="text-sky-400">Other Skills:</strong> Authentication (JWT, OAuth), API Integration, Web Security, Performance Optimization</li>
        </ul>

        {/* 🔹 Key Projects */}
        <p className="mt-8 text-lg text-gray-300 leading-relaxed">
          Here are some of my major projects:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-4">
        <li>
    <strong className="text-sky-400">SANGAM (SIH 2024 Finalist):</strong>  
    A government-backed Inter-Departmental Cooperation Platform for Smart Cities, designed to enhance urban planning and real-time collaboration. Built with React.js, Node.js, MongoDB, and Leaflet.js, integrating Mapbox for geospatial intelligence.
  </li>

  <li>
    <strong className="text-sky-400">Coal Mine Safety & Productivity System:</strong>  
    A digital shift handover and incident reporting platform ensuring worker safety and compliance with DGMS (Directorate General of Mines Safety) guidelines. Developed using MERN stack, it streamlines operations and enhances safety protocols in coal mining environments.
  </li>

  <li>
    <strong className="text-sky-400">PayManni:</strong>  
    A modern fintech application offering secure digital payments, wallet top-ups, and bill payments. Implements JWT authentication and Razorpay Payment Gateway for seamless transactions and high-end security.
  </li>
        </ul>
      </motion.div>
      {/* Right Section - Enlarged Profile Image without Blue Tint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="relative"
      >
      
        <img
          src={profileImg}
          alt="Aryaman Gupta"
          className="rounded-full w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover shadow-lg shadow-sky-500/40 border-4 border-sky-500/30"
        />
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
  <motion.div
    initial={{ opacity: 0, width: "0%" }}
    animate={{ opacity: 1, width: "100%" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="h-[4px] w-full max-w-5xl bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-lg shadow-sky-500 rounded-full"
  ></motion.div>
</div>

      
    </section>
    
  );
}
