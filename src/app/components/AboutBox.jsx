import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const AboutBox = ({title, description}) => {
  return (
    <>
      <div className="valueblock flex py-6 border-b bordrer-black cursor-pointer ">
        <div className="valueBox w-full flex flex-col justify-center relative pr-4">
          <h3 className="valueHeading text-2xl font-bold pb-4">{title}</h3>
          <p className="paragraph text-lg clip ">
           {description}
          </p>
        </div>
        <div className="icon"><FaArrowRight/></div>
      </div>
    </>
  );
};

export default AboutBox;
