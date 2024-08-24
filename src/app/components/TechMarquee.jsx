import React from "react";
import { FaHtml5 } from "react-icons/fa"; 
import { FaBootstrap, FaCss3, FaJs, FaReact, FaStarOfLife, FaWebflow } from "react-icons/fa6";
import { SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { GrAndroid } from "react-icons/gr";

export const TechMarquee = () => {
  return (
    <>
      <div className="marquee flex gap-4 overflow-hidden relative bg-primary my-8 py-8">
        <div className="lg:text-6xl font-bold text-4xl flex-shrink-0 items-center flex justify-around min-w-full gap-4 animate-scroll">
        
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaWebflow />
          <SiTailwindcss />
          <FaBootstrap />
          <SiMongodb />
          <SiMysql />
          <GrAndroid />
          <FaReact />
        </div>
        <div className="lg:text-6xl font-bold text-4xl flex-shrink-0 flex justify-around min-w-full gap-4 animate-scroll">
       
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaWebflow />
          <SiTailwindcss />
          <FaBootstrap />
          <SiMongodb />
      
          <SiMysql />
          <GrAndroid />
          <FaReact />
        </div>
      
      </div>
    </>
  );
};
