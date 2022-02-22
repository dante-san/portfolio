import React from "react";
import { FaGithub, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-5">
      <div className="flex justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/dante-san"
          target="_blank"
        >
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 hover:bg-red-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://youtube.com/saiyanea"
          target="_blank"
        >
          <FaYoutube />
          <span class="sr-only">Youtube</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://twitter.com/sledgemaster2"
          target="_blank"
        >
          <FaTwitter />
          <span class="sr-only">Twitter</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/dante-san"
          target="_blank"
        >
          <FaEnvelope />
          <span class="sr-only">Email</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with
          <span className="mr-2 ml-2" role="link" aria-level="heart">
            💝
          </span>
          by{" "}
          <a
            href="mailto:papu.team7@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Laxmidhar Moharana
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
