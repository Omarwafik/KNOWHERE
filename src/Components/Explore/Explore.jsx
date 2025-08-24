import React from 'react'
import { motion } from "framer-motion"
import { fadeInDown } from '../../Motion/motion'
import { Categories } from "../../data/data"
import { MoveRight } from 'lucide-react'
import styles from "./Explore.module.css"
import { useNavigate } from 'react-router-dom'
import Rooms from '../Rooms/Rooms'

export default function Explore() {
  const navigate = useNavigate();
  return (
    <div className=' bg-light'>
      <motion.h1
        variants={fadeInDown}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='text-4xl sm:text-6xl mb-3 text-primary text-center font-title'
      >
        <span className='text-black'>Explore </span>Spaces
      </motion.h1>

      <section className={`${styles.cardsContainer} bg-light p-0 sm:p-5 md:p-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-5 `}>
        {Categories.map((cat, index) => (
          <div
          onClick={() => navigate(`/rooms/${cat.category}`)}
          key={index} className={`${styles.card} flex flex-col  overflow-hidden transition-all duration-500 ease-in-out group`}>
            <div
              style={{ backgroundImage: `url(${cat.image})` }}
              className="h-[60vh] w-[270px] sm:w-full  relative bg-cover bg-center bg-no-repeat rounded-xl"
            >
              <div className="bg-light p-5 absolute -top-2 -right-4 rounded-full">
                <MoveRight className="w-[35px] h-[35px] text-white bg-black rounded-full p-2 group-hover:animate-bounce" />
              </div>
            </div>
            <div className="text my-2 flex flex-col gap-2">
              <h2 className="text-xl sm:text-3xl">{cat.category}</h2>
              <p className="text-sm opacity-60">{cat.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
