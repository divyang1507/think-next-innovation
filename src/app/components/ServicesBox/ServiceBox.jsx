import React from "react";
import './serviceBox.css'

const ServiceBox = ({Icon, title, description}) => {
  return (
    <>
      <div className="box">
        <div>
          <Icon />
        </div>
        <h4>{title}</h4>
        <p className="">{description}</p>
      </div>
    </>
  );
};

export default ServiceBox;
