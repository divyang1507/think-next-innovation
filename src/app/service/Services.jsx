import React from "react";

const Services = ({ data }) => {
  return (
    <>
    {
        data.map((e,id)=>{
            return <div key={id} >
            <div key={id} className="p-6">
        <h1 className="text-4xl font-bold mb-6">{e.title}</h1>
        <h2 className="text-2xl font-semibold pb-4">{e.subTitle}</h2>
        <p className="mb-8">{e.content}</p>
        <div className="grid grid-cols-2 gap-8">
          {e.details.map((e, id) => {
            return (
              <div key={id}>
              <div className="p-4 bg-darkblue text-white rounded-xl">
                  <h3 className="text-xl font-semibold pb-4  ">
                    {e.dTitle}
                  </h3>
                  <p className="mb-6">{e.dContent}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-2xl font-semibold pb-4 pt-8 text-primary  ">{e.processTitle}</h2>

        <div className="grid-cols-2 grid gap-8">
          {e.process.map((e, id) => {
            return (
              <div key={id}>
                <h3 className="text-xl font-semibold pb-4  ">{e.label}</h3>
                <p className="mb-6">{e.process}</p>
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
