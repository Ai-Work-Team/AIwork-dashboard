import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

const About = ({ mode, res, color, loading, setChartRes, setOrdderRes,url }) => {
  const [open, setOpen] = React.useState(true); 

  async function handlerBtn(e, id, status) {
    e.stopPropagation()
    try {
      const response = await axios.put(`/order/editStatus/${id}?status=${status}`);
      const responseChart = await axios.get(`/statistics`);
      const respponseOrder = await axios.get(`/order/getOrderByStatus/${url}`);
      setChartRes(responseChart.data)
      setOrdderRes(respponseOrder.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {
        <div onClick={() => setOpen(!open)}  style={{background: color.bg, height: open ? "107px" : "254px", border: "2px solid" +color.br}} className=" rounded-xl mb-5 px-8 pb-5">
        <p style={{color: color.tColor}} className=" text-base font-extrabold ml-52">N:{res.id}</p>
        <div className="">    
          <p style={{color: color.textColor}} className="text-xl font-semibold ">{res.orderHolderName}</p>
        </div>
        <div className="text-gray-500 flex justify-between items-center">
          <p style={{color: color.textColor}} className="text-xl font-bold">{Math.floor(res.lastTotalPrice).toLocaleString()} so'm</p>
          <div>
            <p className="text-neutral-500 text-xs font-semibold"> Boshlangan: {res.createAt}</p>
            <p className="text-neutral-500 text-xs font-semibold"> Yopilgan: {res.updateAt}</p>
          </div>
        </div>
        <div className={open ? "hidden" : "flex justify-between items-end  mt-16"}>
          <div className="">{
            res.status==4 
            ? <Button onClick={(e) => handlerBtn(e, res.id, 2)} variant="contained"sx={{background: "#F0BC00", ":hover":{background:"#F0BC00"}}}>Tugatilmagan</Button>
            : res.status==2 ? <Button onClick={(e) => handlerBtn(e, res.id, 4)} variant="contained" sx={{background: "#10C700", ":hover":{background:"#10C700"}}} >Tugatilgan</Button>
            : res.status==3 ? <Button onClick={(e) => handlerBtn(e, res.id, 4)} variant="contained" sx={{background: "#10C700", ":hover":{background:"#10C700"}}}>Tugatilgan</Button>
            : null
          }</div>
          <div style={{width:"146px"}} className="flex flex-col gap-3 ">
            <div className="text-end"><Button  sx={{width: "104px"}} onClick={(e) => handlerBtn(e, res.id)} variant="contained">Batafsil</Button></div>
            {
              res.status==3 ? <Button  onClick={(e) => handlerBtn(e, res.id, 2)} variant="contained"sx={{background: "#F0BC00", ":hover":{background:"#F0BC00"}}}>Tugatilmagan</Button>
              : <div className="text-end"><Button sx={{width: "104px"}}  onClick={(e) => handlerBtn(e, res.id, 3)} variant="contained" color="error">Qarzdor</Button></div>
            }
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default About;