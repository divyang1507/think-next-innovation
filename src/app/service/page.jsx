import React from "react";
// import './servicePage.css'
// import Services from "./Services";
import data from "./service"; 




const page = () => {
  return (
    <>
      <section className="servicePage mt-36 md:py-0 px-4 lg:px-[120px] ">
      
        <div className="pageHeading text-center mb-16 text-5xl font-bold">
          Comprehensive IT Solutions Tailored to Your Needs
        </div>
<div>
  {data.map((service, index) => (
        <div key={index} className="serviceBox">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.details.map((detail, detailIndex) => (
              <li key={detailIndex}>
                {typeof detail === 'string' ? (
                  detail
                ) : detail.subheading ? (
                  <>
                    <h4>{detail.subheading}</h4>
                    <p>{detail.content}</p>
                  </>
                ) : (
                  <>
                    <strong>{detail.step}:</strong> {detail.description}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
</div>
      </section>
    </>
  );
};

export default page;
