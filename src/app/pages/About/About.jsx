'use client'
import React from "react";
import "./about.css";
import AboutBox from "@/app/components/AboutBox/AboutBox";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const About = () => {
  const aboutbox = [
    {
      title: "Innovation",
      description:
        "Pioneering the latest technologies to create superior solutions.",
    },
    {
      title: "Reliability",
      description: "Consistently meeting deadlines and project goals.",
    },
    {
      title: "Quality",
      description: "Upholding the highest standards in every project.",
    },
    {
      title: "Partnership",
      description:
        "Collaborating closely with clients to understand and achieve their goals.",
    },
  ];

  gsap.registerPlugin(useGSAP, ScrollTrigger);

useGSAP(()=>{
  gsap.from('.aboutHeading, .about-1',{
    y:-100,
    opacity:0,
    duration: 1,
    stagger:0.5,
    scrollTrigger:{
      trigger:"#about" ,
      start: "top 80%",
      end: "20% 60%",
      markers: true,
      scrub:1
    }
  })

  gsap.from('.valueblock',{
    x:100,
    opacity:0,
    duration: 2,
    stagger:0.5,
    scrollTrigger:{
      trigger:".valueblock" ,
      start: "top 80%",
      end: "30% 60%",
      // markers: true,
      scrub:1
    }
  })
})
  return (
    <>
      <section id="about">
       <div className="clip">
       <h3 className="aboutHeading">About us</h3>
       </div>
        <div className="aboutContainer">
          <div className="about-1">
            <h2 className="aboutTag">Your Partner in IT Solutions</h2>
            <p className="aboutPara">
              On the other hand denounce with righteous and dislike men who
              beguile and demoralizes by the charms of pleasure thes moment, so
              blinded by desire that they cannot
            </p>
            <p>
              We understand the importance of providing solutions that not only
              address the challenges of today but also anticipate the
              opportunities of tomorrow. With a deep commitment to integrity and
              client satisfaction, we steer clear of fleeting trends and
              distractions, focusing instead on delivering lasting value.
            </p>
          </div>
          <div className="about-2">
            {aboutbox.map((e, id) => {
              return (
                <div   key={id}>
                  <AboutBox
                    title={e.title}
                    description={e.description}
                  
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
