import React from "react";
import Orderitem from "./Components/Orderitem";
import { useSelector } from "react-redux";
import ModalAddUser from "./Components/ModalAddUser";
import {useAxios} from '../../Hooks/useAxios.js'
const Order = () => {
  const { mode } = useSelector((state) => state.timeMode);
  const {data, loading, error} = useAxios({url: "/user", method: 'get'})
  console.log(data);

  return (
    <div className="m-8">
      <div className=" flex gap-14 items-center">
        <ModalAddUser/>
      </div>
      <div className="mt-4">
        <Orderitem />
        {
         loading && data?.map((item) => {
            return <Orderitem data={item}/>
          })
        }
      </div>
    </div>
  );
};

export default Order;
