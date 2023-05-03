import React from "react";
import {
  Checkbox,
  InputAdornment,
  TextField,
  Button,
  Modal,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import CheckBox from "./Checkbox";
import { useAxios } from "../../../Hooks/useAxios";
import axios from "axios";
import timeMode from "../../../store/timeMode";

const kasblar = [
  "Buyurtma oluvchi",
  "Yeg'uvchi",
  "O'rnatib beruvchi",
  "Haydovchi",
  "Oyna kesuvchi",
];
const workPercentage = [
  "ANGEL",
  "CONSTRUCTOR",
  "INSTALLER",
  "DRIVER",
  "GLASSER",
];

const ModalAddUser = ({setRenderData}) => {
  const dipatch = useDispatch()
  const [state, setState] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setState(true);
    setOpen(true);
    setRenderData(true)
  };

  let setChecked = [];

  function handlerCheckBox(){
    setState(false)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const submit = async (data) => {
    setRenderData(state)

    const trimmedData = Object.keys(data).reduce((acc, key) => {
      acc[key] = typeof data[key] === "string" ? data[key].trim() : data[key];
      return acc;
    }, {});
    const obj = Object.entries(trimmedData.worksWithPercentage).filter(
      (item) => item[1] !== ""
    );
    let dataItem = {
      ...trimmedData,
      phoneNumber: "+998" + trimmedData.phoneNumber,
      worksWithPercentage: Object.fromEntries(obj),
    };
    setOpen(false);
    console.log(dataItem);
    reset();
    try {
      const response = await axios.post("/user", dataItem);
      // const {data} = useAxios({url: "/user", method: "post", body: data})
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleCheck = (valueCheckBox) => {
    const value = valueCheckBox.target.name;
    setChecked.includes(value)
      ? (setChecked = setChecked.filter((item) => item !== value))
      : setChecked.push(value);
  };
  const handleClose = () => {
    setOpen(false)
  };
  const { mode } = useSelector((state) => state.timeMode);
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ width: "243px", gap: "5px" }}
      >
        <i className="fa-solid fa-user-plus fa-lg"></i>Qoshish
      </Button>
      <Modal keepMounted open={open} onClose={handleClose}>
        <form
          onSubmit={handleSubmit(submit)}
          className=" mx-auto mt-32 flex p-5 rounded-xl flex-col gap-4 text-start w-1/3 bg-white"
        >
          <TextField
            {...register("fullName", { required: true })}
            id="outlined-basic"
            className=""
            sx={{
              background: !mode ? "#111219" : "white",
              color: mode ? "white" : "white",
              borderRadius: "4px",
            }}
            label="Ism Familya"
            size="small"
            variant="outlined"
          />
          <TextField
            {...register("phoneNumber", { required: true })}
            id="outlined-basic"
            sx={{
              background: !mode ? "#111219" : "white",
              color: mode ? "white" : "white",
              borderRadius: "4px",
            }}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+998</InputAdornment>
              ),
            }}
            label="Telefon raqam"
            size="small"
            variant="outlined"
          />
          <div className="px-5 pr-10 py-3 rounded-lg bg-slate-100 flex gap-2 flex-col">
            {kasblar.map((kasb, index) => {
              return (
                <div key={kasb} className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <CheckBox
                      workPercentage={workPercentage[index]}
                      handleCheck={handleCheck}
                      status={state}
                    />
                    {/* <Checkbox
                      // ref={checkboxRef}
                      checked={checked}
                      name={workPercentage[index]}
                      onChange={handleCheck}
                      color={"primary"}
                      sx={{ color: "auto" }}
                    /> */}
                    <p
                      className={`font-bold text-base ${
                        mode ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {kasb}
                    </p>
                  </div>
                  <TextField
                    {...(focus
                      ? {
                          ...register(
                            `worksWithPercentage.${workPercentage[index]}`,
                            {min: 1,
                              pattern: /[0-9]*/,}
                          ),
                        }
                      : null)}
                    className="text-white"
                    id="standard-start-adornment"
                    type="number"
                    InputProps={{
                      endAdornment: mode ? (
                        <InputAdornment position="end" sx={{ color: "white" }}>
                          %
                        </InputAdornment>
                      ) : (
                        ""
                      ),
                    }}
                    sx={{
                      width: "96px",
                      border: "solid white",
                      borderRadius: "5px",
                      input: { color: mode ? "auto" : "white" },
                    }}
                    size="small"
                  />
                </div>
              );
            })}
          </div>
          <div className="w-72">
            <Button
              onClick={() => handlerCheckBox(false)}
              size="large"
              sx={{ color: "" }}
              type="submit"
              variant="contained"
            >
              Saqlash
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalAddUser;
//kodda qanaqa xatolik bor
