import React from "react";
import { FaHtml5, FaCss3, FaLaravel, FaReact, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiAngular,
  SiTailwindcss,
  SiFlutter,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

import {} from "react-icons/fi";

function Skills() {
  return (
    <div className="max-w-4xl justify-center mx-auto py-12" id="tech">
      <p className="font-bold text-center text-2xl sm:text-4xl pt-4-6 text-black">
        Tech I Use
      </p>
      <div className="flex flex-wrap pt-2 justify-center">
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <FaHtml5 className="text-5xl mx-auto text-orange-600" />
          <p className="text-center font-semibold text-2xl mt-6">HTML 5</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <FaCss3 className="text-5xl mx-auto text-blue-600" />
          <p className="text-center font-semibold text-2xl mt-6">CSS 3</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiJavascript className="text-5xl mx-auto text-yellow-400" />
          <p className="text-center font-semibold text-2xl mt-6">Javascript</p>
        </div>
        {/* <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiPhp className="text-5xl mx-auto text-sky-800" />
          <p className="text-center font-semibold text-2xl mt-6">PHP</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiMysql className="text-5xl mx-auto text-sky-800" />
          <p className="text-center font-semibold text-2xl mt-6">MySQL</p>
        </div> */}
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <FaLaravel className="text-5xl mx-auto text-red-500" />
          <p className="text-center font-semibold text-2xl mt-6">Laravel</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <FaReact className="text-5xl mx-auto text-teal-500" />
          <p className="text-center font-semibold text-2xl mt-6">React</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiAngular className="text-5xl mx-auto text-red-600" />
          <p className="text-center font-semibold text-2xl mt-6">Angular</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiNodedotjs className="text-5xl mx-auto text-green-600" />
          <p className="text-center font-semibold text-2xl mt-6">Node</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiNextdotjs className="text-5xl mx-auto text-black-600" />
          <p className="text-center font-semibold text-2xl mt-6">Next.js</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiTailwindcss className="text-5xl mx-auto text-cyan-500" />
          <p className="text-center font-semibold text-2xl mt-6">Tailwind</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiFlutter className="text-5xl mx-auto text-cyan-400" />
          <p className="text-center font-semibold text-2xl mt-6">Flutter</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiGithub className="text-5xl mx-auto text-black-400" />
          <p className="text-center font-semibold text-2xl mt-6">GitHub</p>
        </div>
        <div className="flex flex-col w-40 m-6 p-10 shadow-2xl rounded-xl overflow-hidden bg-white">
          <SiFirebase className="text-5xl mx-auto text-yellow-500" />
          <p className="text-center font-semibold text-2xl mt-6">Firebase</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
