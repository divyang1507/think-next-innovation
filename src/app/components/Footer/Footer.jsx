import Link from "next/link";
import React from "react";
// import './footer.css'

export const Footer = () => {
  const Links = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/service", link: "Service" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <>
      <section className="footer bg-darkblue text-white md:py-0 px-4 lg:px-[120px] mt-12">
        <div className="footertop py-8 flex flex-col w-full lg:flex-row gap-8 items-center justify-center lg:justify-between ">
          <Link href={"/"} className="logo text-2xl">
            Think Next Innvoation
          </Link>

          <div className="navMenu flex flex-col items-end justify-center lg:flex-row gap-8">
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
        <div className="footerbottom text-center py-4 text-slate-200">
          Think Next Innovation © 2024 ProGrowth TNI. All Rights Reserved.
        </div>
      </section>
    </>
  );
};
