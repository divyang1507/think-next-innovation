import React from "react";

const Services = ({ data }) => {
  return (
    <>
    {
        data.map((e,id)=>{
            return <div key={id} >
            <div key={id} className="">
        <h1 className="lg:text-4xl text-3xl font-bold lg:mb-6">{e.title}</h1>
        <h2 className="lg:text-2xl text-xl font-semibold pb-4">{e.subTitle}</h2>
        <p className="mb-8">{e.content}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {e.details.map((e, id) => {
            return (
              <div key={id}>
              <div className="p-4 h-full bg-darkblue text-white rounded-xl">
                  <h3 className="lg:text-xl text-lg font-semibold pb-4  ">
                    {e.dTitle}
                  </h3>
                  <p className=" text-base">{e.dContent}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-4xl font-semibold pb-4 pt-8 text-primary  ">{e.processTitle}</h2>

        <div className="lg:grid-cols-2 grid-cols-1 mb-10 grid lg:gap-8 gap-4">
          {e.process.map((e, id) => {
            return (
              <div key={id} className="p-4 border-neutral border rounded-xl">
                <h3 className="text-xl font-semibold pb-4">{e.label}</h3>
                <p className="text-neutral">{e.process}</p>
              </div>
            );
          })}
        </div>
      </div>
            </div>
        })
    }
    </>
  );
};

export default Services;
