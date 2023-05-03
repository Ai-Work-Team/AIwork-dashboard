import React from "react";
import { useAxios } from "../../Hooks/useAxios";
import Priceitem from "./Components/Priceitem";

const Price = () => {
  const [state, setstate] = React.useState([]);
  const { data, loading } = useAxios({ url: "/default_prices/byCategory/1", method: "get" });
  const { data:data2} = useAxios({ url: "/default_prices/byCategory/2", method: "get" });
  const { data:data3} = useAxios({ url: "/default_prices/byCategory/3", method: "get" });
  const { data:data4} = useAxios({ url: "/default_prices/byCategory/4", method: "get" });
  const { data:data5} = useAxios({ url: "/default_prices/byCategory/5", method: "get" });
  const { data:data6} = useAxios({ url: "/default_prices/byCategory/6", method: "get" });
  const { data:data7} = useAxios({ url: "/default_prices/byCategory/7", method: "get" });
  const { data:data8} = useAxios({ url: "/default_prices/byCategory/8", method: "get" });
  const { data:data9} = useAxios({ url: "/default_prices/byCategory/9", method: "get" });
  const { data:data10} = useAxios({ url: "/default_prices/byCategory/10", method: "get" });
return (
    <div className="m-8">
      <Priceitem data={data} loading ={loading} />
      <Priceitem data={data2} loading={loading} />
      <Priceitem data={data3} loading={loading} />
      <Priceitem data={data4} loading={loading} />
      <Priceitem data={data5} loading={loading} />
      <Priceitem data={data6} loading={loading} />
      <Priceitem data={data7} loading={loading} />
      <Priceitem data={data8} loading={loading} />
      <Priceitem data={data9} loading={loading} />
      <Priceitem data={data10} loading={loading} />
    </div>
  );
};

export default Price;
