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

export default function Footer() {
  return (
    <>
      <div
        className="py-3 px-3 sm:py-10 lg:py-12 sm:px-0  lg:px-20 bg-primary flex flex-col items-center gap-6 text-white "
        id="contact"
      >
        <div className="top flex lg:flex-row flex-col justify-between items-center w-full">
          <div className="flex lg:flex-col sm:flex-row flex-col  gap-5 p-3 ">
            <h1 className="text-4xl md:text-6xl font-title">
              Let's Keep In Touch !
            </h1>
            <p className="w-full lg:max-w-2xl max-w-sm text-sm sm:text-[14px] tracking-widest">
              Knowhere is more than a coworking space — it’s where businesses
              grow, ideas connect, and success begins We’re here to support your
              work, your meetings, and your growth — every step of the way, Stay
              connected with us and discover a workspace where ideas turn into
              reality.
            </p>
          </div>
          {/* <div className="px-3 text-left"> */}
          {/* </div> */}
          <div className="info flex flex-col md:flex-row lg:flex-col self-start  justify-between  gap-6 p-3 ">
            <div className="phone flex gap-2 lg:gap-5 text-sm sm:text-md">
              <Phone size={20} />
              <span>+20 105 006 6009</span>
            </div>
            <div className="flex flex-col gap-2">
              <a
                className="mail flex  gap-2 lg:gap-5 items-center hover:underline text-sm sm:text-md"
                href="mailto:hello@knowhere-eg.com"
              >
                <Mail className="w-5 h-5" />
                <span>hello@knowhere-eg.com</span>
              </a>
            </div>
            <a
              className="location flex  gap-2 lg:gap-5 hover:underline text-sm sm:text-md"
              href="https://maps.app.goo.gl/N4K18mLy3XvbxytYA"
              target="_blank"
            >
              <MapPin />
              <span>first Settelment , H6 Bulding , IBN Malka Street</span>
            </a>
          </div>
        </div>
        <span className="px-3 self-start">Tax ID : (703-599-968)</span>

        <div className="bottom flex justify-center items-center w-full">
          <div className="social flex gap-5 text-xl sm:gap-10 sm:text-3xl ">
            <a
              href="https://www.facebook.com/knowhere.hub"
              target="_blank"
              className="cursor-pointer p-2 sm:p-5 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/knowhere.hub/"
              target="_blank"
              className="cursor-pointer p-2 sm:p-5 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaInstagram className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/knowhere-hub/posts/?feedView=all"
              target="_blank"
              className="cursor-pointer p-2 sm:p-5 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://www.tiktok.com/@knowherehub"
              target="_blank"
              className="cursor-pointer p-2 sm:p-5 hover:text-red-950 hover:-translate-y-2 transition duration-200"
            >
              <FaTiktok className="cursor-pointer" />
            </a>
          </div>
        </div>
        <hr className="w-[80%] bg-light mx-auto h-1 my-1 border-0" />
        <h1>LIKE KNOWHERE ELSE</h1>
      </div>
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
