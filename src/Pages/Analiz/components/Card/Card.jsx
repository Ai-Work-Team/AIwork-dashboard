import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const Card = ({ data, title, color, mode }) => {
  const dataChartItem = data.find((item) => item.title === title);
  const dataChart = data.map((item) => ({
    ...item,
    color: item.title === title ? color : item.color,
    value: isNaN(item.value) ? 0 : item.value,
    price: isNaN(item.price) ? 0 : item.price,
  }));
  return (
    <div
      style={{ background: mode ? "white" : "#111827" }}
      className={`p-4 flex w-96 h-40 rounded-xl mt-1 justify-between`}
    >
      <div className="relative">
        <strong
          style={{ color: color }}
          className={`absolute font-extrabold text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          {dataChartItem.value?.toFixed()}%
        </strong>
        <PieChart
          className="w-32"
          data={dataChart}
          lineWidth={40}
          paddingAngle={5}
          startAngle={-100}
          animate={true}
          labelPosition={50}
          labelStyle={{
            fontSize: "8px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "#fd000d",
            fill: "#cf2222",
          }}
        />
      </div>
      <div className="flex flex-col justify-between items-center">
        <h2
          className={`capitalize ${
            mode ? "text-zinc-400" : "text-white"
          } text-xl font-bold`}
        >
          {dataChartItem.title}
        </h2>
        <u
          style={{ color: `${color}` }}
          className="text-zinc-800 no-underline font-extrabold text-2xl"
        >
          {Math.floor(dataChartItem.price).toLocaleString()}{" "}
          <span className={`${mode ? "text-zinc-400" : "text-white"} text-lg`}>
            so'm
          </span>
        </u>
      </div>
    </div>
  );
};

export default Card;
