import React from "react";
import {
  Wifi,
  Clock,
  Users,
  Briefcase,
  Building2,
  Calendar,
  Volume2,
  Trees,
  Coffee,
  MapPin,
  Laptop,
  HeartHandshake,
  Armchair,
} from "lucide-react";
import bgValues from "../../assets/images/SharedArea/Floor1/SharedArea1_2.avif";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft } from "../../Motion/motion";
import { Helmet } from "react-helmet-async";
const values = [
  {
    icon: <Wifi className="sm:w-14 sm:h-14 w-10 h-10" />,
    facility: "Free Fast Wi-Fi",
  },
  {
    icon: <Clock className="sm:w-14 sm:h-14 w-10 h-10" />,
    facility: "Open All Week",
  },
  {
    icon: <Users className="sm:w-14 sm:h-14 w-10 h-10" />,
    facility: "Community & Networking",
  },
  {
    icon: <Briefcase className="sm:w-14 sm:h-14 w-10 h-10" />,
    facility: "Freelancing & Virtual Office",
  },

];
export default function Value() {
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
    <section
      className="cont px-3 py-14 sm:p-4 sm:py-16 md:py-20 mb-14  bg-cover bg-center bg-white bg-fixed shadow-2xl"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgValues})`,
      }}
    >
      <motion.h1
        variants={fadeInDown}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl mb-5 sm:mb-3 text-white text-center font-title"
      >
        <span className="text-white">What we </span>Offer
      </motion.h1>
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="text-white flex flex-col gap-3 mb-3  ps-4 sm:ps-10 max-w-[750px]"
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl text-left font-paragraph">
          Work Smarter. Build Better.
        </h2>
        <p className="text-sm md:text-xl text-left opacity-90">
          More than an office or business center — a community of creators,
          startups, and teams with flexible spaces.
        </p>
      </motion.div>
      <main className="boxes p-2 sm:p-10 grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] gap-4 sm:gap-10">
        {values.map((value, i) => (
          <div
            key={i}
            className="flex flex-col bg-white/20 py-5 sm:py-8 md:py-10 justify-between items-center gap-5 sm:gap-10 
          rounded shadow-2xl hover:-translate-y-3 hover:bg-white/30 transition
          "
          >
            <i className="group-hover:scale-125 transition-all duration-300  text-secondary">
              {value.icon}
            </i>
            <span className="text-white text-sm sm:text-lg text-center">
              {value.facility}
            </span>
          </div>
        ))}
      </main>
    </section>
    </>
  );
}
