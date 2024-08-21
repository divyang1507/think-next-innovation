import React from "react";
// import './servicePage.css'
// import Services from "./Services";
import data from "./Data.js";
import Services from "./Services.jsx";
const page = () => {
  return (
    <>
      <section className="servicePage mt-36 md:py-0 px-4 lg:px-[80px]">
        <div className="pageHeading text-center mb-4 lg:mb-16 lg:text-5xl text-3xl font-bold">
          Comprehensive IT Solutions Tailored to Your Needs
        </div>
        <div>
          <Services data={data} />
        </div>
      </section>
    </>
  );
};

export default page;
