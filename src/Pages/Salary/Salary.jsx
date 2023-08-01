import React from "react";
import Orderitem from "./Components/Orderitem";
import ModalAddUser from "./Components/ModalAddUser";
import { useAxios } from "../../Hooks/useAxios.js";
const Order = () => {
  const [renderData, setRenderData] = React.useState(false);
  const [data, setData] = React.useState([]);

  const { data: res, loading } = useAxios({ url: "/user/all", method: "get" });
  console.log(res);
  React.useEffect(() => {
    setData(res);
  }, [res]);

  return (
    <div className="m-8">
      <div className=" flex gap-14 items-center">
        <ModalAddUser setRenderData={setRenderData} setData={setData} />
      </div>
      <div className="mt-4">
        {<Orderitem dataRes={data} loading={loading} renderData={renderData} />}
      </div>
    </div>
  );
};

export default Order;
