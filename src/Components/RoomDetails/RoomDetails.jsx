import { useParams } from "react-router-dom";
import { rooms } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Building2,
} from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import {
  childBounce,
  containerStagger,
  fadeInDownLong,
  fadeInLeft,
  fadeInRight,
  fadeInUpLong,
} from "../../Motion/motion";
import { Helmet } from "react-helmet-async";
export default function RoomDetails() {
  const [preview, setPreview] = useState(null);
  const [student, setStudent] = useState(true);
  const { category, roomName } = useParams();
  const room = rooms.find(
    (r) => r.category === category && r.name.replace(/\s+/g, "") === roomName
  );
  if (!room) return <p>Room is not available </p>;
  return (
    <>
    <Helmet>
    {/* Title */}
    <title>Knowhere | Coworking Spaces, Offices & Meeting Rooms in New Cairo</title>
  
    {/* Description */}
    <meta
      name="description"
      content="Knowhere is your perfect workspace in New Cairo — offering modern coworking areas, private offices, and meeting rooms designed for freelancers, startups, and teams. Work, connect, and grow in a professional environment built for success."
    />
  
    {/* Keywords */}
    <meta
      name="keywords"
      content="coworking space New Cairo, shared office Egypt, private office, meeting rooms, virtual office, workspace Egypt, office rental, coworking in Egypt, startup office"
    />
  
    {/* Canonical */}
    <link rel="canonical" href="https://knowhere-eg.com/" />
  
    {/* OG & Twitter Meta Tags */}
    <meta property="og:title" content="Knowhere | Coworking Spaces in New Cairo" />
    <meta
      property="og:description"
      content="Explore coworking spaces, private offices, and meeting rooms at Knowhere. The ideal workspace for freelancers, startups, and professionals in New Cairo."
    />
    <meta property="og:image" content="https://knowhere-eg.com/assets/images/Logo.jpg" />
    <meta property="og:url" content="https://knowhere-eg.com/" />
    <meta property="og:type" content="website" />
  
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Knowhere | Coworking Spaces in New Cairo" />
    <meta
      name="twitter:description"
      content="Book your ideal coworking space or private office at Knowhere. Perfect for freelancers and startups in New Cairo."
    />
    <meta name="twitter:image" content="https://knowhere-eg.com/assets/images/Logo.jpg" />
  </Helmet>
      <main className="min-h-[90vh] mt-20 p-3 sm:p-5  bg-orange-50 mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-2 sm:px-5 mx-auto">
          {/* === SLIDER === */}
          <motion.section
            variants={fadeInDownLong}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="
        col-span-1 md:col-span-2 lg:col-start-1 lg:col-end-4
        w-full h-[300px] sm:h-[400px] lg:h-[570px]
      "
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="shadow-lg w-full h-full max-w-full rounded-xl"
            >
              {room.img.map((image, index) => (
                <SwiperSlide key={index} className="relative">
                  <img
                    src={image}
                    alt={`${room.name}-${index}`}
                    loading="lazy"
                    className="h-full w-full object-cover rounded-xl cursor-pointer"
                    onClick={() => setPreview(image)}
                  />
                  <h1 className="text-sm md:text-base lg:text-xl text-white font-bold absolute top-5 left-5 px-3 py-1 rounded bg-black/50">
                    {room.name}
                  </h1>
                </SwiperSlide>
              ))}
              <div className="custom-prev absolute z-10 left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-primary p-2 md:p-3 text-white shadow-lg hover:bg-secondary duration-150">
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div className="custom-next absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-primary p-2 md:p-3 text-white shadow-lg hover:bg-secondary duration-150">
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </div>
            </Swiper>
            {/* // preview Image // Preview Modal */}
            {preview && (
              <div
                className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                onClick={() => setPreview(null)}
              >
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    loading="lazy"
                    className="max-w-[95vw] max-h-[90vh] rounded-lg shadow-lg"
                  />
                  <button
                    className="absolute top-2 right-2 bg-white/90 text-black p-2 rounded-full shadow hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreview(null);
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            )}  
          </motion.section>

          {/* === BOXES (Amenities + Reservation) === */}
          <section className="col-span-1 md:col-span-2 lg:col-start-4 lg:col-end-6 flex flex-col lg:flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 ">
              {/* Room Amenities */}
              <motion.section
                variants={fadeInDownLong}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                className="bg-orange-200 border border-primary p-3 md:p-5 rounded-2xl"
              >
                {room.category === "SharedAreas" ? (
                  <section
                  // variants={fadeInDownLong}
                  // initial="hidden"
                  // animate="show"
                  // viewport={{ once: true }}
                  // className="bg-orange-200 border border-primary p-5 rounded-2xl h-fit"
                  >
                    <h1 className="text-base md:text-lg lg:text-2xl text-gray-600 ">
                      Shared Amenities
                    </h1>
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 my-5">
                      {room.icons.map(({ icon: Icon, label }, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center gap-2 py-3 transition-all"
                        >
                          <Icon className="text-primary w-5 h-5 md:w-6 md:h-6" />
                          <span className="text-black text-sm font-medium">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <hr className="h-[1px] bg-primary border-none mb-2" />
                    <div className="flex flex-col sm:flex-row justify-between mb-5 gap-3">
                      <h1 className="text-base md:text-lg lg:text-2xl text-gray-600">
                        {" "}
                        Prices
                      </h1>
                      <div className="flex justify-center gap-2 lg:gap-5">
                        <motion.p
                          whileTap={{ scale: 0.95 }}
                          className={`${
                            student ? "bg-white" : null
                          } px-2 py-1 border-2 border-primary rounded flex gap-2 group cursor-pointer relative z-10 text-sm lg:text-base`}
                          onClick={() => setStudent(true)}
                        >
                          {" "}
                          <GraduationCap
                            className={`group-hover:text-primary ${
                              student ? "text-primary" : null
                            } duration-200 realtive z-10 w-4 h-4 md:w-6 md:h-6`}
                          />
                          <span className="relative z-10">Student</span>
                          <span className="absolute inset-0 bg-white w-0 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                        </motion.p>

                        <motion.p
                          whileTap={{ scale: 0.95 }}
                          className={`px-2 py-1 border-2 border-primary rounded flex gap-2 group cursor-pointer relative -10 ${
                            !student ? "bg-white" : null
                          } text-sm lg:text-base`}
                          onClick={() => setStudent(false)}
                        >
                          {" "}
                          <Building2
                            className={`group-hover:text-primary ${
                              !student ? "text-primary" : null
                            } duration-200 relative z-10 w-4 h-4 md:w-6 md:h-6`}
                          />
                          <span className="relative z-10">Corporate</span>
                          <span className="absolute inset-0 bg-white w-0 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                        </motion.p>
                      </div>
                      {/* </div> */}
                    </div>
                    {student ? (
                      <div className="w-full flex justify-around gap-2">
                        <motion.div
                          key={student + "hour"}
                          variants={fadeInLeft}
                          initial="hidden"
                          animate="show"
                          viewport={{ once: true }}
                        >
                          <span className="text-sm md:text-base">Per Hour</span>
                          <p className="text-lg md:text-2xl">
                            {room.prices.Student.hour} EGP
                          </p>
                        </motion.div>
                        <motion.div
                          key={student + "FullDay"}
                          variants={fadeInRight}
                          initial="hidden"
                          animate="show"
                          viewport={{ once: true }}
                        >
                          <span className="text-sm md:text-base">
                            Per FullDay
                          </span>
                          <p className="text-lg md:text-2xl">
                            {room.prices.Student.FullDay} EGP
                          </p>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="w-full flex justify-around gap-2">
                        <motion.div
                          key={student + "hour"}
                          variants={fadeInLeft}
                          initial="hidden"
                          animate="show"
                          viewport={{ once: true }}
                        >
                          <span>Per Hour</span>
                          <p className="text-2xl">
                            {room.prices.Corporate.hour} EGP
                          </p>
                        </motion.div>
                        <motion.div
                          key={student + "FullDay"}
                          variants={fadeInRight}
                          initial="hidden"
                          animate="show"
                          viewport={{ once: true }}
                        >
                          <span>Per FullDay</span>
                          <p className="text-2xl">
                            {room.prices.Corporate.FullDay} EGP
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </section>
                ) : (
                  <section>
                    <h1 className="text-base md:text-lg lg:text-2xl text-black ">
                      Room Amenities
                    </h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-5">
                      {room.icons.map(({ icon: Icon, label }, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center gap-2 py-3 bg-white rounded-lg border border-primary transition-all"
                        >
                          <Icon className="text-primary w-5 h-5 md:w-6 md:h-6" />
                          <span className="text-black text-sm font-medium">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <hr className="h-[1px] bg-primary border-none mb-2" />
                    <h1 className="text-base md:text-lg lg:text-2xl text-black mb-2">
                      {" "}
                      Prices
                    </h1>
                    <div className="flex flex-col gap-5">
                      <div className="hour flex justify-around gap-2">
                        <span className="text-sm md:text-base lg:text-lg">
                          per 1 Hour
                        </span>
                        <p className="text-base md:text-xl lg:text-2xl">
                          {room.prices.hour} EGP
                        </p>
                      </div>
                      <div className="half flex justify-around gap-2">
                        <span className="text-sm md:text-base lg:text-lg">
                          per 4 Hours
                        </span>
                        <p className="text-base md:text-xl lg:text-2xl">
                          {room.prices.halfDay} EGP
                        </p>
                      </div>
                      <div className="full flex justify-around gap-2">
                        <span className="text-sm md:text-base lg:text-lg">
                          per 8 Hours
                        </span>
                        <p className="text-base md:text-xl lg:text-2xl">
                          {room.prices.FullDay} EGP
                        </p>
                      </div>
                    </div>
                  </section>
                )}
              </motion.section>

              {/* Reservation */}
              <motion.section
                variants={containerStagger}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center justify-center text-center gap-3 bg-gradient-to-r from-orange-100 to-orange-200 border border-primary p-5 rounded-2xl shadow-md "
              >
                <motion.h2
                  variants={fadeInUpLong}
                  className="text-lg md:text-xl lg:text-2xl font-bold text-orange-700"
                >
                  Reservation Coming Soon!
                </motion.h2>
                <motion.p
                  variants={fadeInUpLong}
                  className="text-gray-700 text-sm lg:text-lg max-w-md"
                >
                  We're preparing something special for you! Stay tuned to book
                  your spot in our upcoming rooms.
                </motion.p>
                <a
                  href="https://wa.me/201050066009?text=I'm%20Waiting%20For%20your%20booking%20System%20To%20Open"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    variants={childBounce}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-xl flex gap-2 text-sm md:text-base items-center"
                  >
                    Notify me on{" "}
                    <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.button>
                </a>
              </motion.section>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
