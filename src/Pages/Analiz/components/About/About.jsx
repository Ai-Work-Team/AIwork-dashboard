import { Button } from "@mui/material";
import React from "react";

const About = ({ mode, res, color, loading }) => {
  const [open, setOpen] = React.useState(true); 
  return (
    <>
      {
        <div onClick={() => setOpen(!open)}  style={{background: color.bg, height: open ? "107px" : "254px", border: "2px solid" +color.br}} className=" rounded-xl mb-5 px-8 pb-5">
        <p style={{color: color.tColor}} className=" text-base font-extrabold ml-52">N:{res.id}</p>
        <div className="">    
          <p style={{color: color.textColor}} className="text-xl font-semibold ">{res.orderHolderName}</p>
        </div>
        <div className="text-gray-500 flex justify-between items-center">
          <p style={{color: color.textColor}} className="text-xl font-bold">{res.lastTotalPrice.toFixed()} so'm</p>
          <div>
            <p className="text-neutral-500 text-xs font-semibold"> Boshlangan: {res.createAt}</p>
            <p className="text-neutral-500 text-xs font-semibold"> Yopilgan: {res.updateAt}</p>
          </div>
        </div>
        <div className={open ? "hidden" : "flex justify-between items-end  mt-16"}>
          <div className=""><Button onClick={(e) => e.stopPropagation()} variant="contained" color="warning">Tugatilmagan</Button></div>
          <div className="flex flex-col gap-3">
            <Button onClick={(e) => e.stopPropagation()} variant="contained">Batafsil</Button>
            <Button onClick={(e) => e.stopPropagation()} variant="contained" color="error">Qarzdor</Button>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default About;