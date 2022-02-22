import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-lg text-center w-full pt-36 pb-10 m-auto">
      <h1 className="text-2xl sm:text-4xl">Interested in working together ?</h1>
      <a href="mailto:papu.team7@gmail.com">
        <span className="mt-7 inline-block w-auto bg-black text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3">Get in Touch</span>
            <FaArrowRight color=""/>
          </div>
        </span>
      </a>
    </div>
  );
}

export default Contact;
