// export default function ProjectCard(props) {
//     return (
//       <div
//         className="project-container flex flex-col align-center p-5"
//         style={{
//           borderRadius: "20px",
//           border: "0.5px solid #0369a1",
//           minWidth: "20rem",
//           maxWidth: "20rem",
//           minHeight: "10rem",
//         }}
//       >
//         <img
//           src={props.ImgSrc}
//           alt=""
//           className="rounded mb-4"
//           style={{ height: "10rem" }}
//         />
//         <h4 className="text-white font-bold mb-2" style={{ minHeight: "3rem" }}>
//           {props.Name}
//         </h4>
//         <p className="text-gray-400 text-sm" style={{ flexGrow: "1" }}>
//           {props.Desc}
//         </p>
//         <div className="mt-5 mb-3 flex justify-start">
//           {props.GithubLink && (
//             <a
//               href={props.GithubLink}
//               className="btn px-7 rounded"
//               style={{
//                 backgroundColor: "#e0f2fe",
//                 color: "#0284c7",
//                 marginRight: "8px",
//                 border: "1px solid #e0f2fe",
//               }}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               GitHub
//             </a>
//           )}
//           {props.Demo && (
//             <a
//               href={props.Demo}
//               className="btn px-7 rounded"
//               style={{ backgroundColor: "#0ea5e9", color: "#fff" }}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Demo
//             </a>
//           )}
//         </div>
//       </div>
//     );
//   }
import { motion } from "framer-motion";

export default function ProjectCard(props) {
  return (
    <motion.div
      className="relative flex flex-col items-center p-6 min-w-[20rem] max-w-[22rem] min-h-[20rem] rounded-3xl bg-white/10 backdrop-blur-xl border border-transparent shadow-xl transition-all group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.07,
        rotate: -2,
        boxShadow: "0px 15px 40px rgba(0, 255, 255, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
    >
       {/* ✅ FIX: Buttons visible even on hover */}
      {/* Neon Border Layer - Now below buttons (z-index -1) */}
      {/* ✅ FIX: Overlay won't block buttons anymore */}
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-teal-500 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
        <div className="h-full w-full bg-slate-950 rounded-3xl"></div>
      </div>

      {/* Floating Glow Effect (Now behind everything) */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-blue-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>

      {/* Project Image with Hover Flip Effect */}
      <motion.div
        className="relative w-full h-48 rounded-2xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        <motion.img
          src={props.ImgSrc}
          alt={props.Name}
          className="object-cover w-full h-full rounded-2xl transition-transform duration-300 group-hover:rotate-1"
        />
      </motion.div>

      {/* Project Name */}
      <h4 className="text-white font-semibold text-lg sm:text-xl text-center mt-3 transition-all">
        {props.Name}
      </h4>

      {/* Project Description */}
      <p className="text-gray-300 text-sm text-center px-2 opacity-85 mt-2 flex-grow">
        {props.Desc}
      </p>

      {/* Buttons: GitHub & Demo */}
      <div className="mt-4 flex justify-center gap-4">
        {props.GithubLink && (
          <motion.a
            href={props.GithubLink}
            className="px-6 py-2 rounded-full text-white text-sm font-medium transition-all bg-gradient-to-r from-teal-500 to-cyan-500 shadow-md"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: "#0f766e" }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        )}
        {props.Demo && (
          <motion.a
            href={props.Demo}
            className="px-6 py-2 rounded-full text-white text-sm font-medium transition-all bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
          >
            Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
