import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//img
import akfaImg from "../../../assets/akfa.svg";
import { useSelector } from "react-redux";

const Priceitem = ({ data, loading }) => {
  const [isOpened, setIsOpened] = React.useState(true);
  const { mode } = useSelector((state) => state.timeMode);

  let resultArr = data?.map((item) => {
    return Object.keys(item.productsWithPrices).map((key) => [
      key,
      item.productsWithPrices[key],
    ]);
  });
//   console.log(resultArr);
  // const result = resultArr.reduce((acc, val) => acc.concat(val), []);
  const result = resultArr?.map((innerArr) =>
    innerArr.map((subArr) => {
      const [str, num] = subArr;
      return [
        str == "EXTERNAL_INTERNAL"
          ? "Tashqi-Ichki"
          : str == "LAMINATION"
          ? "Laminatsiya"
          : str == "WHITE"
          ? "Oq"
          : str == "VACUUM" 
          ? "Vakkum" 
          : str == "COLORFUL" 
          ? "Rangli"
          : 'Narxi',
        num,
      ];
    })
  );
//   console.log(result);

  return (
    <>
      {
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
            } hover:opacity-90 flex justify-between items-center pr-4`}
          >
            <img src={akfaImg} alt="" />
            <strong className="text-white text-lg font-bold">
              {data[0]?.category.name}
            </strong>
            <i
              className={`fa-solid fa-chevron-up text-white transition-all ease-in duration-250 ${
                isOpened ? "rotate-180" : "rotate-0"
              }`}
            ></i>
          </div>
          <TableContainer
            component={Paper}
            sx={{
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              width: 1150,
              height: isOpened ? "0px " : "auto ",
            }}
          >
            <Table
              sx={{
                width: 1150,
                background: `${mode ? "white" : "#111827"}`,
              }}
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
                    Mahsulot nomi
                  </TableCell>
                  {result[0]?.map((item,index) => {
                    return (
                      <TableCell
                      key={index}
                        sx={{
                          color: mode ? "#505050" : "white",
                          fontWeight: "500",
                          fontSize: "18px",
                        }}
                        align="center"
                      >
                        {item[0]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {        data.map((resItem) =>{} */}

                {!loading &&
                  data.map((resItem) => {
                    return (
                      <TableRow
                      key={resItem.id}
                        hover={true}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                          {resItem.category.name}
                        </TableCell>
                        {Object.keys(resItem.productsWithPrices).map(
                          (key, index) => {
                            return (
                              <TableCell
                                key={index}
                                sx={{
                                  color: mode ? "#505050" : "white",
                                  fontWeight: "700",
                                  fontSize: "18px",
                                }}
                                align="center"
                              >
                                {resItem.productsWithPrices[key]}
                              </TableCell>
                            );
                          }
                        )}
                        {/* {productsWithPrices.map((item) => {
                          return item.map((subArr) => {
                            return (
                              <TableCell
                                sx={{
                                  color: mode ? "#505050" : "white",
                                  fontWeight: "700",
                                  fontSize: "18px",
                                }}
                                align="center"
                              >
                                {subArr[1]}
                              </TableCell>
                            );
                          });
                        })} */}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      }
    </>
  );
};

export default Priceitem;
//kodda qanaqa xatolik bor
