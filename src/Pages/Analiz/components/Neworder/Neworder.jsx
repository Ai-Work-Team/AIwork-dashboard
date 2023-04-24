import React from "react";

const Neworder = ({mode}) => {
  return (
    <div
      style={{ width: "38%", height: "60vh" }}
      className={`overflow-y-auto rounded-xl pt-4 p-6 ${mode ? "bg-white" : "bg-gray-900"}`}
    >
      <div className={`text-center mb-8 ${mode ? "text-blue-500" : "text-white"}`}>
        <strong className={`text-6xl  font-extrabold flex items-end justify-center gap-2`}>
          5 <p className="text-4xl">ta</p>
        </strong>
        <p className="t ext-blue-500 mt-2 text-2xl font-extrabold">
          Yangi buyurtma
        </p>
      </div>

      <div
        style={{
          // background: "rgba(149, 210, 255, 0.33)",
          boxShadow: "#a8e0ff93",
        }}
        className={`rounded-xl mb-5 px-8 pb-5 mt-4 hover:drop-shadow-2xl ${mode ? "bg-sky-200 text-blue-700" : "bg-blue-500 text-white"} shadow-slate-600`}
      >
        <p className=" text-base font-extrabold text-center">N:67</p>
        <div className={`${mode ? "text-blue-900" : "text-white"}`}>
          <p className="text-xl font-semibold ">
            Jahongir Angren
          </p>
        </div>
        <div className="text-gray-500 flex justify-between items-center">
          <p className={`text-xl ${mode ? "text-blue-900" : "text-white"} font-bold`}>11 210 000 sum</p>
          <div className={`${mode ? "text-neutral-500" : "text-gray-900"}`}>
            <p className=" text-xs font-semibold">
              {" "}
              Boshlangan: 02.11.2022
            </p>
            <p className=" text-xs font-semibold">
              {" "}
              Yopilgan: 29.11.2022
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Neworder;
