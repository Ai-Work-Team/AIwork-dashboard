import React from "react";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Neworder from "./components/Neworder/Neworder";
import { useSelector } from "react-redux";
import { useAxios } from "../../Hooks/useAxios.js"

let dataChart = [
  { title: "jarayonda", value: 28, color: "#eeeeee", price: "216 210 000" },
  { title: "bajarilgan", value: 68, color: "#eeeeee", price: "91 230 000" },
  { title: "qarzdor", value: 4, color: "#eeeeee", price: "21 410 000" },
];

const Analiz = () => {
  const [chartRes, setChartRes] = React.useState([])
  const [orderRes, setOrdderRes] = React.useState([])
  const { mode } = useSelector((state) => state.timeMode);
  const {data, loading, error} = useAxios({url: "/statistics", method: "get"})
  const [url, setUrl] = React.useState(4);
  dataChart = [
    { title: "bajarilgan", value: chartRes.finishedPercent, color: "#eeeeee", price: chartRes.finishedSum },
    { title: "jarayonda", value: chartRes.pendingPercent, color: "#eeeeee", price: chartRes.pendingSum },
    { title: "qarzdor", value: chartRes.debtPercent, color: "#eeeeee", price: chartRes.debtSum },
  ]

    const {data:resData} = useAxios({url:`/order/getOrderByStatus/${url}`, method: 'get'})
    const {data:newData} = useAxios({url:`/order/getOrderByStatus/1 `, method: 'get'})
    console.log(resData);
    // console.log(resData.responce.status);
    React.useEffect(() => {
      // if(resData.status)
      setChartRes(data)
      setOrdderRes(resData)
    },[resData,data])
  return (
    <div className="pl-8">
      <div className=" mt-5 flex justify-between gap-5">
        <div onClick={() => setUrl(4)}><Card mode={mode} data={dataChart} title="bajarilgan" color={"#11C202"} /></div>
        <div onClick={() => setUrl(2)}><Card mode={mode} data={dataChart} title="jarayonda" color={"#FFC807"} /></div>
        <div onClick={() => setUrl(3)}><Card mode={mode} data={dataChart} title="qarzdor" color={"#FF2525"} /></div>
      </div>
      <div className="flex justify-between mt-6 overflow-hidden">
        <div
          className={`w-3/5 rounded-xl pt-8 p-6  ${
            mode ? "bg-white" : "bg-gray-900"
          } `}
          >
          {loading ? <h1>loadind...</h1> : orderRes.map((item) => {
            const colorItem = [{bg: "#DDFFDC", br: "#097500", tColor:"#027800", textColor: "#075900"}, {bg: "#FBF1D0", br: "#FFC907", tColor:"#DAAA00", textColor: "#594600"},{bg: "#FAD2D2", br: "#FF2525", tColor:"#FF2525", textColor: "#680303"} ]
            return <About key={item.id} mode={mode} res={item} color={item.status==4 ? colorItem[0] : item.status==2 ? colorItem[1] : colorItem[2]} loading={loading} setChartRes={setChartRes} setOrdderRes={setOrdderRes} url={url}/>;
          })}
        </div>
        <Neworder data={newData} mode={mode} setOrdderRes={setOrdderRes} url={url}/>
      </div>
    </div>
  );
};

export default Analiz;