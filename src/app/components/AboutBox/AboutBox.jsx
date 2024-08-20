import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import './aboutBox.css'

const AboutBox = ({title, description}) => {
  return (
    <>
      <div className="valueblock">
        <div className="valueBox">
          <h3 className="valueHeading">{title}</h3>
          <p className="paragraph">
           {description}
          </p>
        </div>
        <div className="icon"><FaArrowRight/></div>
      </div>
    </>
  );
};

export default AboutBox;
