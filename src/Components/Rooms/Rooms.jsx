import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { rooms } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  fadeInDown,
  fadeInDownLong,
  fadeInLeft,
  fadeInLeftLong,
  fadeInRight,
} from "../../Motion/motion";
import img from "../../assets/images/Meeting Rooms/BigMeetingRoom/BMR.jpg";

export default function Rooms() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [hoverItem, sethoverItem] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const filtered = rooms.filter((r) => r.category === category);
    setFilteredRooms(filtered);
    setSelectedRoom(filtered[0] || null);
    console.log(category.toLowerCase());
  }, [category]);

  return (
    <div className="grid lg:grid-cols-4 gap-4 px-3 sm:px-6 mt-14 min-h-[95vh] py-8 sm:py-12 relativeb bg-center bg-no-repeat overflow-hidden">
      {/* Sidebar - ثابت على lg */}
      <div className="hidden lg:flex col-span-1 border-r pr-4 flex-col justify-center gap-8">
        <motion.h2
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-white"
        >
          {category}
        </motion.h2>
        <motion.ul
          // variants={containerStagger}
          // initial="hidden"
          // whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-2 flex flex-col "
        >
          {filteredRooms.map((room, i) => (
            <motion.li
              key={i} // ده المفتاح المهم
              // variants={fadeInLeft}
              onMouseEnter={() => sethoverItem(i)}
              onMouseLeave={() => sethoverItem(null)}
              onClick={() => setSelectedRoom(room)}
              className={`p-3 rounded-lg cursor-pointer transition w-[90%]  ${
                selectedRoom?.id === room.id
                  ? "scale-125 ml-7 opacity-100 text-white"
                  : `text-white ${
                      hoverItem === i
                        ? "scale-125 ml-7 opacity-100"
                        : "opacity-50"
                    } transition duration-200 `
              }`}
            >
              {room.name}
            </motion.li>
          ))}
        </motion.ul>
        <div className="button text-center">
          {/* garab b3d ma terfa3o */}
          {/* <a
            href="/home#explore"
            className="px-3 py-1 bg-primary text-white hover:bg-secondary rounded inline-block"
          >
            Go back
          </a> */}
          {/* 7al tany */}
          {/* <button
            onClick={() => {
              window.location.replace("/home#explore");
            }}
            className="px-3 py-1 bg-primary text-white hover:bg-secondary rounded"
          >
                  Go back
          </button> */}
          <button
            className="px-3 py-1 bg-primary text-white hover:bg-secondary rounded"
            onClick={() => navigate("/home#explore")}
          >
            {/* {" "} */}
            Go back
            {/* {" "} */}
          </button>
        </div>
      </div>
      {category.toLowerCase() === "virtual office" ? null : (
        <div className="lg:hidden  p-1 col-span-3 w-full flex justify-center overflow-hidden">
          <div className="w-fit p-2 flex bg-light rounded overflow-x-scroll scrollbar-thin scrollbar-thumb-secondary scrollbar-track-gray-200 h-fit">
            <ul className="flex flex-nowrap gap-3">
              {filteredRooms.map((room, i) => (
                <li
                  key={i}
                  onClick={() => {
                    // console.log(room)
                    setSelectedRoom(room);
                    setShowSidebar(false);
                  }}
                  className={`p-3 text-[12px] sm:text-[14px] rounded-lg cursor-pointer transition min-w-fit ${
                    selectedRoom?.id === room.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {room.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* المحتوى */}
      {category.toLowerCase() === "virtual office" ? (
        // <div className="flex flex-col gap-10">
        <div className="col-span-3">
          <h1 className="lg:hidden block text-2xl sm:text-4xl font-bold mb-2 text-white">
            {category}
          </h1>
          <img
            src={img}
            className="w-full h-[50vh] object-cover rounded"
            alt="Virtual office Image"
          />
          <p className="text-white my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            assumenda ipsa suscipit, numquam repudiandae voluptas animi
            accusantium vitae voluptatibus enim ipsam sunt fugiat cumque culpa
            nemo ea dolorum incidunt blanditiis aspernatur voluptatum autem quod
            libero! Beatae porro enim illum libero nemo explicabo nam soluta,
            voluptatibus sit provident eligendi laboriosam doloremque?
          </p>
          <div className="lg:hidden">
            <button
              className="px-3 py-1 bg-primary text-white hover:bg-secondary rounded text-sm sm:text-base"
              onClick={() => navigate("/home#explore")}
            >
              Go back
            </button>
          </div>
        </div>
      ) : (
        // </div>
        <AnimatePresence mode="wait">
          {selectedRoom && (
            <motion.div
              key={selectedRoom.id}
              variants={fadeInDownLong}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="col-span-3"
            >
              {selectedRoom ? (
                <div className="bg-light p-0 sm:p-4 shadow-lg rounded-xl">
                  <div className="flex justify-between items-center">
                    <div className="p-3 sm:p-0 capitalize">
                      <h3 className="text-lg sm:text-2xl font-bold mb-2">
                        {selectedRoom.name}
                      </h3>
                      <p className="text-gray-500 mb-4 text-sm sm:text-md">
                        Capacity: {selectedRoom.capacity}
                      </p>
                    </div>
                    {
                      <div className="lg:hidden mr-8">
                        <button
                          className="px-3 py-1 bg-primary text-white hover:bg-secondary rounded text-sm sm:text-base"
                          onClick={() => navigate("/home#explore")}
                        >
                          Go back
                        </button>
                      </div>
                    }
                  </div>

                  {selectedRoom.img.length > 0 ? (
                    <div className="mb-4 relative">
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
                          pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        className="shadow-lg w-full h-full max-w-full "
                      >
                        {selectedRoom.img.map((image, index) => (
                          <SwiperSlide key={index} className="">
                            <img
                              src={image}
                              alt={`${selectedRoom.name}-${index}`}
                              loading="lazy"
                              className="h-full w-full sm:h-[60vh] sm:object-cover "
                              onClick={() => setPreview(image)} // 👈 هنا الفيو
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="custom-prev absolute z-10 left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 p-2 sm:p-3 text-white shadow-lg hover:bg-orange-600">
                        <ChevronLeft />
                      </div>
                      <div className="custom-next absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 p-2 sm:p-3 text-white shadow-lg hover:bg-orange-600">
                        <ChevronRight />
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 bg-gray-200 h-64 flex items-center justify-center rounded-xl">
                      No Image
                    </div>
                  )}

                  {/* Preview Modal */}
                  {preview && (
                    <div
                      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                      onClick={() => setPreview(null)}
                    >
                      <div className="relative">
                        <img
                          src={preview}
                          alt="Preview"
                          className="max-w-[95vw] max-h-[90vh] rounded-lg shadow-lg"
                        />
                        <button
                          className="absolute top-2 right-2 bg-white/90 text-black p-2 rounded-full shadow hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation(); // عشان ميتقفلش لما تدوس جوه
                            setPreview(null);
                          }}
                        >
                          <X size={20} />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="p-3 sm:p-0 capitalize">
                    <p className="mb-2 text-sm sm:text-lg ">
                      {selectedRoom.description}
                    </p>
                    <p className="text-sm sm:text-[15px] text-gray-600">
                      Facilities: {selectedRoom.facilities}
                    </p>
                  </div>
                </div>
              ) : (
                <p>No rooms available for this category.</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
