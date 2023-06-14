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

const Orderitem = ({ dataRes,loading,renderData }) => {
  const { mode } = useSelector((state) => state.timeMode);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(dataRes)
  }, [renderData,loading,dataRes,mode]);
  // console.log(data);
  return (
    <div className="mb-3">
      <div
        style={{
          background:
            "linear-gradient(90.06deg, #0077FF 3.59%, #8000FF 99.98%)",
          height: "37px",
          width: "1150px",
        }}
        className={`${
          "rounded-t-lg"
        } flex justify-between items-center pr-4`}
      >
        <img src={akfaImg} alt="" />
        <strong className="text-white text-lg font-bold">Xodimlar</strong>
        <div></div>
      </div>
      <TableContainer
        component={Paper}
        sx={{
          width: 1150,
          borderTopLeftRadius:"0",
          borderTopRightRadius:"0",
          borderEndEndRadius:'8px',
          borderEndStartRadius:''
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
            {
              data?.map((item) => {
                return (
                  <TableRow
                  hover={true}
                  key={item.id}
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
                    {item.fullName}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: mode ? "#505050" : "white",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                    align="center"
                  >
                    {Math.floor(item.balance).toLocaleString()} so'm
                  </TableCell>
                  <TableCell
                    sx={{
                      color: mode ? "#505050" : "white",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                    align="center"
                  >
                      <Link to={`/salary/:${item.id}`}>
                    <Button  variant="contained">
                      Batafsil
                    </Button>
                      </Link>
                  </TableCell>
                </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orderitem;
