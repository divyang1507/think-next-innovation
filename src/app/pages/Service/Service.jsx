import ServiceBox from "@/app/components/ServicesBox/ServiceBox";
import "./service.css";
import React from "react";
import { BsStack } from "react-icons/bs";
import { GrOptimize } from "react-icons/gr";
import { FaLaptopCode, FaHeadSideVirus } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";

const Service = () => {

  const box = [
    {
      Icon: BsStack,
      title: "Design",
      p1: "Custom Website Design",
      p2: "Mobile App Design",
      p3: "Brand Design",
    },
    {
      Icon: BsStack,
      title: "Development",
      p1: "Website Developement",
      p2: "Mobile App Developement",
      p3: "Software Developement",
    },
    {
      Icon: BsStack,
      title: "Marketing & SEO",
      p1: "Website Developement",
      p2: "Mobile App Developement",
      p3: "Software Developement",
    },
  ];

  return (
    <>
      <section id="service">
        <h3>Services</h3>
        <h2> Creative Design Solutions</h2>

        <div className="serviceContainer">
          <div className="serviceBox">
            {box.map((e, id) => {
              return (
                <ServiceBox
                  key={id}
                  title={e.title}
                  p1={e.p1}
                  p2={e.p2}
                  p3={e.p3}
                  Icon={e.Icon}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
