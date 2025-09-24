import React, { useState } from "react";
import img from "../../assets/images/Offices/Partitions/Partition1.jpg";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where Is Knowhere?",
      answer:
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="">
          Knowhere is in the First Settlement, Behind El Kabbani Furniture , <br />We do not have other branches

        </p>
        <div className="w-full max-w-md h-64 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1729268254007!2d31.445357899999998!3d30.06057729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d8cf83300b7%3A0xb1db3679075d448!2sKnowhere!5e0!3m2!1sen!2seg!4v1757241732878!5m2!1sen!2seg"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      
    },
    {
      question: "What Are Your Working Hours?",
      answer:
      <p className="">
        🕒 We are open from <strong>Sunday to Thursday</strong> (8:00 AM – 12:00 Midnight),  
        and on <strong>Friday & Saturday</strong> (10:00 AM – 10:00 PM).
      </p>
    },
    {
      question: "How can I reset my password?",
      answer:
        "Click 'Forgot password' on the login page and follow the instructions.",
    },
    {
      question: "What is the payment process?",
      answer:
        "We accept payments via credit card, PayPal, or bank transfer for your convenience.",
    },
  ];

  return (
   <div
   className=""
      
    >
      {/* Content here */}
    </div>

  );
}
