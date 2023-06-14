import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import windowImg from "./window.png";
import moneyIcon from "./money.svg";
import { useParams } from "react-router-dom";
import { useAxios } from "../../../../Hooks/useAxios";
import { useForm } from "react-hook-form";
import axios from "axios";
import WorkerList from "./components/workerList";

const Indetail = () => {
  const { orderId } = useParams();
  const id = orderId.slice(1);
  const { data } = useAxios({
    url: `/order/getOrderById/${id}`,
    method: "get",
  });
  const { data: res } = useAxios({ url: `/product-head/${id}`, method: "get" });

  const { data: paymentData } = useAxios({
    url: `/payment/byOrder/${id}`,
    method: "get",
  });



  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  async function submit(data) {
    try {
      const resData = await axios.post("/payment", data);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
    reset();
  }





  return (
    <div className="mt-5 ml-8 flex justify-between gap-10">
      <div style={{ width: 415 }} className="bg-white rounded-xl py-7 px-6">
        <div className="flex items-center gap-5">
          <Avatar />
          <h2 className="font-bold text-xl text-sky-800">Jahongir Oripov</h2>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-calendar-days text-gray-400"></i>
            <p className="text-sm font-bold text-gray-400">05.02.2023</p>
          </div>
          <p className="text-sky-800 text-base font-bold">+998 90 123 45 67</p>
        </div>
        <hr className="border mt-5" />

        {res?.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex flex-col justify-center items-center mt-8">
                <strong>{item.count}X</strong>
                <img
                  src={`http://185.217.131.88:8080/attachment/open/${item.imageId}`}
                  alt=""
                />
              </div>
              <div className="mt-9 flex flex-col">
                <strong className="font-bold text-base text-zinc-600">
                  Balandligi:______________ {item.width}mm
                </strong>
                <strong className="font-bold text-base text-zinc-600">
                  Eni:______________________ {item.height}mm
                </strong>
                <strong className="font-bold text-base text-zinc-600">
                  Rangi:___________________{" "}
                  {item.colorNumber === 0
                    ? "Oq"
                    : item.colorNumber === 1
                    ? "Zalatoy Dub"
                    : item.colorNumber === 2
                    ? "Dub Mokko"
                    : "Mokry"}
                </strong>
                <strong className="font-bold text-base text-zinc-600">
                  Tokcha:__________________ {item.shelfSize}
                </strong>
                <strong className="font-bold text-base text-zinc-600">
                  Oynasi:__________________{" "}
                  {item.glassNumber === 1 ? "Oq shafof" : "Yod Shafof"}
                </strong>
                <hr className="my-8" />
                <strong className="font-bold text-base text-zinc-600">
                  Boshlang'ich narx:_____{" "}
                  {Math.floor(item.totalPrice).toLocaleString()} so'm
                </strong>
                <strong className="font-bold text-base text-zinc-600">
                  Kelishilgan narx:_______{" "}
                  {Math.floor(item.lastTotalPrice).toLocaleString()} so'm
                </strong>
                <strong className="font-bold text-base text-zinc-600">
                  Chegirma narx:_________{" "}
                  {Math.floor(item.discount).toLocaleString()} so'm
                </strong>
              </div>
            </div>
          );
        })}
      </div>

      <WorkerList/>
      
      <div style={{ width: 315 }} className="bg-white rounded-xl py-3 px-6">
        <p
          style={{ color: "#909CA7" }}
          className="text-center font-bold text-base"
        >
          To'lovlar
        </p>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex items-center gap-3 mt-7"
        >
          <input
            {...register("amount")}
            style={{
              width: 149,
              height: 30,
              border: "1px solid #0077FF",
              borderRadius: 5,
              outlineColor: "#1969c4",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              borderRadius: "5px",
              height: 30,
              background: "#0077FF",
              ":hover": { background: "#0673f0" },
            }}
          >
            <i className="fa-regular fa-plus"></i>Qo'shish
          </Button>
        </form>
        <hr className="mt-4" />

        {paymentData?.map((item) => {
          return (
            <div key={item.order.id} className="mt-5">
              <div className="flex items-center gap-5">
                <Avatar sx={{ width: 28, height: 28 }} />
                <h2 className="font-bold text-xl text-sky-800">
                  {item.user.fullName}
                </h2>
              </div>
              <div className="flex gap-5 items-center mt-4 ml-2">
                <i className="fa-solid fa-calendar-days text-gray-400"></i>
                <p className="text-sm font-bold text-gray-400">
                  {item.createAt?.slice(0, 10)}
                </p>
              </div>
              <div className="flex items-center gap-5 ml-2 mt-4">
                <img src={moneyIcon} alt="" />
                <p className="text-sky-800 text-base font-bold">
                  {Math.floor(item.amount).toLocaleString()} so'm
                </p>
              </div>
              <hr className="border mt-3" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Indetail;
