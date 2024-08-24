import React from "react";
import { FaStarOfLife } from "react-icons/fa6";

export const Marquee = () => {
  return (
    <>
      <div className="marquee flex gap-4 overflow-hidden relative bg-primary my-8 py-8">
        <div className="lg:text-6xl font-bold text-4xl flex-shrink-0 flex justify-around min-w-full gap-4 animate-scroll">
          <p>Design</p>
          <FaStarOfLife />
          <p>Develope</p>
          <FaStarOfLife />
          <p>Brand</p>
          <FaStarOfLife />
        </div>
        <div className="lg:text-6xl font-bold text-4xl flex-shrink-0 flex justify-around min-w-full gap-4 animate-scroll">
          <p>Design</p>
          <FaStarOfLife />
          <p>Develope</p>
          <FaStarOfLife />
          <p>Brand</p>
          <FaStarOfLife />
        </div>
         </div>
    </>
  );
};
