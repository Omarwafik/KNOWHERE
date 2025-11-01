import React, { memo, useMemo, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useInView } from "react-intersection-observer";
import "@splidejs/react-splide/css";
// import logo1 from "../../assets/images/Companies/Asmaa_Abolila-removebg-preview.avif";
import logo1 from "../../assets/images/Companies/AsmaaLast-removebg-preview.avif";
import logo2 from "../../assets/images/Companies/momken-removebg-preview.avif";
import logo3 from "../../assets/images/Companies/11_11Black.avif";
import logo4 from "../../assets/images/Companies/Icubes-removebg-preview.avif";
import logo5 from "../../assets/images/Companies/bassant-removebg-preview.avif";
import logo6 from "../../assets/images/Companies/Seamless1-removebg.avif";
import logo7 from "../../assets/images/Companies/RemalBrown.avif";
import logo8 from "../../assets/images/Companies/Kareem_fady3-removebg-preview.avif";
import logo9 from "../../assets/images/Companies/GateWay_page-0002-removebg-preview.avif";
import logo10 from "../../assets/images/Companies/Iris-removebg-preview.avif";
import logo11 from "../../assets/images/Companies/Khaled-removebg-preview.avif";
import logo12 from "../../assets/images/Companies/MCS-removebg-preview.avif";
import logo13 from "../../assets/images/Companies/nawyestate_cover-removebg-preview.avif";
import logo14 from "../../assets/images/Companies/universe-logo-removebg-preview.avif";
import logo15 from "../../assets/images/Companies/Cleopatra-Hospitals-Group-removebg-preview.avif";
import logo16 from "../../assets/images/Companies/bright-removebg.avif";
import logo17 from "../../assets/images/Companies/Bayt-removebg-preview.avif";
import logo18 from "../../assets/images/Companies/Bold-Routes-Logo-750x154-removebg-preview.avif";
import logo19 from "../../assets/images/Companies/hotdesk_main_logo.avif";
import logo20 from "../../assets/images/Companies/AhmedKhaled.avif";
import logo21 from "../../assets/images/Companies/Loreal-removebg-preview.avif";
import logo22 from "../../assets/images/Companies/Cleo-remove-bg.avif";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Helmet } from "react-helmet-async";

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
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
  ];

  const options = {
    type: "loop",
    arrows: false,
    pagination: false,
    autoScroll: { speed: effectiveSpeed },
    perPage: 5,
    gap: "5rem",
    breakpoints: {
      // 1280: { perPage: 4, gap: "4rem" }, // screens < 1280px
      1024: { perPage: 4, gap: "4rem" }, // screens < 1024px
      768: { perPage: 3, gap: "2rem" }, // tablets
      480: { perPage: 2, gap: "1rem" }, // phones
    },
  };

  return (
    <>
     <Helmet>
              <title>Knowhere – Find Your Perfect Workspace</title>
              <meta
                name="description"
                content="Discover and book coworking spaces, private offices, and meeting rooms with Knowhere. Perfect for freelancers, startups, and teams seeking flexible workspaces."
              />
              <meta
                name="keywords"
                content="coworking spaces, shared office, meeting rooms, virtual office, workspace Egypt"
              />
                      <link rel="canonical" href="https://knowhere-eg.com/" />
            
            </Helmet>
    <div ref={ref}>
      {inView && (
        <Splide
          options={options}
          extensions={{ AutoScroll }}
          className="w-full"
        >
          {LOGOS.map((logo, i) => (
            <SplideSlide
              key={i}
              className="flex items-center justify-center h-12 md:h-16 lg:h-20 "
            >
              <img
                src={logo}
                alt={`Logo ${i}`}
                // loading="lazy"
                decoding="async"
                // width={250}
                // height={100}
                className="w-full h-full  object-contain"
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
    </>
  );
}

export default memo(Slider);
