import ServiceBox from "@/app/components/ServicesBox/ServiceBox";
import './service.css'
import React from "react";
import { BsStack } from "react-icons/bs";
import { GrOptimize } from "react-icons/gr";
import { FaLaptopCode, FaHeadSideVirus } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";

const Service = () => {
  const box = [
    {
      Icon: BsStack,
      title: "Web Design and Devlopment",
      description:
        "Custom Website Design & Development: Crafting unique, responsive websites tailored to your brand, including e-commerce with secure payment gateways. CMS & Maintenance: Building on platforms like WordPress, with ongoing support to ensure seamless performance and easy content updates.",
    },
    {
      Icon: GrOptimize,
      title: "Search Engine Optimization (SEO)",
      description:
        "SEO & PPC Advertising: Boosting your website's search engine rankings and managing paid campaigns on platforms like Google Ads to drive targeted traffic. Social Media & Content Marketing: Engaging your audience on platforms like Facebook and Instagram, creating valuable content and Email Marketing & Software Development",
    },
    {
      Icon: FaLaptopCode,
      title: "Custom Software Developement",
      description:
        "Building software solutions tailored to your specific business needs. Software Testing and Quality Assurance: Ensuring your software is bug-free and performs optimally through rigorous testing. Mobile Application Development",
    },
    {
      Icon: MdDevices,
      title: "IOS App Developement",
      description:
        "Developing mobile applications for Apple's iOS platform. Android App Development: Creating mobile applications for the Android platform. Cross-Platform App Development: Building mobile applications that work seamlessly on both iOS and Android devices. IT Consulting",
    },

    {
      Icon: FaHeadSideVirus,
      title: "IT Strategy and Planning",
      description:
        "Helping businesses develop effective IT strategies to achieve their goals. Technology Assessment: Evaluating current technology systems and recommending improvements. Digital Transformation Consulting: Assisting businesses in adopting digital technologies to enhance operations and customer experience.",
    },
  ];

  return (
    <>
      <section id="service">
        <h3>Services</h3>
        <div className="serviceContainer">
          <div className="serviceBox">
            {box.map((e, id) => {
             return(
                <ServiceBox
                key={id}
                title={e.title}
                description={e.description}
                Icon={e.Icon}
              />
             )
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
