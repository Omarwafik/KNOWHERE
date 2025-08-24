import bgHero from "../../assets/images/SharedArea/SharedArea1_4.jpg"
// import bgHero from "../../assets/images/SharedArea/clipImg.png"
import {motion} from "framer-motion"
import About from "../About/About"
import NavBar from "../NavBar/NavBar"
import { fadeInLeft, fadeInRight, fadeInRightLong } from "../../Motion/motion"
import Explore from "../Explore/Explore"
import Companies from "../Companies/Companies"
import Footer from "../Footer/Footer"
// import Test from "../TestCom/Test"
export default function Hero() {
  return (
    <>
    <div className=' h-[100vh]'>
      <main 
        className="hero relative h-full w-full  overflow-hidden flex items-end "
        style={{ backgroundImage:`url(${bgHero})`, backgroundPosition:"center", backgroundSize:"cover" }}
        >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="div">

        </div>
        <div className="w-full h-[80vh] z-10 text-white  font-bold sm:p-3 md:p-16 m-2 flex justify-center items-center sm:justify-end sm:items-start flex-col gap-6">
          <motion.h1
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='text-2xl sm:text-4xl font-title'><span className='text-4xl sm:text-5xl md:text-7xl text-primary'> KNOWHERE <br /> </span> Co. Working Space</motion.h1>
          <motion.p 
          variants={fadeInRightLong}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='w-4/4 sm:w-3/4 md:w-2/4 opacity-85 text-wrap text-center sm:text-start text-xs md:text-sm leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem totam ipsum sequi. Vel ullam fuga consequuntur atque alias, unde sunt rem! In dolore neque ab dignissimos quas laborum repudiandae? Eaque eum nisi error maxime mollitia quas magnam laboriosam perferendis et aspernatur ad, in voluptatibus sunt obcaecati officia velit deserunt consequatur?</motion.p>
          <motion.div 
          variants={fadeInRightLong}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="buttons flex gap-5">
            <button type="button" className="focus:outline-none text-white bg-primary hover:bg-hover focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Explore Spaces</button>
           
            {/* <button className='p-2 rounded border border-s-4 '>Read More</button> */}
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Read More
            </span>
            </button> 
          </motion.div>
        </div>
      </main>
    </div>
    {/* <About/>
    <Explore/> */}
    {/* <hr  className="w-[80%] bg-black mx-auto h-1 my-5"/> */}
    {/* <Companies/>
    <Footer/> */}
    {/* <Test/> */}
    {/* <Explore/> */}
    </>
  )
}

