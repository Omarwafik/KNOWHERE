import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import Value from "../Value/Value";
import About from "../About/About";
import Slider from "../Slider/Slider";
import { useLocation } from "react-router-dom";
import Packages from "../Subscribtions/Packages";
import FAQ from "../FAQ/FAQ";
import Test from "../TestCom/Test";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView();
      }
    }
  }, [location]);
  return (
    <>
      {/* <NavBar/> */}
      <Hero />
      <About />
      <Value />
      <div className="w-full py-6 mt-10 mb-24  flex flex-col gap-3">
        <h1 className="text-2xl sm:text-5xl mb-8 text-center p-5 font-title text-primary">
          Trusted By
        </h1>
        <Slider speed={0.8} direction="forward" />
        {/* <Slider speed={0.8} direction="reverse" /> */}
      </div>
      <Explore />
      <Packages />
      {/* <FAQ /> */}
      {/* <Test /> */}
      {/* <Companies/> */}
      {/* <Footer/> */}
    </>
  );
}
