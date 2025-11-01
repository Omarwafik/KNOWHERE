import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import img from "../../assets/images/Meeting Rooms/V10/V10-3.avif";

export default function Footer() {
  return (
    <>
      <footer
        className="py-3 px-3 sm:py-10 lg:py-8 sm:px-0 lg:px-16 bg-primary flex flex-col items-center gap-6 text-white "
        id="contact"
      >
        {/* <section className="p-5 "> */}
        {/* <h1
          style={{ backgroundImage: `url(${img})` }}
          className="scale-y-150 text-8xl font-title font-bold  tracking-[70px] bg-clip-text text-transparent bg-cover bg-center"
        >
          KNOWEHRE
        </h1> */}
        {/* </section> */}
        <section className="top flex lg:flex-row flex-col justify-between items-center w-full">
          <div className="flex lg:flex-col sm:flex-row flex-col   gap-5 p-3 ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-title">
              Let's Keep In Touch !
            </h1>
            <p className="w-full lg:max-w-2xl max-w-sm text-xs sm:text-sm tracking-widest">
              Knowhere is more than a coworking space — it’s where businesses
              grow, ideas connect, and success begins We’re here to support your
              work, your meetings, and your growth — every step of the way, Stay
              connected with us and discover a workspace where ideas turn into
              reality.
            </p>
          </div>

          <div className="info flex flex-col sm:flex-row lg:flex-col self-start justify-around lg:justify-between max-lg:w-full gap-6 p-3 ">
            <div className="phone flex gap-2 lg:gap-5 text-xs sm:text-base">
              <Phone size={20} />
              <span>+20 105 006 6009</span>
            </div>
            <div className="flex flex-col gap-2 underline underline-offset-3">
              <a
                className="mail flex  gap-2 lg:gap-5 items-center  text-xs sm:text-base"
                href="mailto:hello@knowhere-eg.com"
              >
                <Mail className="w-5 h-5" />
                <span>hello@knowhere-eg.com</span>
              </a>
            </div>
            <a
              className="location flex  gap-2 lg:gap-5  text-xs sm:text-base underline underline-offset-3"
              href="https://maps.app.goo.gl/N4K18mLy3XvbxytYA"
              target="_blank"
            >
              <MapPin />
              <span>first Settelment , H6 Bulding , IBN Malka Street</span>
            </a>
          </div>
        </section>

        <section className="bottom flex justify-center items-center w-full">
          <div className="social flex gap-12 text-xl sm:gap-20 sm:text-3xl ">
            <a
              href="https://www.facebook.com/knowhere.hub"
              target="_blank"
              className="cursor-pointer p-2 sm:p-4 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/knowhere.hub/"
              target="_blank"
              className="cursor-pointer p-2 sm:p-4 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaInstagram className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/knowhere-hub/posts/?feedView=all"
              target="_blank"
              className="cursor-pointer p-2 sm:p-4 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://www.tiktok.com/@knowherehub"
              target="_blank"
              className="cursor-pointer p-2 sm:p-4 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaTiktok className="cursor-pointer" />
            </a>
          </div>
        </section>
        <hr className="w-[100%] bg-light mx-auto h-1  border-0" />
        <div className="w-full flex justify-between">
          <h1 className="text-sm sm:text-lg">LIKE KNOWHERE ELSE</h1>
          <span className="text-sm sm:text-lg">Tax ID : (703-599-968)</span>
        </div>
      </footer>
    </>
  );
}

{
  /* <div className="right flex flex-col items-center gap-7">
  <h1 className='text-3xl sm:text-6xl'>Our Social Media</h1>
  <span className='text-xl sm:text-2xl tracking-widest self-start mb-4'>Follow US !</span>
  <div className="social flex gap-5 text-3xl ">
  <a href="https://www.facebook.com/knowhere.hub"
  target='_blank'
  className="cursor-pointer p-5 hover:text-red-950 hover:-translate-y-2 transition ">
  <FaFacebook />
  </a>
  <a href="https://www.instagram.com/knowhere.hub/"
  target='_blank'
  className="cursor-pointer p-5 hover:text-red-950 hover:-translate-y-2 transition ">
  <FaInstagram className="cursor-pointer"/>
  </a>
  <a href="https://www.linkedin.com/company/knowhere-hub/posts/?feedView=all"
  target='_blank'
            className="cursor-pointer p-5 hover:text-red-950 hover:-translate-y-2 transition ">
            <FaLinkedin className="cursor-pointer"/>
            </a>
            <a href="https://www.tiktok.com/@knowherehub"
            target='_blank'
            className="cursor-pointer p-5 hover:text-red-950 hover:-translate-y-2 transition ">
            <FaTiktok className="cursor-pointer"/>
            </a>
            </div>
            <div className="footer-links flex gap-16">
            <ul className='flex flex-col gap-5'>
            <li>Services</li>
            <li>Company</li>
            <li>Location</li>
            </ul>
            <ul className='flex flex-col gap-5'>
            <li>Services</li>
            <li>Company</li>
            <li>Location</li>
            </ul>
            <div className='flex flex-col gap-3 items-center justify-center'>
            
            <h1 className='text-3xl font-serif '>KNOWHERE</h1>
            <span className>LIKE NOWHERE ELSE</span>
            </div> */
}
{
  /* </div> */
}
{
  /* </div> */
}
// <div className="bottom">
{
  /* </div> */
}
