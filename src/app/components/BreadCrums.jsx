import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const BreadCrums = ({ breadcrums }) => {
  return (
    <>
      <div className="flex text-xl items-center justify-center gap-4 ">
        <Link href="/">
          <div className="icon flex items-center justify-center gap-2 hover:text-slate-400 text-slate-800">
            <FaHome /> <p>Home</p>
          </div>
        </Link>
        <div className="icon flex items-center justify-center gap-4 text-slate-700">
          <IoIosArrowForward />
        </div>
        <div className="icon flex items-center justify-center gap-4 text-slate-700">
          <p>{breadcrums}</p>
        </div>
      </div>
    </>
  );
};
