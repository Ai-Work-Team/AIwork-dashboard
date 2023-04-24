import React from "react";
import { Checkbox, InputAdornment, TextField, Button, Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const kasblar = [
  "Buyurtma oluvchi",
  "Yeg'uvchi",
  "O'rnatib beruvchi",
  "Haydovchi",
  "Oyna kesuvchi",
];

const ModalAddUser = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let setChecked = []

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const submit = (data) => {
    reset();
    let dataItem = { ...data, phone: "+998" + data.phone, kasbi: setChecked };
    console.log(dataItem);
    setOpen(false);
  };

  const handleCheck = (valueCheckBox) => {
    const value = valueCheckBox.target.name
    setChecked.includes(value) ? setChecked = setChecked.filter(item => item !== value) : setChecked.push(value)
    console.log(setChecked);

  };
  const { mode } = useSelector((state) => state.timeMode);
  return (
    <>
    <Button
          onClick={handleOpen}
          variant="contained"
          sx={{ width: "243px" }}
        >
          <i className="fa-solid fa-plus"></i>Qoshish
        </Button>
    <Modal keepMounted open={open} onClose={handleClose}>

    <form
      onSubmit={handleSubmit(submit)}
      className=" mx-auto mt-32 flex p-5 rounded-xl flex-col gap-4 text-start w-1/3 bg-white"
    >
      <TextField
        {...register("name", { required: true })}
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
        {...register("phone", { required: true })}
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
      <div className="px-5 pr-10 py-3 rounded-lg bg-slate-100 flex gap-2 flex-col ">
        {kasblar.map((kasb) => {
          return (
            <div key={kasb} className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox
                  {...register("kasblari")}
                  name={kasb}
                  onChange={handleCheck}
                  color={mode ? "primary" : "success"}
                  sx={{ color: mode ? "auto" : "white" }}
                />
                <p
                  className={`font-bold text-base ${
                    mode ? "text-gray-900" : "text-white"
                  }`}
                >
                  {kasb}
                </p>
              </div>
              <TextField
                {...register("daraja")}
                className="text-white"
                id="standard-start-adornment"
                // disabled={}
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
