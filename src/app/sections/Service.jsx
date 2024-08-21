'use client'
import ServiceBox from "@/app/components/ServiceBox";
// import "./service.css";
import React from "react";
import { BsStack } from "react-icons/bs";
import { GrOptimize } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Service = () => {

  const box = [
    {
      Icon: MdOutlineDesignServices,
      title: "Design",
      p1: "Custom Website Design",
      p2: "Mobile App Design",
      p3: "Brand Design",
    },
    {
      Icon: FaCode,
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

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(()=>{
    gsap.from('.serviceHeading , .serviceTag',{
      y:-100,
      opacity:0,
      duration: 1,
      stagger:0.5,
      scrollTrigger:{
        trigger:"#service" ,
        start: "top 80%",
        end: "20% 60%",
        // markers: true,
        scrub:1
      }
    })
  
    gsap.from('.box',{
      y:-100,
      opacity:0,
      duration: 2,
      stagger:0.5,
      scrollTrigger:{
        trigger:".box" ,
        start: "top 80%",
        end: "30% 60%",
        // markers: true,
        scrub:1
      }
    })
  })

  return (
    <>
      <section id="service" className="pt-12 md:py-0 px-4 lg:px-[120px]">
      <div className="clip">
        <h3 className="serviceHeading text-primary text-6xl font-bold mb-4">Services</h3>
      </div>
      <div className="clip">
      <h2 className="serviceTag text-4xl font-medium"> Creative Design Solutions</h2>

      </div>
        <div className="serviceContainer  mt-8">
          <div className="serviceBox grid grid-cols-1 lg:grid-cols-3 justify-between gap-5 items-center ">
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
