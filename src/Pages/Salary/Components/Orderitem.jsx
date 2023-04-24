import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";
import { Button } from "@mui/material";

//img
import akfaImg from "../../../assets/akfa.svg";
import { Link } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: "Akmalov Jahongir",
    maosh: "2 245 000",
  },
  {
    id: 2,
    name: "Qosimov Sarvar",
    maosh: "1 945 000",
  },
  {
    id: 3,
    name: "Yo'ldoshev Ismoil",
    maosh: "245 000",
  },
  {
    id: 4,
    name: "Rahimjonov Tohir",
    maosh: "245 000",
  },
];

const Orderitem = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  const { mode } = useSelector((state) => state.timeMode);

  return (
    <div className="mb-3">
      <div
        onClick={() => setIsOpened(!isOpened)}
        style={{
          background:
            "linear-gradient(90.06deg, #0077FF 3.59%, #8000FF 99.98%)",
          height: "37px",
          width: "1150px",
        }}
        className={`${
          !isOpened ? "rounded-t-lg" : "rounded-lg"
        } flex justify-between items-center pr-4`}
      >
        <img src={akfaImg} alt="" />
        <strong className="text-white text-lg font-bold">6000 Quattro</strong>
        <i
          className={`fa-solid fa-chevron-up text-white transition-all ease-in-out duration-250 ${
            isOpened ? "rotate-180" : "rotate-0"
          }`}
        ></i>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          width: 1150,
          height: isOpened ? "0px" : "auto",
        }}
      >
        <Table
          sx={{ width: 1150, background: `${mode ? "white" : "#111827"}` }}
          size="small"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: mode ? "#505050" : "white",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Ism Familiya
              </TableCell>
              <TableCell
                sx={{
                  color: mode ? "#505050" : "white",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
                align="center"
              >
                Oylik maoshi
              </TableCell>
              <TableCell
                sx={{
                  color: mode ? "#505050" : "white",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
                align="center"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                hover={true}
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    color: mode ? "#505050" : "white",
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{
                    color: mode ? "#505050" : "white",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                  align="center"
                >
                  {row.maosh}
                </TableCell>
                <TableCell
                  sx={{
                    color: mode ? "#505050" : "white",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                  align="center"
                >
                  <Button variant="contained">
                    <Link to={"/salary/user"}>Batafsil</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orderitem;
