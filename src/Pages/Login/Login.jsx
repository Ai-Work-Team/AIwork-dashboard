import React from "react";
import uzb from "../../assets/Login/uzb.svg";
import icon from "../../assets/logoLogin.svg";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loadState, saveState } from "../../Utils/storage";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  const phoneNumber = loadState("phoneNumber");
  const submit = async (data) => {
    const dataPhone = { ...data, phoneNumber: "+998" + data.phoneNumber };
    if (phoneNumber) localStorage.removeItem("phoneNumber");
    try {
      const response = await axios.post("/auth/checkPhoneNumber", dataPhone);
      saveState("phoneNumber", dataPhone);
      navigate("/phoneSms");
    } catch (error) {}
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
      <img src={icon} alt="" />
      <h2 style={{ color: "#016096" }} className="text-base font-bold">
        Romchiuzga xush kelibsiz
      </h2>
      <p style={{ color: "#9098B1" }} className="text-xs font-normal mt-3">
        Ro'yxatdan o'tish
      </p>
      <form className="top-1/2  mt-6" onSubmit={handleSubmit(submit)}>
        <div className="flex gap-3">
          <div className="relative flex items-center">
            <img src={uzb} alt="" className="absolute left-4 top-4" />
            <span
              style={{
                border: "1px solid #EBF0FF",
                width: "109px",
                height: "48px",
                color: "#5C6379",
                borderRadius: "5px",
              }}
              className="pl-12 font-bold text-base flex items-center"
            >
              +998
            </span>
          </div>
          <input
            {...register("phoneNumber", {
              required: true,
              maxLength: 9,
              minLength: 9,
              pattern: /[0-9]/,
            })}
            pattern="/^[0-9]*$/"
            minLength={9}
            maxLength={9}
            className="font-bold text-base focus:border-sky-700 focus:shadow-md pl-2"
            type="number"
            style={{
              width: "191px",
              outline: "none",
              border: "1px solid #EBF0FF",
              color: "#5C6379",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="mt-12">
          <Button type="submit" className="w-full mt-4" variant="contained">
            Keyingisi
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
