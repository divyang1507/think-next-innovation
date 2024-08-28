import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const AboutBox = ({title, description}) => {
  return (
    <>
   <Link className="" href={'/about'}>
   <div className="valueblock flex py-6 group border-b bordrer-black cursor-pointer p-2 hover:bg-slate-100 ">
        <div className="valueBox w-full flex flex-col justify-center relative pr-4">
          <h3 className="valueHeading text-2xl font-bold pb-4">{title}</h3>
          <p className="paragraph text-lg clip ">
           {description}
          </p>
        </div>
        <div className="icon h-fit  transition-all duration-150 group-hover:bg-primary rounded-full border-2 border-black  text-center flex items-center justify-center"><FaArrowRight className="m-4 group-hover:rotate-45 transition-all duration-150"/></div>
      </div>
   </Link>
    </>
  );
};

export default AboutBox;
