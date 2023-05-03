import React from "react";
import { useAxios } from "../../../Hooks/useAxios.js";
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
  InputAdornment,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ModalItem from "./ModalItem";
import { Link, useParams } from "react-router-dom";

const AboutUser = () => {
  const { mode } = useSelector((state) => state.timeMode);
  const [worker, setWorker] = React.useState([]);
  const { userId } = useParams();
  const id = userId.split("")[1];
  const { data, loading } = useAxios({ url: `/user/${id}`, method: "get" });
  const { data: dataTransaction } = useAxios({
    url: `/transaction/byUser/${id}`,
    method: "get",
  });
   React.useEffect(() => {
    if (data.worksWithPercentage) {
      const workerT = Object.keys(data.worksWithPercentage).map((item) => [
        item,
        data.worksWithPercentage[item],
      ]);
      setWorker(...workerT);
    }
  }, [data.worksWithPercentage]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  const submit = (data) => {
    reset();
    // let dataItem = { ...data, phone: "+998" + data.phone };
    setOpen(false);
  };
  return (
    <div className={`flex  m-5 justify-between gap-12 `}>
      <div
        style={{ width: "599px" }}
        className={`${mode ? "bg-white" : "bg-gray-900"} rounded-lg p-4`}
      >
        <div>
          <div className="flex gap-5 items-center">
            <Avatar sx={{ width: 28, height: 28 }} />
            <h2
              className={`font-bold text-xl ${
                mode ? "text-sky-800" : "text-blue-600"
              }`}
            >
              {data.fullName}
            </h2>
          </div>
          <div className="flex items-center gap-5 mt-4 ml-2">
            <i className="fa-solid fa-calendar-days text-gray-400"></i>
            <p className="text-sm font-bold text-gray-400">{data.createAt}</p>
          </div>
          <p
            className={`${
              mode ? "text-zinc-600" : "text-white"
            } text-base  font-bold mt-4`}
          >
            {data.phoneNumber}
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
                  {dataTransaction?.map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell
                          sx={{
                            color: mode ? "#505050" : "white",
                            fontWeight: "500",
                            fontSize: "18px",
                          }}
                        >
                          <strong
                            style={{
                              color: item.input ? "#24A504" : "#A50404",
                            }}
                            className="text-green-600 font-extrabold"
                          >
                            {item.input ? "№" + item.orderId : "To'landi"}
                          </strong>
                          <div className="flex items-center gap-5">
                            <i className="fa-solid fa-calendar-days w-3 h-4 text-gray-400"></i>
                            <p className="text-base font-bold text-gray-400">
                              {item.createAt?.slice(0, 10)}
                            </p>
                          </div>
                        </TableCell>

                        <TableCell
                          sx={{
                            color: item.input ? "#24A504" : "#A50404",
                            fontWeight: "700",
                            fontSize: "20px",
                            paddingLeft: 0,
                          }}
                          align="right"
                        >
                          <strong>
                            {item.input ? "+" : "-"} {item.amount?.toFixed()}{" "}
                            so'm
                          </strong>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>

      <div style={{ width: 458 }} className="text-center">
        <Link to={"/salary"}>
          <Button
            className="flex gap-2 text-end ml-10 text-3xl"
            variant="contained"
            sx={{
              width: "243px",
              boxShadow: "1px 1px 12px rgba(103, 173, 254, 0.77)",
            }}
          >
            <i class="fa-solid fa-right-from-bracket fa-rotate-180 fa-xl"></i>
            <strong className="font-medium text-base">Orqaga</strong>
          </Button>
        </Link>

        <div
          onSubmit={handleSubmit(submit)}
          className={`mx-auto mt-12 flex p-5 rounded-xl flex-col gap-4 text-start ${
            mode ? "bg-white" : "bg-gray-900"
          }`}
        >
          <div className="px-5 pr-10 py-3 rounded-lg flex gap-2 flex-col">
            {worker ? (
              <>
                <ModalItem
                  title={"Buyurtma oluvchi"}
                  data={worker[0] == "ANGEL" ? worker[1] : ""}
                  selected={worker[0] == "ANGEL" ? true : false}
                  info={true}
                />
                <ModalItem
                  title={"YIg'uvchi"}
                  data={worker[0] == "CONSTRUCTOR" ? worker[1] : ""}
                  selected={worker[0] == "CONSTRUCTOR" ? true : false}
                  info={true}
                />
                <ModalItem
                  title={"O'rnatib beruvchi"}
                  data={worker[0] == "INSTALLER" ? worker[1] : ""}
                  selected={worker[0] == "INSTALLER" ? true : false}
                  info={true}
                />
                <ModalItem
                  title={"Haydovchi"}
                  data={worker[0] == "DRIVER" ? worker[1] : ""}
                  selected={worker[0] == "DRIVER" ? true : false}
                  info={true}
                />
                <ModalItem
                  title={"Oyna kesuvchi"}
                  data={worker[0] == "" ? worker[1] : ""}
                  selected={worker[0] == "GLASSER" ? true : false}
                  info={true}
                />
              </>
            ) : (
              <>
                <ModalItem
                  title={"Buyurtma oluvchi"}
                  selected={false}
                  info={true}
                />
                <ModalItem title={"YIg'uvchi"} selected={false} info={true} />
                <ModalItem
                  title={"O'rnatib beruvchi"}
                  selected={false}
                  info={true}
                />
                <ModalItem title={"Haydovchi"} selected={false} info={true} />
                <ModalItem
                  title={"Oyna kesuvchi"}
                  selected={false}
                  info={true}
                />
              </>
            )}
          </div>
          <div className="w-72"></div>
        </div>
      </div>
    </div>
  );
};
export default AboutUser;
