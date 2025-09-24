import React, { memo, useMemo, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useInView } from "react-intersection-observer";
import "@splidejs/react-splide/css";
import logo1 from "../../assets/images/Companies/1-removebg-preview.png";
import logo2 from "../../assets/images/Companies/momken-removebg-preview.avif";
import logo3 from "../../assets/images/Companies/bright-removebg.avif";
import logo4 from "../../assets/images/Companies/Icubes-removebg-preview.avif";
import logo5 from "../../assets/images/Companies/bassant-removebg-preview.avif";
import logo6 from "../../assets/images/Companies/Seamless1-removebg.avif";
import logo7 from "../../assets/images/Companies/hotdesk_main_logo.avif";
import logo8 from "../../assets/images/Companies/universe-logo-removebg-preview.avif";
import logo9 from "../../assets/images/Companies/Iris-removebg-preview.png";
import logo10 from "../../assets/images/Companies/ahmed-khaled-removebg-preview.png";
import logo11 from "../../assets/images/Companies/MCS-removebg-preview.png";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function Slider({ speed = 0.8, direction = "forward" }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const effectiveSpeed = useMemo(
    () => (direction === "reverse" ? -Math.abs(speed) : Math.abs(speed)),
    [direction, speed]
  );

  const LOGOS = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
  ];

  const options = {
    type: "loop",
    arrows: false,
    pagination: false,
    autoScroll: { speed: effectiveSpeed },
    perPage: 5,
    gap: "0rem",
  };

  return (
    <div ref={ref}>
      {inView && (
        <Splide
          options={options}
          extensions={{ AutoScroll }}
          className="w-full"
        >
          {LOGOS.map((logo, i) => (
            <SplideSlide key={i} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`Logo ${i}`}
                loading="lazy"
                decoding="async"
                width={250}
                height={100}
                className="h-16 sm:h-20  object-contain"
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
}

export default memo(Slider);

// import React, { memo, useMemo } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
// import logo1 from "../../assets/images/Companies/Asmaa_Abolila-removebg-preview.avif";
// import logo2 from "../../assets/images/Companies/momken-removebg-preview.avif";
// import logo3 from "../../assets/images/Companies/bright-removebg.avif";
// import logo4 from "../../assets/images/Companies/Icubes-removebg-preview.avif";
// import logo5 from "../../assets/images/Companies/bassant-removebg-preview.avif";
// import logo6 from "../../assets/images/Companies/Seamless1-removebg.avif";
// import logo7 from "../../assets/images/Companies/hotdesk_main_logo.avif";
// import logo8 from "../../assets/images/Companies/universe-logo-removebg-preview.avif";
// import logo9 from "../../assets/images/Companies/Iris-removebg-preview.png";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// // Static logos array to avoid recreating on each render
// const LOGOS = [
//   logo1,
//   logo2,
//   logo3,
//   logo4,
//   logo5,
//   logo6,
//   logo7,
//   logo8,
//   logo9,
//   logo1,
//   logo2,
//   logo3,
//   logo4,
//   logo5,
//   logo6,
//   logo7,
//   logo8,
//   logo9,
// ];

// function Slider({ speed = 0.8, direction = "forward" }) {
//   const effectiveSpeed = useMemo(
//     () => (direction === "reverse" ? -Math.abs(speed) : Math.abs(speed)),
//     [direction, speed]
//   );

//   const options = useMemo(
//     () => ({
//       type: "loop",
//       drag: "free",
//       focus: "center",
//       arrows: false,
//       pagination: false,
//       lazyLoad: "nearby",
//       autoScroll: { speed: effectiveSpeed },
//       perPage: 5,
//       gap: "0rem",
//       breakpoints: {
//         768: { perPage: 3, gap: "1rem" },
//         480: { perPage: 2, gap: "0.5rem" },
//       },
//     }),
//     [effectiveSpeed]
//   );

//   const extensions = useMemo(() => ({ AutoScroll }), []);

//   return (
//     <>
//       <Splide options={options} className="w-full" extensions={extensions}>
//         {LOGOS.map((logo, i) => (
//           <SplideSlide
//             key={`${i}-${logo}`}
//             className="flex items-center justify-center"
//           >
//             <img
//               src={logo}
//               alt={`Logo ${i}`}
//               loading="lazy"
//               decoding="async"
//               className="h-16 sm:h-20 md:h-24 object-contain "
//             />
//           </SplideSlide>
//         ))}
//       </Splide>
//     </>
//   );
// }

// export default memo(Slider);
