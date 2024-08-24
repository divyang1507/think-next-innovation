import React from "react";
// import "./contactPage.css";
import Image from "next/image";
import contactImage from "../../../public/Contact2.jpg";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoLocationSharp } from "react-icons/io5";

export const metadata = {
  title: "Contact | Think Next Innovation",
  description: " Contact Page | Designed & Developed by Progrowth and Think Next Innovation | Brand, Design & Development Agency",
};


function page() {
  return (
    <>
      <section className="contactPage mt-28 md:py-0 px-4 lg:px-[120px] ">
        <div className="CpageHeading text-center mb-16 text-6xl font-bold">Let’s work together</div>

        <div className="contactContainer flex md:flex-row flex-col justify-between gap-5">
          <div className="contact-1 flex-1">
            <div className="flex mt-4 items-center break-all text-wrap">
              <IoMdMail className="contactIcon text-4xl text-primary bg-darkblue p-2 m-4 rounded-lg" />{" "}
              <p className="text-2xl break-all text-wrap">info@thinknextinnovation.com</p>
            </div>
            <div className="flex items-center">
              <IoCall className="contactIcon text-4xl text-primary bg-darkblue p-2 m-4 rounded-lg" />{" "}
              <p className="text-2xl">+91 999 999 999</p>
            </div>
            <div className="flex items-center">
              <IoLocationSharp className="contactIcon text-4xl text-primary bg-darkblue p-2 m-4 rounded-lg" />{" "}
              <p className="text-2xl"> Ahmedabad, Gujarat, India</p>
            </div>
          </div>
          <div className="contact-2 flex-1 bg-darkblue p-8 rounded-xl">
            <div className="contact2Tag text-white text-4xl ">
              Let’s talk your project
            </div>
            <form className="flex flex-col gap-4 mt-8 ">
              <div className="inputbox">
                <input
                  type="text"
                  className="p-2 text-lg w-full text-white bg-transparent rounded-lg border-gray-50 border"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="inputbox">
                <input
                  type="email"
                  className="p-2 text-lg w-full text-white bg-transparent rounded-lg border-gray-50 border"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="inputbox">
                <textarea
                  type="text"
                  className="p-2 text-lg w-full text-white bg-transparent rounded-lg h-48 border-gray-50 border"
                  placeholder="Your Message..."
                  required></textarea>
              </div>
              <button className="btn contactButton py-4 px-8 bg-primary hover:bg-neutral text-darkblue rounded-xl hover:text-white">
                {" "}
                Contact us
              </button>
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
