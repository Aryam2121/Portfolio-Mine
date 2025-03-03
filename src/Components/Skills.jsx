
import skillsData from"./Skills.json";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <div
      id="skill-container"
      className="skill-container pb-20 pt-24 bg-slate-950"
      style={{ zIndex: 100, position: "relative" }}
    >
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
        Skills<span className="text-white"> & Tech</span>
      </motion.h3>

      <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
        {skillsData.length > 0 ? (
          skillsData.map((skill, index) => (
            <div key={index} className="w-1/8">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))
        ) : (
          <p className="text-white">No skills data available.</p>
        )}
      </div>
    </div>
  );
}
