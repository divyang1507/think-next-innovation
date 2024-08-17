import Link from "next/link";
import React from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa6";

const Links = [
  { path: "/", link: "Home" },
  { path: "/about", link: "About" },
  { path: "/service", link: "Service" },
  { path: "/contact", link: "Contact" },
];

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link href={"/"} className="logo">
          Think Next Innvoation
        </Link>

        <button className="menubtn">
          <FaBars />
        </button>

        <div className="navMenu">
          {Links.map((e, id) => {
            return (
              <Link key={id} href={e.path} className="navLink">
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
