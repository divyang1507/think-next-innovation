'use client'
import React from "react";
// import "./contact.css";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Contact = () => {

  gsap.registerPlugin(useGSAP, ScrollTrigger);

useGSAP(()=>{
  gsap.from('.contactHeading, .contactTag',{
    y:-100,
    opacity:0,
    duration: 1,
    stagger:0.5,
    scrollTrigger:{
      trigger:"#contact" ,
      start: "top 80%",
      end: "20% 60%",
      // markers: true,
      scrub:1
    }
  })

  gsap.from('.contact-2',{
    x:100,
    opacity:0,
    duration: 2,
    stagger:0.5,
    scrollTrigger:{
      trigger:".contact-2" ,
      start: "top 80%",
      end: "30% 60%",
      // markers: true,
      scrub:1
    }
  })
  gsap.from('.contact-1',{
    x:-100,
    opacity:0,
    duration: 2,
    stagger:0.5,
    scrollTrigger:{
      trigger:".contact-1" ,
      start: "top 80%",
      end: "30% 60%",
      // markers: true,
      scrub:1
    }
  })
})



  return (
    <>
      <section id="contact" className=" pt-12 md:py-0 px-4 lg:px-[120px]">
      <div className="clip">
        <h3 className="contactHeading text-primary text-6xl font-bold mb-4">Contact us</h3>
      </div>
      <div className="clip">
            <h2 className="contactTag text-4xl font-medium"> Connect with Next Innovation</h2>
      </div>
        <div className="contactContainer flex md:flex-row flex-col justify-between gap-5">
          <div className="contact-1 flex-1">

            <div className="flex mt-4 items-center" >
              <IoMdMail className="contactIcon text-4xl text-primary bg-darkblue p-2 m-4 rounded-lg" /> <span className="text-2xl">info@thinknextinnovation.com</span>
            </div>
            <div className="flex items-center">
              <IoCall className="contactIcon text-4xl text-primary bg-darkblue p-2 m-4 rounded-lg" /> <span className="text-2xl">+91 999 999 999</span>
            </div>
            <div className="flex items-center">
              <IoLocationSharp className="contactIcon text-4xl text-primary bg-darkblue p-2 m-4 rounded-lg" /> <span className="text-2xl"> Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="contact-2 flex-1 bg-darkblue p-8 rounded-xl">
          <div className="contact2Tag text-white text-4xl ">
          Let’s talk your project
          </div>
            <form className="flex flex-col gap-4 mt-8 ">
              <div className="inputbox">
                <input type="text" className="p-2 text-lg w-full text-white bg-transparent rounded-lg border-gray-50 border" placeholder="Name" required />
               
              </div>
              <div className="inputbox">
                <input type="email" className="p-2 text-lg w-full text-white bg-transparent rounded-lg border-gray-50 border" placeholder="Email" required />
            
              </div>
              <div className="inputbox">
                <textarea type="text" className="p-2 text-lg w-full text-white bg-transparent rounded-lg h-48 border-gray-50 border" placeholder="Your Message..." required></textarea>
              
              </div>
              <button className="btn contactButton py-4 px-8 bg-primary hover:bg-neutral text-darkblue rounded-xl hover:text-white"> Contact us</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
