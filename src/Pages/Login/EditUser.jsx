import React from "react";
import uzb from "../../assets/Login/uzb.svg";
import icon from "../../assets/logoLogin.svg";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loadState, saveState } from "../../Utils/storage";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  const submit = async (data) => {
    try {
      const response = await axios.put("/user", data);
      console.log(response);
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
      <img src={icon} alt="" />
      <h2 style={{ color: "#016096" }} className="text-base font-bold">
        bilan boshladik
      </h2>
      <p style={{ color: "#9098B1" }} className="text-xs font-normal mt-3">
        Yangi hisob ochish
      </p>
      <form className="top-1/2  mt-6" onSubmit={handleSubmit(submit)}>
        <div className="flex gap-3">
          <div className="relative">
            <i className="fa-regular fa-user absolute top-1/2 -translate-y-1/2 left-3 fa-lg"></i>
            <input
              {...register("fullName", {
                required: true,
              })}
              className="font-bold text-base focus:border-sky-700 focus:shadow-md pl-10"
              type="text"
              style={{
                width: "343px",
                height: "48px",
                outline: "none",
                border: "1px solid #adb1c1",
                color: "#5a627f",
                borderRadius: "5px",
              }}
            />
          </div>
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

export default EditUser;
