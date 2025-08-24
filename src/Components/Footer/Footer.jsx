import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className='p-10 bg-primary flex  text-white' id='contact'>
        <div className="left flex flex-col gap-10  w-[40%]">
          <h1 className='text-2xl md:text-6xl'>Let's Keep In <br /> Touch With Us!</h1>
          <p className='w-full max-w-lg font-paragraph text-[12px] sm:text-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius minus delectus iusto consequuntur, fugiat quia ipsam eum laboriosam corporis qui! psum dolor sit amet cons psum dolor sit amet cons psum dolor sit amet cons psum dolor sit amet cons</p>
          <div className='info flex flex-col gap-6 w-[80%]'>
          <div className="phone flex justify-between">
            <Phone />
            <span>01094887785</span>  
          </div>
          <div className="flex flex-col gap-2">
              {/* Mailto (يفتح حسب default mail client) */}
              {/* <div className=''> */}
                <a
                  className="mail flex justify-between items-center gap-2 hover:underline"
                  href="mailto:omarwafik168@gmail.com"
                  >
                  <Mail className="w-5 h-5" />
                  <span>omarwafik168@gmail.com</span>
                </a>
              {/* </div> */}

              {/* Gmail Direct (يفتح Gmail Compose في المتصفح) */}
              <a
                className="gmail flex self-end gap-2 text-white hover:underline"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=omarwafik168@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <Mail className="w-5 h-5" /> */}
                <span>Send via Gmail</span>
              </a>
          </div>

            <a className="location flex justify-between" href="https://maps.app.goo.gl/N4K18mLy3XvbxytYA" target='_blank'>
              <MapPin />
              <span>first Settelment , H6 Bulding , IBN Malka Street</span>
            </a>
          </div>
        </div>
        <div className="right flex flex-col items-center gap-7">
          <h1 className='text-3xl sm:text-6xl'>Our Social Media</h1>
          <span className='text-xl sm:text-2xl tracking-widest self-start mb-8'>Follow US !</span>
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
        </div>
      </div>
    </>
  )
}
