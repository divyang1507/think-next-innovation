import Link from "next/link";
import React from "react";
// import './serviceBox.css'

const ServiceBox = ({ Icon, title, p1, p2, p3 }) => {
  return (
    <>
      <Link href={"/service"} className="h-full">
        <div className="box group border flex bg-slate-100 flex-col justify-between h-full hover:bg-darkblue border-slate-900 py-12 hover:shadow-xl rounded-3xl px-8">
          <div>
            <div className="icon text-5xl p-4 group-hover:bg-slate-800 border-primary border-2 w-fit rounded-full text-primary">
              <Icon />
            </div>
            <h4 className="pt-4 pb-2 text-2xl group-hover:text-white font-semibold">{title}</h4>
            <p className="pt-4 text-lg text-slate-900 group-hover:text-slate-200">{p1}</p>
            <p className="pt-4 text-lg text-slate-900 group-hover:text-slate-200">{p2}</p>
            <p className="pt-4 text-lg text-slate-900 group-hover:text-slate-200">{p3}</p>
          </div>
          <div>
            <div className="mt-8 w-fit text-lg group-hover:bg-slate-800 font-bold p-4 rounded-xl border-primary border-2 text-primary">
              Learn More
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServiceBox;
