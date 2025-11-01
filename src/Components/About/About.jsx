import React from "react";
import company from "../../assets/images/KW/KW5.avif";
import { motion } from "framer-motion";
import CountUp from "react-countup";
// import { motion } from "framer-motion";
import { Armchair, DoorOpen } from "lucide-react";
import { useInView } from "react-intersection-observer";

import {
  fadeInDown,
  fadeInDownLong,
  fadeInLeft,
  fadeInUp,
} from "../../Motion/motion";
import { Helmet } from "react-helmet-async";
export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true }); // مرة واحدة لما يظهر

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
      className="px-2 sm:px-5 py-20 md:py-24 flex flex-col md:flex-row justify-center gap-3 sm:gap-5  items-center min-h-[80vh] bg-white p-5 rounded"
      style={
        {
          // background: "linear-gradient(315deg, #e4e2dd 50%, #ffff 50%)",
        }
      }
      id="about"
    >
      {/* kalam */}
      <aside className="  text-center md:text-left flex flex-col gap-3 ">
        <motion.div
          variants={fadeInDown}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text"
        >
          {/* <span className="block text-sm md:text-lg lg:text-2xl text-gray-600 mb-4">
            What is Knowhere?
          </span> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-primary">
            KNOWHERE
          </h1>
        </motion.div>
        <motion.p
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-[16px] md:text-lg max-w-xl text-wrap text-left leading-8 text-gray-700 capitalize"
        >
          KNOWHERE is a modern and dynamic co-working space designed to foster
          creativity, productivity, and collaborations. Our workspace provides
          professionals. freelancers startups and remote teams with a flexible
          and innovative enviroment to work, connect and grow.
        </motion.p>
        {/* hena mmkn hagat zy b2alna kam sana aw keda */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-2 sm:gap-10 items-center justify-center mt-5">
            <div className="flex gap-3 sm:gap-5 items-center  px-6 py-2 text-2xl font-medium ">
              {/* <Armchair
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
                color="#d85b00"
              /> */}
              <Armchair
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
                color="#d85b00"
              />
              <div className="flex flex-col sm:text-2xl text-sm">
                <span>Seats</span>
                <span>+{inView && <CountUp end={105} duration={4} />}</span>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-5 items-center px-6 py-2 text-2xl font-medium ">
              <DoorOpen
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
                color="#d85b00"
              />
              <div className="flex flex-col sm:text-2xl text-sm">
                <span>Rooms</span>
                <span>+{inView && <CountUp end={24} duration={4} />}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </aside>

      {/* الصورة */}
      <motion.aside
        variants={fadeInDownLong}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className=""
      >
        <img
          src={company}
          loading="lazy"
          alt="Company Photo"
          className="w-screen md:w-[600px] h-[45vh] sm:h[70vh] md:h-[80vh] object-cover shadow-black shadow-lg "
        />
      </motion.aside>
    </section>
    </>
  );
}
