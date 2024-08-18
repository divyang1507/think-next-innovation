'use client'
import Image from "next/image";
import React from "react";
import "./hero.css";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="heroContainer">
          <div className="hero-1">
           <div className="tag">
           <motion.h2 initial={{y:-100}} animate={{y:"0%"}} transition={{ duration:1}} >Think IT, Think Next</motion.h2>
           </div> 
           <div className="maintag">
            <motion.h1 initial={{y:-100}} animate={{y:"0%"}} transition={{ duration:1}} >Brand, Design & Development Agency</motion.h1>
           </div>
            <p>
              At Think Next Innovation, Transforming ideas into innovative
              solutions. Partner with us to bring your visions to life and stay
              ahead in the digital landscape
            </p>
            <button className="btn">
              Let's Talk
            </button>
          </div>
          <div className="hero-2">
            <Image
              src="/heroImage.jpg"
               width={300}
               height={600}
              alt="design by freepic"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
