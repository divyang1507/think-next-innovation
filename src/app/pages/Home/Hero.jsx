"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import "./hero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../../../../public/heroImage.jpg"

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
      duration: 1,
      opacity:1, 
      delay: 0.5,
    });
  });

  return (
    <>
      <section className="hero" >
        <div className="heroContainer">
          <div className="hero-1">
            <div className="clip">
              <h2 className="tag">Think IT, Think Next</h2>
            </div>
            <div className="clip">
              <h1 className="maintag" ref={ref}>
                Brand, Design & Development Agency
              </h1>
            </div>
            <div className="clip">
              <p className="heropara">
                At Think Next Innovation, Transforming ideas into innovative
                solutions. Partner with us to bring your visions to life and
                stay ahead in the digital landscape
              </p>
            </div>
            <div className="clip">
              <button className="btn herobtn">Let's Talk</button>
            </div>
          </div>
          <div className="hero-2">
            <Image
              className="image"
              src={heroImage}
              alt="design by freepic"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
