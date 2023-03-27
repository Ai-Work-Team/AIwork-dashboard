import React from "react";
import { Link, NavLink } from "react-router-dom";

//Icon
import chart from "../../assets/iconSidebar/chart.svg";
import order from "../../assets/iconSidebar/addOrder.svg";
import price from "../../assets/iconSidebar/price.svg";
import salary from "../../assets/iconSidebar/salary.svg";
import manual from "../../assets/iconSidebar/manual.svg";
import setting from "../../assets/iconSidebar/setting.svg";

const Sidebar = () => {
  return (
    <div className="bg-white h-screen p-20">
      <div className="flex flex-col gap-5">
          <NavLink
            to={"/analizlar"}
            className={(isActive) =>
                isActive
                ? "text-base text-white font-medium flex items-center gap-4 px-1 bg-blue-700"
                : "text-base text-zinc-500 font-medium flex items-center gap-4"
            }
          >
            <img src={chart} className="fill-white" alt="" />
            Analizlar
          </NavLink>
          <NavLink
            className="text-base text-zinc-500 font-medium flex items-center gap-4"
            to={"/analizlar"}
          >
          <img src={order} alt="" />
            Buyurtma qo'shish
          </NavLink>
          <NavLink
            className="text-base text-zinc-500 font-medium flex items-center gap-4"
            to={"/analizlar"}
          >
          <img src={price} alt="" />
            Narxlar
          </NavLink>
          <NavLink
            className="text-base text-zinc-500 font-medium flex items-center gap-4"
            to={"/analizlar"}
          >
          <img src={salary} alt="" />
            Oylik maosh
          </NavLink>
          <NavLink
            className="text-base text-zinc-500 font-medium flex items-center gap-4"
            to={"/analizlar"}
          >
          <img src={manual} alt="" />
            Qo'llanmalar
          </NavLink>
          <NavLink
            className="text-base text-zinc-500 font-medium flex items-center gap-4"
            to={"/analizlar"}
          >
          <img src={setting} alt="" />
            Sozlamalar
          </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
