import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { useState } from "react";
import Modal from "./Modal";

export default function Card({ img, title, deploy, github }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="w-full group relative overflow-hidden border-2 rounded-xl flex-1 text-white shadow-lg"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        <img
          src={img}
          alt="project"
          className=" group-hover:scale-125 transition-all duration-500"
        />
        <div className="absolute -bottom-full left-2 md:left-12 group-hover:bottom-20 md:group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-2xl text-primary-color font-extrabold">
            {title}
          </span>
        </div>
        <div className="absolute -bottom-full left-2 md:left-12 group-hover:bottom-7 md:group-hover:bottom-10 transition-all duration-700 z-50 flex gap-4">
          <a
            href={deploy}
            target="_blank"
            className="border border-white bottom-2 flex items-center gap-1 px-2 py-2 rounded-md
                hover:border-primary-color hover:bg-primary-color hover:text-black transition-colors"
          >
            <p className="text-sm md:text-base">View</p> <FiExternalLink />
          </a>
          <a
            href={github}
            target="_blank"
            className="border border-white bottom-2 flex items-center gap-1 px-2 py-2 rounded-md
                hover:border-primary-color hover:bg-primary-color hover:text-black transition-colors"
          >
            <p className="text-sm md:text-base">GitHub</p> 
            <BsGithub />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border border-white bottom-2 flex items-center gap-1 px-2 py-2 rounded-md
                hover:border-primary-color hover:bg-primary-color hover:text-black transition-colors"
          >
            <p className="text-sm md:text-base">About</p>  
            <CgDetailsMore />
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
