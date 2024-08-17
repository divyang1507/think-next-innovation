import React from "react";
import "./about.css";
import AboutBox from "@/app/components/AboutBox/AboutBox";
const About = () => {
  const aboutbox = [
    {
      title: "Innovation",
      description:
        "Pioneering the latest technologies to create superior solutions.",
    },
    {
      title: "Reliability",
      description: "Consistently meeting deadlines and project goals.",
    },
    {
      title: "Quality",
      description: "Upholding the highest standards in every project.",
    },
    {
      title: "Partnership",
      description:
        "Collaborating closely with clients to understand and achieve their goals.",
    },
  ];

  return (
    <>
      <section id="about">
        <h3>About us</h3>
        <div className="aboutContainer">
          <div className="about-1">
            <h2>Your Partner in IT Solutions</h2>
            <p>
              On the other hand denounce with righteous and dislike men who
              beguile and demoralizes by the charms of pleasure thes moment, so
              blinded by desire that they cannot
            </p>
            <p>
              We understand the importance of providing solutions that not only
              address the challenges of today but also anticipate the
              opportunities of tomorrow. With a deep commitment to integrity and
              client satisfaction, we steer clear of fleeting trends and
              distractions, focusing instead on delivering lasting value.
            </p>
          </div>
          <div className="about-2">
            {aboutbox.map((e, id) => {
              return (
                <div   key={id}>
                  <AboutBox
                    title={e.title}
                    description={e.description}
                  
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
