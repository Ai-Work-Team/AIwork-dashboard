import React from "react";
import logo from "../../assets/logo.svg";
import icon from "../../assets/icon-header.svg";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MaterialUISwitch from "./Components/DarkMode";
import { timeMode } from "../../store/timeMode";


const Header = () => {
  // const [change, setChange] = React.useState(true);
  const dispatch = useDispatch()
  // React.useEffect(() => {
  //   dispatch(timeMode())
  // }, [change]);
  const {mode} = useSelector((state) => state.timeMode)
  // console.log(mode);
  
  return (
    <header className={`px-8 items-center py-5 ${mode ? "bg-white" : "bg-black"} sticky top-0 w-full z-10`}>
      <div className="container mx-auto flex justify-between px-12">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-4">
          <div className="flex gap-3 items-center">
            <img src={icon} alt=""/>
            <Avatar src="" />
            {/* <select name="" id=""></select> */}
          </div>
          <div>
             {/* <MaterialUISwitch onClick={() =>dispatch(timeMode())}/> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
