import React, { useCallback, useMemo, memo } from "react";
import { motion } from "framer-motion";
import {
  containerSequential,
  containerStagger,
  fadeInDown,
  fadeInUp,
} from "../../Motion/motion";
import { Categories } from "../../data/data";
import { MoveRight } from "lucide-react";
import styles from "./Explore.module.css";
import { useNavigate } from "react-router-dom";

const Card = React.memo(({ cat, onNavigate }) => {
  // console.log(object)
  return (
    <div
      // variants={fadeInUp}
      className={`${styles.card} flex flex-col transition-all items-center duration-500 ease-in-out group cursor-pointer border-2 border-transparent overflow-hidden`}
      style={{ willChange: "transform" }}
    >
      <div
        className="h-[60vh] w-[280px] sm:w-full relative rounded-xl"
        onClick={() => onNavigate(`/rooms/${cat.category}`)}
      >
        <img
          src={cat.image}
          loading="lazy"
          alt={cat.category}
          decoding="async"
          width={300}
          height={600}
          sizes="(max-width: 640px) 100vw, 300px"
          className="w-full h-full object-cover object-center rounded-xl"
        />
        <div className="bg-light p-5 absolute -top-2 -right-4 rounded-full">
          <MoveRight className="w-[35px] h-[35px] text-white bg-black rounded-full p-2 group-hover:animate-bounce" />
        </div>
      </div>
      <div className="text my-2 flex flex-col gap-2 sm:self-start">
        <h2 className="text-xl sm:text-3xl flex items-center gap-5">
          {cat.category}{" "}
          {cat.icon &&
            React.createElement(cat.icon, {
              className: "w-8 h-8 text-primary",
            })}
        </h2>
        <p className="text-sm opacity-60">{cat.description}</p>
      </div>
    </div>
  );
});

function Explore() {
  const navigate = useNavigate();
  const handleNavigate = useCallback((path) => navigate(path), [navigate]);
  const cats = useMemo(() => Categories, []);

  return (
    <div className="bg-light " id="explore">
      <motion.h1
        variants={fadeInDown}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-4xl sm:text-6xl mb-10 sm:mb-3 text-primary text-center font-title"
      >
        <span className="text-primary">Explore </span>Spaces
      </motion.h1>

      <section
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true, amount: 0.2 }}
        // variants={containerSequential}
        className={`${styles.cardsContainer} bg-light p-0 sm:p-5 md:p-10 grid [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))] gap-5 `}
      >
        {cats.map((cat) => (
          <Card key={cat.category} cat={cat} onNavigate={handleNavigate} />
        ))}
      </section>
    </div>
  );
}

export default memo(Explore);
