import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loadState } from "../../Utils/storage";

const Success = () => {
  const phoneNumber = loadState("phoneNumber")
  const navigate = useNavigate()
  function handlerSubmit(){
    if(phoneNumber) localStorage.removeItem("phoneNumber")
    navigate('/')
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
   <i className="fa-solid fa-circle-check fa-2xl" style={{color: "#00DF4C", boxShadow: "0px 2px 22px #00DF4C"}}></i>
      <h2 style={{ color: "#016096" }} className="text-2xl font-bold">
        Muvaffaqiyatli o'tdingiz
      </h2>
      <p style={{ color: "#9098B1" }} className="text-xs font-normal mt-3">
        Aiwork jamoasi oilangizga baxt tilaydi.
      </p>

      <div className="mt-12">
          <Button onClick={handlerSubmit} type="submit" className="w-full mt-4" variant="contained">
            Keyingisi
          </Button>
      </div>
    </div>
  );
};

export default Success;
