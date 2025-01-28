// export default function SkillCard(props) {
//     // Style object for inline styles
//     const cardStyle = {
//       borderRadius: "20px",
//       border: "0.5px solid #334155",
//       minWidth: "8rem",
//       maxWidth: "8rem",
//       height: "8rem",
//     };
  
//     const imageStyle = {
//       height: "3rem",
//       width: "3rem",
//       margin: "8px auto",
//     };
  
//     return (
//       <div
//         className="container flex flex-col align-center p-5 justify-center"
//         style={cardStyle}
//       >
//         <img
//           src={props.path}
//           alt={props.name ? `${props.name} logo` : "Skill logo"}
//           className="text-white mb-2"
//           style={imageStyle}
//         />
//         <p className="skill-name text-white text-center">{props.name}</p>
//       </div>
//     );
//   }
// import { useRef } from "react";

// export default function SkillCard(props) {
//   const cardRef = useRef(null);

//   // Add 3D tilt effect on mouse movement
//   const handleMouseMove = (e) => {
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left - rect.width / 2;
//     const y = e.clientY - rect.top - rect.height / 2;
//     const rotateX = -y / 10;
//     const rotateY = x / 10;

//     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const resetTilt = () => {
//     const card = cardRef.current;
//     card.style.transform = "rotateX(0) rotateY(0)";
//   };

//   const cardStyle = {
//     borderRadius: "20px",
//     border: "0.5px solid #334155",
//     minWidth: "8rem",
//     maxWidth: "8rem",
//     height: "8rem",
//     background: "linear-gradient(135deg, #1e293b, #0f172a)",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     transition: "all 0.5s ease, transform 0.5s ease",
//     overflow: "hidden",
//     position: "relative",
//   };

//   const hoverStyle = {
//     boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
//     background: "linear-gradient(135deg, #3b82f6, #9333ea)",
//   };

//   const glowEffect = {
//     boxShadow: "0 0 15px 5px rgba(35, 61, 100, 0.5)",
//   };

//   const imageStyle = {
//     height: "3rem",
//     width: "3rem",
//     margin: "8px auto",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.3s ease, opacity 0.3s ease",
//   };

//   const textStyle = {
//     fontSize: "0.875rem",
//     fontWeight: "600",
//     color: "#e2e8f0",
//     textAlign: "center",
//     marginTop: "8px",
//     opacity: 1,
//     transition: "opacity 0.3s ease, transform 0.3s ease",
//   };

//   const handleHover = (e) => {
//     e.currentTarget.style.boxShadow = glowEffect.boxShadow;
//     const img = e.currentTarget.querySelector("img");
//     const text = e.currentTarget.querySelector("p");
//     if (img) img.style.transform = "scale(1.2) rotate(5deg)";
//     if (text) text.style.transform = "translateY(-3px)";
//   };

//   const handleHoverOut = (e) => {
//     e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
//     const img = e.currentTarget.querySelector("img");
//     const text = e.currentTarget.querySelector("p");
//     if (img) img.style.transform = "scale(1) rotate(0)";
//     if (text) text.style.transform = "translateY(0)";
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="container flex flex-col align-center p-5 justify-center"
//       style={cardStyle}
//       onMouseEnter={handleHover}
//       onMouseLeave={handleHoverOut}
//       onMouseMove={handleMouseMove}
//       onMouseOut={resetTilt}
//     >
//       <img
//         src={props.path}
//         alt={props.name ? `${props.name} logo` : "Skill logo"}
//         className="text-white mb-2"
//         style={imageStyle}
//       />
//       <p className="skill-name text-white text-center" style={textStyle}>
//         {props.name}
//       </p>
//     </div>
//   );
// }
import { useRef } from "react";
import { motion } from "framer-motion";

export default function SkillCard(props) {
  const cardRef = useRef(null);

  // Add 3D tilt effect on mouse movement
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -y / 10;
    const rotateY = x / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0) rotateY(0)";
  };

  const cardStyle = {
    borderRadius: "20px",
    border: "0.5px solid #334155",
    minWidth: "8rem",
    maxWidth: "8rem",
    height: "8rem",
    background: "linear-gradient(135deg, #1e293b, #0f172a)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.5s ease, transform 0.5s ease",
    overflow: "hidden",
    position: "relative",
  };

  const hoverStyle = {
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
  };

  const glowEffect = {
    boxShadow: "0 0 15px 5px rgba(35, 61, 100, 0.5)",
  };

  const imageStyle = {
    height: "3rem",
    width: "3rem",
    margin: "8px auto",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  };

  const textStyle = {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#e2e8f0",
    textAlign: "center",
    marginTop: "8px",
    opacity: 1,
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };

  const handleHover = (e) => {
    e.currentTarget.style.boxShadow = glowEffect.boxShadow;
    const img = e.currentTarget.querySelector("img");
    const text = e.currentTarget.querySelector("p");
    if (img) img.style.transform = "scale(1.2) rotate(5deg)";
    if (text) text.style.transform = "translateY(-3px)";
  };

  const handleHoverOut = (e) => {
    e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
    const img = e.currentTarget.querySelector("img");
    const text = e.currentTarget.querySelector("p");
    if (img) img.style.transform = "scale(1) rotate(0)";
    if (text) text.style.transform = "translateY(0)";
  };

  return (
    <motion.div
      ref={cardRef}
      className="container flex flex-col align-center p-5 justify-center"
      style={cardStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      onMouseMove={handleMouseMove}
      onMouseOut={resetTilt}
      initial={{ opacity: 0, y: 50 }}  // Initially hidden and slightly below
      animate={{ opacity: 1, y: 0 }}   // Become visible and slide up
      transition={{ duration: 0.7, ease: "easeOut" }}  // Smooth transition
      whileInView={{ opacity: 1, y: 0 }} // Make sure the card becomes visible when in view
      exit={{ opacity: 0, y: 50 }}  // Slide down and fade out when leaving the viewport
      viewport={{ once: false }}  // Trigger animation both on entering and leaving the viewport
    >
      <img
        src={props.path}
        alt={props.name ? `${props.name} logo` : "Skill logo"}
        className="text-white mb-2"
        style={imageStyle}
      />
      <p className="skill-name text-white text-center" style={textStyle}>
        {props.name}
      </p>
    </motion.div>
  );
}
