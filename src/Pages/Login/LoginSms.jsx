import React from "react";
import icon from "../../assets/logoLogin.svg";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { loadState, saveState } from "../../Utils/storage";
import axios from "axios";
import { toast } from "react-toastify";

const LoginSms = () => {
  const navigate = useNavigate();

  const [smsNumber, setSmsNumber] = React.useState("");
  const handleChange = (val) => setSmsNumber(val);

  const userData = loadState("phoneNumber");
  const data = useSelector((state) => state.loginUser);
  const submit = async (e) => {
    e.preventDefault();
    try {
      console.log({ phoneNumber: userData.phoneNumber, smsCode: smsNumber });
      const response = await axios.post("/auth/login", {
        phoneNumber: userData.phoneNumber,
        smsCode: smsNumber,
      });
      await saveState("token", response.data.token);
      console.log(response);
      if (response.status === 200) {
        await navigate("/success");
      toast("Siz muvaffaqiyatli ro'yxatdan o'ttingiz", { type: "success" });
      } else if (response.status === 201) {
      toast("Siz oldin ro'yxatdan o'tmagansiz", { type: "info" });
        await navigate("/editUser");
      }
    } catch (error) {
      toast("SMS kodni xato kiritingiz", { type: "error" });
      setSmsNumber("")
      console.log(error);
    }
  };

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-4">
      <img src={icon} alt="" />
      <h2 style={{ color: "#016096" }} className="text-base font-bold">
        SMS orqali kelgan kodni kiriting.
      </h2>
      <p style={{ color: "#9098B1" }} className="text-xs font-normal mt-3">
        Ro'yxatdan o'tish
      </p>
      <form className="top-1/2  mt-6" onSubmit={submit}>
        <div className="flex justify-center">
          <OtpInput
            numInputs={5}
            onChange={handleChange}
            value={smsNumber}
            renderInput={(inputProps, i) => (
              <input
                {...inputProps}
                className="font-bold text-base focus:border-sky-700 focus:shadow-md text-center ml-1"
                type="number"
                style={{
                  width: "25px",
                  outline: "none",
                  border: "1px solid #cbd1e1",
                  color: "#5C6379",
                  borderRadius: "5px",
                }}
              />
            )}
          />
          {/* <input
          {...register("phoneNumber", {required:true, maxLength:9, minLength:9,pattern: /[0-9]/,})}
            pattern="/^[0-9]*$/"
            minLength={9}
            maxLength={9}
            className="font-bold text-base focus:border-sky-700 focus:shadow-md"
            type="number"
            style={{
              width: "191px",
              outline: "none",
              border: "1px solid #EBF0FF",
              color: "#5C6379",
              borderRadius: "5px",
              
            }}
          /> */}
        </div>
        <div className="mt-12">
          <Button
            type="submit"
            className="w-full mt-4 font-medium text-sm"
            variant="contained"
          >
            Keyingisi
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginSms;
