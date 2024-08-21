"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../../../public/heroImage.jpg";

const Hero = () => {
  const ref = useRef(null);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to(".tag", {
      y: 0,
      duration: 1,
    });

    gsap.to(".maintag, .herobtn, .heropara", {
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
    gsap.to(".image", {
      y: 0,
      opacity:1,
      duration: 1,
      opacity: 1,
      delay: 0.5,
    });
  });

  return (
    <>
      <section
        className="hero min-h-screen pt-[18vw] lg:pt-[6vw] px-4 lg:px-[120px] flex items-center justify-center
      ">
        <div className="heroContainer flex flex-col md:flex-row items-center justify-between">
          <div className="hero-1 md:w-2/3 w-full">
            <div className="clip ">
              <h2 className="tag translate-y-[-100%] text-3xl font-semibold">Think IT, Think Next</h2>
            </div>
            <div className="clip ">
              <h1 className="maintag lg:text-6xl text-4xl leading-none lg:leading-[4rem] translate-y-[-100%] font-bold" ref={ref}>
                Brand, Design & Development Agency
              </h1>
            </div>
            <div className="clip my-8">
              <p className="heropara text-xl translate-y-[-100%] text-neutral">
                At Think Next Innovation, Transforming ideas into innovative
                solutions. Partner with us to bring your visions to life and
                stay ahead in the digital landscape
              </p>
            </div>
            <div className="clip">
              <button className="btn herobtn translate-y-[-100%] py-4 px-8 text-lg font-semibold bg-primary hover:bg-darkblue text-darkblue rounded-xl hover:text-white">Let's Talk</button>
            </div>
          </div>
          <div className="hero-2">
            <Image className="image lg:w-[25vw] opacity-0 w-[40vw] rounded-[200px] object-contain translate-y-[-100%]" src={heroImage} alt="design by freepic" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
