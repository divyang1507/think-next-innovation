import React from "react";
// import './serviceBox.css'

const ServiceBox = ({Icon, title, p1,p2,p3}) => {
  return (
    <>
      <div className="box border border-neutral py-12 rounded-3xl px-8">
        <div className="icon text-5xl text-primary">
          <Icon />
        </div>
        <h4 className="pt-4 pb-2 text-2xl font-semibold">{title}</h4>
        <p className="pt-4 text-lg text-neutral">{p1}</p>
        <p className="pt-4 text-lg text-neutral">{p2}</p>
        <p className="pt-4 text-lg text-neutral">{p3}</p>
      </div>
    </>
  );
};

export default ServiceBox;
