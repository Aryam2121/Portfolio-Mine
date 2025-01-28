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
      className="project-container flex flex-col items-center p-6"
      style={{
        borderRadius: "15px",
        border: "1px solid #4ade80",
        minWidth: "20rem",
        maxWidth: "20rem",
        minHeight: "15rem",
        overflow: "hidden",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#1e293b",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
      }}
      initial={{ opacity: 0, y: 50 }} // Initially hidden and below
      animate={{ opacity: 1, y: 0 }} // Fade in and slide up to normal position
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05, // Slightly enlarge the card on hover
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)", // Larger shadow on hover
        cursor: "pointer",
        rotate: -2, // Slight tilt on hover for more 3D effect
      }}
      whileTap={{
        scale: 0.98, // Slight shrink on click to simulate tap effect
      }}
    >
      <img
        src={props.ImgSrc}
        alt={props.Name}
        className="rounded-lg mb-5"
        style={{
          height: "12rem",
          width: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          transition: "transform 0.3s ease",
        }}
      />
      <h4
        className="text-white font-semibold mb-2 text-xl"
        style={{
          minHeight: "3rem",
          transition: "color 0.3s ease, transform 0.3s ease",
        }}
      >
        {props.Name}
      </h4>
      <p
        className="text-gray-300 text-sm"
        style={{
          flexGrow: "1",
          transition: "color 0.3s ease",
          opacity: 0.85,
        }}
      >
        {props.Desc}
      </p>
      <div className="mt-5 mb-3 flex justify-start gap-4">
        {props.GithubLink && (
          <motion.a
            href={props.GithubLink}
            className="btn px-7 py-2 rounded-md text-white"
            style={{
              backgroundColor: "#10b981",
              border: "1px solid #10b981",
            }}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              backgroundColor: "#0f9d5f",
              scale: 1.1, // Slightly enlarge on hover
            }}
            whileTap={{ scale: 0.95 }} // Shrink effect when clicked
          >
            GitHub
          </motion.a>
        )}
        {props.Demo && (
          <motion.a
            href={props.Demo}
            className="btn px-7 py-2 rounded-md text-white"
            style={{
              backgroundColor: "#3b82f6",
              border: "1px solid #3b82f6",
            }}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              backgroundColor: "#2563eb",
              scale: 1.1, // Slightly enlarge on hover
            }}
            whileTap={{ scale: 0.95 }} // Shrink effect when clicked
          >
            Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
