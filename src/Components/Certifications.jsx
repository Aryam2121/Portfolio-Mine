import { motion } from "framer-motion";
import CertificationCard from "./CertificateCard";
import certificates from "./certifications.json";

export default function Certifications() {
  return (
    <div 
    id="certifications-container"
    className="relative z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-8 sm:px-16">
     {/* Animated Heading with Neon Glow */}
      {/* Subtle Animated Glow Effect in Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] bg-sky-500/20 rounded-full blur-[120px] animate-pulse absolute -top-20 left-1/2 -translate-x-1/2"></div>
      </div>
     <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-sky-400 text-center text-4xl sm:text-5xl font-extrabold mb-14 drop-shadow-lg"
      >
        Courses<span className="text-white"> & Certifications</span>
      </motion.h3>

      {/* Certifications List */}
      <div className="certification-list flex flex-wrap justify-center gap-x-16 gap-y-10 mx-5 align-center">
  {certificates.map((certificate, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="min-h-[350px] max-w-[320px] w-full flex flex-col"
    >
      <CertificationCard {...certificate} />
    </motion.div>
  ))}
</div>

    </div>
  );
}
