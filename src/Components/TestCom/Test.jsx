import { Parallax } from "react-parallax";
import { useEffect, useState } from "react";
import bgHero from "../../assets/images/SharedArea/Floor2/SharedArea1_2.avif";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // أقل من md = اعتبره موبايل
    };

    handleResize(); // أول مرة
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile ? (
        // 🖥️ Desktop - Parallax
        <Parallax
          bgImage={bgHero}
          strength={500}
          bgImageStyle={{ objectFit: "cover" }}
        >
          <section className="h-[100vh] relative flex justify-center items-center">
            <div className="absolute inset-0 bg-black/60" />
            <h1 className="z-10 text-white text-5xl font-bold">Hero Section</h1>
          </section>
        </Parallax>
      ) : (
        // 📱 Mobile - Static background
        <section
          className="h-[100vh] relative flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgHero})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <h1 className="z-10 text-white text-4xl font-bold">Hero Section</h1>
        </section>
      )}
    </>
  );
}
