  import React from 'react'
  import {motion} from "framer-motion"
  import { values } from "../../data/data"
  import * as Icons from "lucide-react";
  import { containerStagger, fadeInUp } from '../../Motion/motion';
  // import img1 from "../../assets/images/Values/people-comunity.webp"

  export default function About() {
    return (
      <div className="cont px-3 py-12 sm:p-4 sm:py-16 bg-light rounded-lg" id='about'>
        <h1 className='text-4xl sm:text-6xl mb-3 text-primary text-center font-title'>
          <span className='text-black'>Our </span>Value
        </h1>

        <motion.div 
          className="boxes p-0 sm:p-10 grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-3"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {values.map((value, index) => {
            const Icon = Icons[value.icon]; 
            return (
                <motion.div
                  key={index}
                  style={{ backgroundImage: `url(${value.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  className="box h-[300px] border-primary border-2 rounded-xl group"
                  variants={fadeInUp}
                >
                        <motion.div
                        // initial={{ height: 0 }}
                        // whileHover={{ height: "100%" }}
                        // transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="h-full w-full bg-black/70 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                      >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-full w-full flex flex-col justify-center gap-5 p-4"
                          >
                            {Icon && <Icon className="w-9 h-9 text-primary" />}
                            <h3 className="text-3xl font-semibold text-primary">{value.title}</h3>
                            <p className="text-gray-300">{value.description}</p>
                          </motion.div>
                    </motion.div>
                </motion.div>
            );
          })}
        </motion.div>

      </div>
    )
  }
