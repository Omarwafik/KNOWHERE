import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rooms } from "../../data/data";
import { Categories } from "../../data/data";
import { X, User, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "../Loading/Loading";
import {
  fadeInLeft,
  fadeInLeftLong,
  fadeInRight,
  fadeInUpLong,
} from "../../Motion/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import img from "../../assets/images/Meeting Rooms/BigMeetingRoom/BMR2.avif";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

export default function Rooms() {
  const { category } = useParams();
  const currentCategory = Categories.find((c) => c.category === category);
  const navigate = useNavigate();
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const guest = JSON.parse(localStorage.getItem("xmode"));
  useEffect(() => {
    const filtered = rooms.filter((r) => r.category === category);
    setFilteredRooms(filtered);
    setSelectedRoom(filtered[0] || null);
  }, [category]);
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

    <main className="p-10 px-5 md:px-8 lg:px-14 min-h-[90vh] mt-10  overflow-hidden">
      <section className="w-full flex flex-col gap-5 md:flex-row justify-between items-center p-3 mb-5">
        <motion.h1
          variants={fadeInLeft}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl w-full md:w-[280px] font-title"
        >
          {category.replace(/([a-z])([A-Z])/g, "$1\n$2")}
        </motion.h1>
        <motion.p
          variants={fadeInRight}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="max-w-2xl text-sm md:text-base text-wrap"
        >
          {/* wf */}
          {currentCategory.bigDescription}
        </motion.p>
      </section>
      {/* Virtual OFfice */}
      {category === "VirtualOffice" && (
        <main>
          <section className="flex justify-start w-full">
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
                // pauseOnMouseEnter: true,
              }}
              loop={true}
              className="shadow-lg w-full md:w-[70%] h-[300px] md:h-[400px] lg:h-[450px]  max-w-full rounded-xl"
            >
              {filteredRooms.length > 0 &&
                filteredRooms[0].img?.virtualOffice?.map((image, index) => (
                  <SwiperSlide key={index} className="relative">
                    <img
                      src={image}
                      alt={`${filteredRooms[0].name}-${index}`}
                      loading="lazy"
                      className="h-full w-full object-fill cursor-pointer"
                      onClick={() => setPreview(image)} 
                    />
                    <h1 className="text-sm md:text-base lg:text-xl text-white font-bold absolute top-5 left-5 px-3 py-1 rounded bg-black/50">
                      {filteredRooms[0].name}
                    </h1>
                  </SwiperSlide>
                ))}

              <div className="custom-prev absolute z-10 left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 p-2 sm:p-3 text-white shadow-lg hover:bg-orange-600">
                <ChevronLeft />
              </div>
              <div className="custom-next absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 p-2 sm:p-3 text-white shadow-lg hover:bg-orange-600">
                <ChevronRight />
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
          </section>
          {filteredRooms.length > 0 && (
            <aside className="flex flex-col gap-5 mt-10">
              <motion.h1
                variants={fadeInUpLong}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                className="text-3xl md:text-5xl "
              >
                Brief Description
              </motion.h1>
              <motion.p
                variants={fadeInLeftLong}
                initial="hidden"
                animate="show"
                viewport={{ once: true }}
                className="opacity-70"
              >
                {filteredRooms[0].description}{" "}
              </motion.p>
            </aside>
          )}
        </main>
      )}
      {category !== "VirtualOffice" && (
        <section className="grid grid-col-1  md:grid-cols-2 gap-5 md:gap-8 ">
          {filteredRooms.map((room, i) => (
            <main key={i}>
              <div className="relative p-5 rounded-2xl flex items-end h-[500px] overflow-hidden cursor-pointer group">
                {loading && <Loading />}
                <img
                  src={room.img[0]}
                  alt={room.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  loading="lazy"
                  onClick={() => setPreview(room.img[0])}
                  onLoad={() => setLoading(false)}
                />
                <div className="relative z-10 flex sm:flex-row flex-col   sm:items-center gap-3 bg-black/60 text-white cursor-default p-3 sm:p-5 w-full rounded-lg">
                  <div className="flex flex-row justify-between sm:flex-col gap-2 sm:flex-1">
                    <strong className="text-sm flex-1  text-white flex items-center gap-1 rounded">
                      <User className="text-white w-6 h-6 md:w-10 md:h-10" />
                      <span className="text-xs md:text-base font-bold ">
                        {room.capacity} Seats
                      </span>
                    </strong>
                    <div className="hidden sm:flex gap-4 flex-wrap">
                      {room.icons?.map?.(({ icon: Icon, label }, i) => (
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6" key={i} />
                      ))}

                    </div>
                    <button
                      onClick={() => {
                        guest
                          ? (() => {
                              toast.error("You must sign up first!");
                              setTimeout(() => navigate("/Signup"), 500); 
                            })()
                          : navigate(
                              `/${room.category}/${room.name.replace(
                                /\s+/g,
                                ""
                              )}`
                            );
                      }}
                      className="group/button relative inline-flex sm:hidden items-center justify-center overflow-hidden rounded-md bg-secondary backdrop-blur-lg px-3 py-2 lg:px-6 lg:py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                    >
                      <span className="text-sm sm:text-base lg:text-lg">
                        Show Details
                      </span>
                    </button>
                  </div>
                  {/* <!-- From Uiverse.io by elijahgummer -->  */}
                  <button
                    onClick={() => {
                     guest
                          ? (() => {
                              toast.error("You must sign up first!");
                              setTimeout(() => navigate("/Signup"), 500);
                            })()
                        : navigate(
                            `/${room.category}/${room.name.replace(
                              /\s+/g,
                              ""
                            )}`
                          );
                     }}
                    className="group/button relative hidden sm:inline-flex items-center justify-center overflow-hidden rounded-md bg-secondary backdrop-blur-lg px-3 py-2 lg:px-6 lg:py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                  >
                    <span className="text-sm sm:text-base lg:text-lg">
                      Show Details
                    </span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <div className="relative h-full w-10 bg-white/20"></div>
                    </div>
                  </button>
                  <div className="sm:hidden flex justify-around flex-wrap">
                  {room.icons?.map?.(({ icon: Icon, label }, i) => (
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6" key={i} />
                  ))}

                  </div>
                </div>

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
              </div>
              <section key={i} className="mt-5 flex flex-col gap-2">
                <h1 className="text-3xl sm:text-4xl md:text-4xl font-title">
                  {room.name}
                </h1>
                <span className="text-sm sm:text-base md:text-lg leading-5 text-gray-500">
                  {room.tagline}
                </span>
              </section>
            </main>
          ))}
        </section>
      )}
    </main>
    </>
  );
}
