import React from "react";
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon-header.svg";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <header className=" px-24 items-center py-5 bg-white">
      <div className="container mx-auto flex justify-between">
        <img src={logo} alt="logo" />
        <div className="flex gap-3 items-center">
          <img src={icon} alt="" />
          <Avatar src="" />
          <select name="" id=""></select>
        </div>
      </div>
    </header>
  );
};

export default Header;
