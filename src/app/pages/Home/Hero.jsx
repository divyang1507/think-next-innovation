import Image from "next/image";
import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="heroContainer">
          <div className="hero-1">
            <h2 className="tag">Think IT, Think Next</h2>
            <h1 className="maintag">Brand, Design & Development Agency</h1>
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
