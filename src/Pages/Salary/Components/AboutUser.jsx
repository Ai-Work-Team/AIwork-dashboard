import React from "react";
// import { Avatar, Button, TextField } from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Button,
  TextField,
  InputAdornment
} from "@mui/material";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ModalItem from "./ModalItem";

const AboutUser = () => {
  const { mode } = useSelector((state) => state.timeMode);

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  const submit = (data) => {  
    reset();
    let dataItem = { ...data, phone: "+998" + data.phone };
    console.log(dataItem);

    setOpen(false);
  };
  return (
    <div className={`flex  m-5 justify-between gap-12 `}>
      <div style={{ width: "599px" }} className={`${mode ? "bg-white" : "bg-gray-900"} rounded-lg p-4`}>
        <div>
          <div className="flex gap-5 items-center">
            <Avatar sx={{ width: 28, height: 28 }} />
            <h2 className={`font-bold text-xl ${mode ? "text-sky-800" : "text-blue-600"}`}>Jahongir Oripov</h2>
          </div>
          <div className="flex items-center gap-5 mt-4 ml-2">
            <i className="fa-solid fa-calendar-days text-gray-400"></i>
            <p className="text-sm font-bold text-gray-400">05.02.2023</p>
          </div>
          <p className={`${mode ? "text-zinc-600" : "text-white"} text-base  font-bold mt-4`}>
            +998 90 123 45 67
          </p>
          <div>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: mode ? "#505050" : "white",
                        fontWeight: "700",
                        fontSize: "15px",
                        paddingLeft: 0,
                      }}
                    >
                      To'plangan mablag'i:
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        color: mode ? "#005286" : "white",
                        fontWeight: "700",
                        fontSize: "20px",
                        paddingRight: 0,
                      }}
                    >
                      3432500 so'm
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: mode ? "#505050" : "white",
                        fontWeight: "500",
                        fontSize: "18px",
                      }}
                    >
                      <strong className="text-green-600 font-extrabold">
                        №67
                      </strong>
                      <div className="flex items-center gap-5">
                        <i className="fa-solid fa-calendar-days w-3 h-4 text-gray-400"></i>
                        <p className="text-base font-bold text-gray-400">
                          05.02.2023
                        </p>
                      </div>
                    </TableCell>

                    <TableCell
                      sx={{
                        // color: mode ? "#24A504" : "white",
                        color: "#24A504",
                        fontWeight: "700",
                        fontSize: "20px",
                        paddingLeft: 0,
                      }}
                      align="right"
                    >
                      <strong>+ 3 430 320 so'm</strong>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <div style={{width: 458, }} className="text-center">
        <Button
          className="flex gap-5 text-end ml-10"
          variant="contained"
          sx={{ width: "243px", boxShadow: "1px 1px 12px rgba(103, 173, 254, 0.77)"}}
        >
          <i className="fa-solid fa-plus text-2xl"></i><strong className="font-medium text-lg">Qoshish</strong>
        </Button>
        
        <div
          onSubmit={handleSubmit(submit)}
          className={`mx-auto mt-12 flex p-5 rounded-xl flex-col gap-4 text-start ${mode ? "bg-white" : "bg-gray-900"}`}
        >
          <div className="px-5 pr-10 py-3 rounded-lg flex gap-2 flex-col">
            <ModalItem title={"Buyurtma oluvchi"} selected={true} info={true}/>
            <ModalItem title={"Yeg'uvchi"} selected={false} info={true} />
            <ModalItem title={"O'rnatib beruvchi"} selected={true} info={true} />
            <ModalItem title={"Haydovchi"} selected={false} info={true} />
            <ModalItem title={"Oyna kesuvchi"} selected={true} info={true} />
          </div>
          <div className="w-72">
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUser;
