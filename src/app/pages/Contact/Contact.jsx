'use client'
import React from "react";
import "./contact.css";
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

  gsap.from('.inputbox, .contactButton',{
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
      <section id="contact">
      <div className="clip">
        <h3 className="contactHeading">Contact us</h3>
      </div>
      <div className="clip">
            <h2 className="contactTag"> Connect with Next Innovation</h2>
      </div>
        <div className="contactContainer">
          <div className="contact-1">

            <div>
              <IoMdMail /> <span>info@thinknextinnovation.com</span>
            </div>
            <div>
              <IoCall /> <span>+91 999 999 999</span>
            </div>
            <div>
              <IoLocationSharp /> <span> Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="contact-2">
            <form>
              <div className="inputbox">
                <input type="text" required />
                <label htmlFor="name"> Name</label>
              </div>
              <div className="inputbox">
                <input type="email" required />
                <label htmlFor="name"> Email</label>
              </div>
              <div className="inputbox">
                <textarea type="text" required></textarea>
                <label htmlFor="name"> Message</label>
              </div>
              <button className="btn contactButton"> Contact us</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
