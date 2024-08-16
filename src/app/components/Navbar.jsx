import Link from "next/link";
import React from "react";
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link href={'#'} className="logo">Think Next Innvoation</Link>
        <div className="navMenu">
          <Link href={'#'} className="navLinks">Home</Link>
          <Link href={'#'} className="navLinks">About</Link>
          <Link href={'#'} className="navLinks">Service</Link>
          <Link href={'#'} className="navLinks">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
