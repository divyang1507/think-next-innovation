'use client'
import Link from "next/link";
import React, { useState } from "react";

import { FaBars } from "react-icons/fa6";

const Links = [
  { path: "/", link: "Home" },
  { path: "/about", link: "About" },
  { path: "/service", link: "Service" },
  { path: "/contact", link: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false)
const toggleMeun= ()=>{
  setOpen(!open)
}

  return (
    <>
      <nav className="nav fixed  top-0 flex justify-between items-center w-full py-6 px-8 z-50 bg-darkblue text-white">
        <Link href={"/"} className="logo text-3xl z-50">
          Think Next Innvoation
        </Link>

        <button className="menubtn sm:flex z-50 text-xl rounded-xl md:hidden" onClick={toggleMeun}>
          <FaBars />
        </button>

        <div className={` ${open ? "flex " : "hidden"} gap-16 justify-center left-0 items-center flex-col absolute top-0 h-screen w-screen bg-darkblue md:hidden`}>
          {Links.map((e, id) => {
            return (
              <Link key={id} onClick={toggleMeun} href={e.path} className="navLink hover:text-primary">
                {e.link}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex md:flex-row md:justify-center md:items-center gap-16">
          {Links.map((e, id) => {
            return (
              <Link key={id} onClick={toggleMeun} href={e.path} className="navLink hover:text-primary">
                {e.link}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
