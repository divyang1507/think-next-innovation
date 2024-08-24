import React from "react";
// import "./aboutpage.css";
import Image from "next/image";
import AboutPage from "../../../public/aboutimage.jpg";
import AboutPage2 from "../../../public/aboutimage2.jpg";
import { Marquee } from "../components/Marquee";

export const metadata = {
  title: "About | Think Next Innovation",
  description:
    " About Page | Designed & Developed by Progrowth and Think Next Innovation | Brand, Design & Development Agency",
};

const page = () => {
  return (
    <>
      <section className="aboutpage mt-36 md:py-0 ">
        <div className="pageHeading text-center mb-8 lg:mb-16 lg:text-6xl text-4xl font-bold px-4 lg:px-[120px] ">
          About Think Next Innovation
        </div>

        <div className="pageContianer flex flex-col lg:flex-row justify-center gap-8 px-4 lg:px-[120px]  ">
          <div className="">
            <Image src={AboutPage} alt="aboutpageimage " />
          </div>

          <div>
            <div className="pagesubHeading text-3xl lg:text-5xl mb-4 lg:mb-8 font-bold">
              Your Partner in Digital Transformation
            </div>
            <p className="pagePara text-lg leading-8 pt-4 text-justify">
              Think Next Innovation was founded on the belief that technology
              has the power to transform businesses, drive growth, and create
              new opportunities. In a world that is increasingly digital, we are
              dedicated to helping our clients navigate the complexities of the
              IT landscape and achieve their business goals. Our team of IT
              experts brings together a wealth of experience and a passion for
              innovation, ensuring that every project we undertake is executed
              with precision, creativity, and a deep understanding of our
              clients’ needs.
            </p>
          </div>
        </div>
        <Marquee />
        <div className="boxContainer flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-4 px-4 lg:px-[120px] ">
          <div className="pageBox">
            <div className="subHeading text-3xl  font-bold text-primary lg:mt-12 mt-8">
              Our Mission
            </div>
            <p className="pagePara leading-8 pt-4 text-lg text-justify">
              To deliver innovative, scalable IT solutions that drive business
              success and help our clients navigate the complexities of the
              digital world. We are committed to providing exceptional service,
              building long-term partnerships, and helping our clients achieve
              their goals.
            </p>
          </div>
          <div className="pageBox">
            <div className="subHeading text-3xl font-bold text-primary lg:mt-12 mt-8">
              Our Vision
            </div>
            <p className="pagePara leading-8 pt-4 text-lg text-justify">
              To be a global leader in IT services, recognized for our
              commitment to quality, innovation, and client satisfaction. We
              strive to be the partner of choice for businesses looking to
              harness the power of technology to drive their success.
            </p>
          </div>
        </div>
        <div className="valueContainer lg:mt-12 mt-8 px-4 lg:px-[120px] ">
          <div className="subHeading text-3xl font-bold text-primary ">
            Our Values
          </div>

          <div className="valueContainer flex flex-col-reverse lg:flex-row gap-8 mt-2 ">
            <div className="">
              <p className="pagePara leading-8 text-lg text-justify">
                Innovation: We are constantly exploring new technologies and
                methodologies to deliver solutions that are at the cutting edge
                of the industry. Innovation is at the core of everything we do,
                ensuring that our clients stay ahead of the competition.
                Integrity: We believe in transparency, honesty, and building
                long-term relationships based on trust. Our clients can count on
                us to deliver on our promises and to act in their best interests
                at all times. <br />
                Client Success: Our clients' success is our top priority. We
                work tirelessly to ensure that our solutions meet your needs and
                exceed your expectations. Your success is our success, and we
                are committed to helping you achieve your business goals. Our
                Story Think Next Innovation was founded by a team of IT
                professionals who saw a need for more personalized,
                client-focused IT services. With backgrounds in web development,
                software engineering, mobile app development, and digital
                marketing, our founders brought together their expertise to
                create a company that is dedicated to helping businesses thrive
                in the digital age. Over the years, we have grown our team and
                expanded our services, but our commitment to our clients has
                remained the same. We are proud to have helped businesses of all
                sizes and industries achieve their goals through innovative IT
                solutions, and we look forward to continuing to build on this
                success. Join Us on Our Journey to Innovation At Think Next
                Innovation, we don’t just provide IT services – we build
                partnerships that drive success. We invite you to join us on our
                journey to create the future of digital innovation. Let’s work
                together to turn your vision into reality.
              </p>
            </div>
            <div className="max-w-[350px] object-cover">
              <Image
                src={AboutPage2}
                alt="aboutpageimage "
                className="max-w-[350px] "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
