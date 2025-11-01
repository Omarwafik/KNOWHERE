// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence, useAnimation } from "framer-motion";
// import PropTypes from "prop-types";

// /**
//  * KenBurnsCarousel
//  * props:
//  * - images: array of image URLs
//  * - duration: seconds per slide (default 6)
//  * - pauseOnHover: boolean
//  */
// export default function KenBurnsCarousel({ images = [], duration = 6, pauseOnHover = true }) {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const controls = useAnimation();
//   const timerRef = useRef(null);

//   // Start the ken-burns animation for the current image
//   useEffect(() => {
//     // animate scale from 1 -> 1.08 and x pan from 0 -> -6% over `duration`
//     controls.start({
//       scale: [1, 1.08],
//       x: ["0%", "-6%"],
//       transition: { duration, ease: "easeInOut" },
//     });
//   }, [index, duration, controls]);

//   // autoplay logic (advance index after `duration`)
//   useEffect(() => {
//     if (paused) return;
//     timerRef.current = setTimeout(() => {
//       setIndex((i) => (i + 1) % images.length);
//     }, duration * 1000);
//     return () => clearTimeout(timerRef.current);
//   }, [index, duration, paused, images.length]);

//   if (!images || images.length === 0) return null;

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       onMouseEnter={() => pauseOnHover && setPaused(true)}
//       onMouseLeave={() => pauseOnHover && setPaused(false)}
//       aria-roledescription="carousel"
//       aria-label="Image slideshow"
//     >
//       <AnimatePresence initial={false} mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           style={{ willChange: "opacity" }}
//         >
//           <motion.img
//             src={images[index]}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-[60vh] sm:h-[70vh] object-cover"
//             initial={{ scale: 1, x: "0%" }}
//             animate={controls}
//             style={{ willChange: "transform" }}
//             loading="lazy"
//             decoding="async"
//             draggable={false}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* optional simple indicators */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             aria-label={`Go to slide ${i + 1}`}
//             className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// KenBurnsCarousel.propTypes = {
//   images: PropTypes.array.isRequired,
//   duration: PropTypes.number,
//   pauseOnHover: PropTypes.bool,
// };
