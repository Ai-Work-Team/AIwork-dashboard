import React from "react";
import { Link, NavLink } from "react-router-dom";

//Icon
import chart from "../../assets/iconSidebar/chart.svg";
import order from "../../assets/iconSidebar/addOrder.svg";
import price from "../../assets/iconSidebar/price.svg";
import salary from "../../assets/iconSidebar/salary.svg";
import manual from "../../assets/iconSidebar/manual.svg";
import setting from "../../assets/iconSidebar/setting.svg";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


// const data = [
//   {id:nanoid(), imgLink: chart, title: "Analizlar", url: "/" },
//   {id:nanoid(), imgLink: order, title: "Buyurtma qo'shish", url: "/order" },
//   {id:nanoid(), imgLink: price, title: "Narxlar", url: "/price" },
//   {id:nanoid(), imgLink: salary, title: "salary", url: "/salary" },
//   {id:nanoid(), imgLink: manual, title: "Qo'llanmalar", url: "/manual" },
//   {id:nanoid(), imgLink: setting, title: "Sozlamalar", url: "/setting" },
// ];
const Sidebar = () => {
  const { mode } = useSelector((state) => state.timeMode);

  return (
    <div
      style={{ height: "89vh" , background: mode ? "white" : "linear-gradient(172.09deg, #000000 3.78%, #150052 97.08%)" }}
      className={` w-1/6 p-5 sticky left-0 top-20  z-20`}
    >
      <div className="flex flex-col gap-5">
        {/* {data.map((item) => {
          <NavLink
            key={item.id}
            to={item.url}
            className={({ isActive }) =>
              isActive
                ? "text-base text-white font-medium flex items-center gap-4 bg-blue-600 px-3 py-2 rounded-md"
                : "text-base text-zinc-500 font-medium flex items-center gap-4 px-3 py-2 rounded-md"
            }
          >
            <img src={item.imgLink} className="" style={{ fill: "#fff" }} alt="" />
            {item.title}
          </NavLink>;
        })} */}
        <NavLink
          className={({isActive}) =>
            isActive
              ? `text-base text-white font-medium flex items-center gap-4 bg-blue-600 px-3 py-2 rounded-md`
              : `text-base ${mode ? "text-zinc-500" : "text-white"} font-medium flex items-center gap-4 px-3 py-2 rounded-md`
          }
          to={"/"}
        >
          <img src={chart} alt="" />
          Analizlar
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-base text-white font-medium flex items-center gap-4 bg-blue-600 px-3 py-2 rounded-md"
              : `text-base ${mode ? "text-zinc-500" : "text-white"} font-medium flex items-center gap-4 px-3 py-2 rounded-md`
          }
          to={"/order"}
        >
          <img src={order} alt="" />
          Buyurtma qo'shish
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-base text-white font-medium flex items-center gap-4 bg-blue-600 px-3 py-2 rounded-md"
              : `text-base ${mode ? "text-zinc-500" : "text-white"} font-medium flex items-center gap-4 px-3 py-2 rounded-md`
          }
          to={"/price"}
        >
          <img src={price} alt="" />
          Narxlar
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-base text-white font-medium flex items-center gap-4 bg-blue-600 px-3 py-2 rounded-md"
              : `text-base ${mode ? "text-zinc-500" : "text-white"} font-medium flex items-center gap-4 px-3 py-2 rounded-md`
          }
          to={"/salary"}
        >
          <img src={salary} alt="" />
          Oylik maosh
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-base text-white font-medium flex items-center gap-4 bg-blue-600 px-3 py-2 rounded-md"
              : `text-base ${mode ? "text-zinc-500" : "text-white"} font-medium flex items-center gap-4 px-3 py-2 rounded-md`
          }
          to={"/manual"}
        >
          <img src={manual} alt="" />
          Qo'llanmalar
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-base text-white font-medium flex items-center gap-4 bg-blue-600 px-3 py-2 rounded-md"
              : `text-base ${mode ? "text-zinc-500" : "text-white"} font-medium flex items-center gap-4 px-3 py-2 rounded-md`
          }
          to={"/setting"}
        >
          <img src={setting} alt="" />
          Sozlamalar
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
