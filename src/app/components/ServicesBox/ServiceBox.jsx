import React from "react";
import './serviceBox.css'

const ServiceBox = ({Icon, title, p1,p2,p3}) => {
  return (
    <>
      <div className="box">
        <div className="icon">
          <Icon />
        </div>
        <h4>{title}</h4>
        <p className="">{p1}</p>
        <p className="">{p2}</p>
        <p className="">{p3}</p>
      </div>
    </>
  );
};

export default ServiceBox;
