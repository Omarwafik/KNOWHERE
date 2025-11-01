import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import Value from "../Value/Value";
import About from "../About/About";
import Slider from "../Slider/Slider";
import { useLocation } from "react-router-dom";
import Packages from "../Subscribtions/Packages";
import { Helmet } from "react-helmet-async";
// import FAQ from "../FAQ/FAQ";
// import Test from "../TestCom/Test";
// import Divider from "../Divider/Divider";

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
      <Helmet>
        {/* ========== Basic SEO ========== */}
        <title>Knowhere | Your Ideal Workspace in Egypt</title>
        <meta
          name="description"
          content="Discover flexible offices, shared areas, and meeting rooms at Knowhere — your ideal workspace in Egypt for productivity and creativity."
        />
        <meta
          name="keywords"
          content="Knowhere Egypt, coworking space, offices for rent, shared workspace, meeting rooms, virtual offices, Cairo workspaces"
        />
        <link rel="canonical" href="https://knowhere-eg.com/" />

        {/* ========== Open Graph (Facebook & LinkedIn) ========== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://knowhere-eg.com/" />
        <meta property="og:title" content="Knowhere | Your Ideal Workspace in Egypt" />
        <meta
          property="og:description"
          content="Flexible offices, shared areas, and meeting rooms tailored for your business growth in Egypt."
        />
        <meta
          property="og:image"
          content="https://knowhere-eg.com/assets/images/Logo.jpg"
        />
        <meta property="og:image:alt" content="Knowhere modern workspace in Egypt" />
        <meta property="og:site_name" content="Knowhere Egypt" />

        {/* ========== Twitter Card ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://knowhere-eg.com/" />
        <meta name="twitter:title" content="Knowhere | Your Ideal Workspace in Egypt" />
        <meta
          name="twitter:description"
          content="Find your perfect workspace — offices, shared areas, and meeting rooms at Knowhere Egypt."
        />
        <meta
          name="twitter:image"
          content="https://knowhere-eg.com/assets/images/Logo.jpg"
        />

        {/* ========== Google (Schema / Rich Result) ========== */}
        <meta itemProp="name" content="Knowhere | Your Ideal Workspace in Egypt" />
        <meta
          itemProp="description"
          content="Explore Knowhere — modern offices and creative spaces designed for productivity and connection in Egypt."
        />
        <meta
          itemProp="image"
          content="https://knowhere-eg.com/assets/images/Logo.jpg"
        />
      </Helmet>

      <Hero />
      <About />
      <Value />
      <div className="w-full px-3 py-12 sm:p-4  mb-14 flex flex-col gap-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-14 text-center p-5 font-title text-primary">
          Trusted By
        </h1>
        <Slider speed={0.8} direction="forward" />
        {/* <Slider speed={0.8} direction="reverse" /> */}
      </div>
      <Explore />
      <Packages />
    </>
  );
}
