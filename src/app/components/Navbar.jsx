'use client'
import Link from "next/link";
import React, { useState } from "react";
import "./navbar.css";
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
      <nav className="nav">
        <Link href={"/"} className="logo">
          Think Next Innvoation
        </Link>

        <button className="menubtn" onClick={toggleMeun}>
          <FaBars />
        </button>

        <div className={`${!open ? "navMenu" : "navMenuOpen"}`}>
          {Links.map((e, id) => {
            return (
              <Link key={id} onClick={toggleMeun} href={e.path} className="navLink">
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
