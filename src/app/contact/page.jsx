import React from "react";
import "./contactPage.css";
import Image from "next/image";
import contactImage from "../../../public/Contact2.jpg";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";

function page() {
  return (
    <>
      <section className="contactPage">
        <div className="CpageHeading">Let’s work together</div>

        <div className="contianerContact">
          <div className="contactLeft">
            <div className="CpagesubHeading">
              Have any questions? Get in touch!
            </div>
            <div className="contacttype">
              <IoMdMail className="contactIcon" />{" "}
              <span>info@thinknextinnovation.com</span>
            </div>
            <div className="contacttype">
              <IoCall className="contactIcon" /> <span>+91 999 999 999</span>
            </div>
            <div className="contacttype">
              <IoLocationSharp className="contactIcon" />{" "}
              <span> Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="contactRight">
            <form>
              <div className="inputbox">
                <input placeholder="Name" type="text" required />
                {/* <label htmlFor="name"> Name</label> */}
              </div>
              <div className="inputbox">
                <input placeholder="Email" type="email" required />
                {/* <label htmlFor="name"> Email</label> */}
              </div>
              <div className="inputbox">
                <textarea placeholder="Your Message..." type="text" required></textarea>
                {/* <label htmlFor="name"> Message</label> */}
              </div>
              <button className="btn contactButton"> Contact us</button>
            </form>
          </div>
        </div>
      </section>
      {/* <div>
    <Image className='contactimage' src={contactImage}/>
</div> */}
    </>
  );
}

export default page;
