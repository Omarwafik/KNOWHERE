import { memo, useMemo, useCallback } from "react";
import bgHero from "../../assets/images/SharedArea/Floor2/SharedArea1_2.avif";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import {
  fadeInDownLong,
  fadeInLeftLong,
  fadeInRightLong,
} from "../../Motion/motion";

// Memoized Typewriter component to prevent unnecessary re-renders
const MemoizedTypewriter = memo(
  ({ words, typeSpeed, deleteSpeed, delaySpeed, cursorColor }) => (
    <Typewriter
      words={words}
      loop={false}
      cursor
      cursorStyle="|"
      cursorColor={cursorColor}
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
    />
  )
);

MemoizedTypewriter.displayName = "MemoizedTypewriter";

function Hero() {
  // Memoize expensive calculations and objects
  const parallaxConfig = useMemo(
    () => ({
      strength: 150,
      bgImageStyle: { objectFit: "cover", objectPosition: "center" },
    }),
    []
  );

  const typewriterConfig = useMemo(
    () => ({
      words: ["KNOWHERE"],
      typeSpeed: 70,
      deleteSpeed: 50,
      delaySpeed: 1000,
      cursorColor: "#d85b00",
    }),
    []
  );

  // Memoize button click handlers
  const handleExploreClick = useCallback(() => {
    const element = document.getElementById("explore");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSubscriptionsClick = useCallback(() => {
    const element = document.getElementById("subscriptions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* <Parallax bgImage={bgHero} {...parallaxConfig}> */}
      <section className=" h-[100vh]">
        <main
          className="hero relative min-h-screen w-full overflow-hidden flex  items-end bg-cover bg-center sm:bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgHero})`,
          }}
        >
          {/* <div className="absolute inset-0 bg-black/80" /> */}

          <div className="w-full h-[80vh] z-10 text-white  font-bold sm:p-3 md:p-16 flex justify-center items-center sm:justify-end sm:items-start flex-col gap-6">
            <motion.h1
              variants={fadeInDownLong}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl sm:text-7xl font-bold font-title text-primary p-1"
            >
              <MemoizedTypewriter {...typewriterConfig} />
            </motion.h1>
            <motion.p
              variants={fadeInLeftLong}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="w-[4/4] sm:w-3/4 md:w-2/4 opacity-85 text-wrap text-center sm:text-start text-xs  sm:text-sm md:text-lg !leading-7 p-1"
            >
              Welcome to KNOWHERE — your creative coworking space in the heart
              of the city. Whether you're a freelancer, a startup, or a growing
              team, we provide inspiring workspaces, high-speed internet, and a
              vibrant community to help you focus, collaborate, and grow . The
              Perfect Place To Work, Study & Create.
            </motion.p>
            <motion.div
              variants={fadeInRightLong}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="buttons flex gap-5"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={handleExploreClick}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-grad1 to-grad2  hover:text-white dark:text-secondary cursor-pointer"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-amber-950 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Explore Spaces
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={handleSubscriptionsClick}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-secondary  hover:bg-hover text-white dark:text-secondary cursor-pointer"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in  text-white duration-75 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Subscriptions
                </span>
              </motion.button>
              {/* <!-- From Uiverse.io by nathAd17 -->  */}
              {/* <button
                // type="submit"
                class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-secondary backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded before:bg-primary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded group"
              >
                Explore Spaces
                <svg
                  class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-50 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    class="fill-gray-50 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button> */}
            </motion.div>
          </div>
        </main>
      </section>
      {/* </Parallax> */}
    </>
  );
}

// Export memoized component to prevent unnecessary re-renders
export default memo(Hero);
