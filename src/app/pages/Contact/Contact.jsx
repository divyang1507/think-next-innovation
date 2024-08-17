import React from "react";
import "./contact.css";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h3>Contact us</h3>
        <div className="contactContainer">
          <div className="contact-1">
            <h2> Connect with Next Innovation</h2>
            <h4> We are Here to Help</h4>

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
            <htmlForm>
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
              <button className="btn"> Contact us</button>
            </htmlForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
