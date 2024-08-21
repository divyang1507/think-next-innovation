import Link from "next/link";
import React from "react";
import './footer.css'

export const Footer = () => {
  const Links = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/service", link: "Service" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <>
      <section className="footer">
        <div className="footertop">
          <Link href={"/"} className="logo">
            Think Next Innvoation
          </Link>

          <div className="navMenu">
            {Links.map((e, id) => {
              return (
                <Link
                  key={id}
   
                  href={e.path}
                  className="navLink">
                  {e.link}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="footerbottom">
          Think Next Innovation © 2024 ProGrowth TNI. All Rights Reserved.
        </div>
      </section>
    </>
  );
};
