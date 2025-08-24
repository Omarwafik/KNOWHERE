// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/images/SharedArea/SharedArea1_1.jpg";
import img2 from "../../assets/images/SharedArea/SharedArea1_2.jpg";
import img3 from "../../assets/images/SharedArea/SharedArea1_3.jpg";
import img4 from "../../assets/images/SharedArea/SharedArea1_4.jpg";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Companies() {
  return (
   <div className="bg-light  w-full flex flex-col md:flex-row justify-center items-center p-3 sm:p-6 gap-5">
  {/* النصوص */}
  <div className="flex flex-col gap-5 md:w-[40%] ">
    <div className="flex gap-3 justify-start ">
      <span className="text-6xl md:text-8xl text-primary">K<sub>w</sub></span>
      <h1 className="text-2xl sm:text-4xl self-end">Companies</h1>
    </div>
    <h2 className="text-2xl">what we offer</h2>
    <p className="w-full max-w-lg font-meduim
">
      The Youngest Serif Display
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi non perferendis explicabo obcaecati eius a? Reiciendis, nobis aliquam. Nemo in, amet maiores aliquam dignissimos quis nobis repellendus minima fugiat autem enim architecto, nam officiis ab minus quod magni, sequi laudantium obcaecati officia pariatur aperiam illo facere. Suscipit, corrupti odio.
    </p>
  </div>

  {/* الصور */}
  <div className="relative w-full md:w-[40%]">
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
      className="rounded-2xl shadow-lg"
    >
      <SwiperSlide>
        <img src={img1} alt="Company 1" className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Company 2" className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Company 3" className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="Company 4" className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover rounded-2xl" />
      </SwiperSlide>
    </Swiper>

    {/* أزرار التنقل فوق الـ Swiper */}
    <div className="custom-prev absolute z-10 left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 p-3 text-white shadow-lg hover:bg-orange-600">
      <ChevronLeft />
    </div>
    <div className="custom-next absolute z-10 right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-orange-500 p-3 text-white shadow-lg hover:bg-orange-600">
      <ChevronRight />
    </div>
  </div>
</div>
  );
}
