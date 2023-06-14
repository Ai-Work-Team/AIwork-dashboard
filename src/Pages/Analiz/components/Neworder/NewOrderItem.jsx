// import React from 'react'
// import { Button } from "@mui/material";
// import workerSlice, { angelData, constructorData, driverData, glazierData, installerData } from "../../../../store/workerSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import { useAxios } from "../../../../Hooks/useAxios.js";

// const NewOrderItem = ({data, indexItem, mode}) => {

//     const dispatch = useDispatch();
//     const [open, setOpen] = React.useState(true);
//     const [state, setState] = React.useState({
//       activeObject: null,
//       objects: [],
//     });
//     function toggleBtn(index) {
//     console.log(data.id);
//     // if(data.id){
//     //     dispatch(angelData({id: "", orderId: "", fullName: '', percent: ""}))
//     // }
//       setState({ ...state, activeObject: state.objects[index] });
//       if (state.objects[index] === state.activeObject) {
//         setOpen(!open);
//       }
//     }
//     function toggleActive(index) {
//       if (state.objects[index] === state.activeObject) {
//         return open;
//       } else {
//         return false;
//       }
//     }
    
//     const [worker, setWorker] = React.useState({
//       activeObject: null,
//       objects: [
//         { id: 1, workerName: "Buyurtma oluvchi", workerType: "ANGEL" },
//         { id: 2, workerName: "Yeg'uvchi", workerType: "CONSTRUCTOR" },
//         { id: 3, workerName: "O'rnatuvchi beruvchi", workerType: "INSTALLER" },
//         { id: 4, workerName: "Haydovchi", workerType: "DRIVER" },
//         { id: 5, workerName: "Oyna kesuvchi", workerType: "GLAZIER" },
//       ],
//     });
//     const [workerName, setWorkerName] = React.useState({
//       activeObject: [],
//       objects: [],
//     });
  
//     const [workerState, setWorkerState] = React.useState(true);
//     const [workerType, setWorkerType] = React.useState("ANGEL");

//     function workerToggle(e, index, type) {
//         e.stopPropagation();
//         setWorkerType(type);
//         setWorker({ ...worker, activeObject: worker.objects[index] });
//         if (worker.objects[index] === worker.activeObject) {
//           setWorkerState(!workerState);
//           }
//           setWorkerName({...workerName, activeObject: [], objects: [],})
//       }
//       function toggleActiveWorker(index) {
//         if (worker.objects[index] === worker.activeObject) {
//           return workerState;
//         } else {
//           return false;
//         }
//       }
      
//   const { data: workerData } = useAxios({
//     url: `/user/workers/${data.companyId}?workType=${workerType}`,
//     method: "get",
//   });
// //   console.log(data);
 
//   React.useEffect(() => {
//     setState({ ...state, objects: data });
//     setWorkerName({ ...workerName, objects: workerData });  
//   }, [data,workerData, indexItem]);

//   // const [workerIndex, setWorkerIndex] = React.useState(true);
//   const angelDataRes = useSelector((state) => state.workerSlice)
//   console.log(angelDataRes);
  
//   async function handlerWorker(e, workerT, workerTypeData) {
//     e.stopPropagation()
//     console.log(workerT);
//     if(workerT == "ANGEL") dispatch(angelData(workerTypeData))
//     if(workerT == "CONSTRUCTOR") dispatch(constructorData(workerTypeData))
//     if(workerT == "INSTALLER") dispatch(installerData(workerTypeData))
//     if(workerT == "DRIVER") dispatch(driverData(workerTypeData))
//     if(workerT == "GLAZIER") dispatch(glazierData(workerTypeData))
//   }
//   function activeWorkerToggle(id, workerT){
//     // if(angelDataRes.orderId!==data.id) return
//     if (angelDataRes.orderId==data.id && workerT== "ANGEL" && angelDataRes.ANGEL.some((item) => item.id === id)) return true;
//     if (angelDataRes.orderId==data.id && workerT== "CONSTRUCTOR" && angelDataRes.CONSTRUCTOR.some((item) => item.id === id)) return true;
//     if (angelDataRes.orderId==data.id && workerT== "INSTALLER" && angelDataRes.INSTALLER.some((item) => item.id === id)) return true;
//     if (angelDataRes.orderId==data.id && workerT== "DRIVER" && angelDataRes.DRIVER.some((item) => item.id === id)) return true;
//     if (angelDataRes.orderId==data.id && workerT== "GLAZIER" && angelDataRes.GLAZIER.some((item) => item.id === id)) return true;
//     else return false;
//   }
//     return (
//         <div
//           onClick={() => toggleBtn(indexItem)}
//           key={data.id}
//           style={{
//             // background: "rgba(149, 210, 255, 0.33)",
//             height: toggleActive(indexItem) ? "" : "108px",
//             boxShadow: "#a8e0ff93",
//           }}
//           className={`rounded-xl mb-5 px-8 pb-5 mt-4 hover:drop-shadow-2xl ${
//             mode ? "bg-sky-200 text-blue-700" : "bg-blue-500 text-white"
//           } shadow-slate-600`}
//         >
//           <p className=" text-lg font-extrabold text-center">№{data.id}</p>
//           <div className={`${mode ? "text-blue-900" : "text-white"}`}>
//             <p className="text-xl font-semibold ">{data.orderHolderName}</p>
//           </div>
//           <div className="text-gray-500 flex justify-between items-center">
//             <p
//               className={`text-xl ${
//                 mode ? "text-blue-900" : "text-white"
//               } font-bold`}
//             >
//               {data.totalPrice?.toFixed()} sum
//             </p>
//             <div className={`${mode ? "text-neutral-500" : "text-gray-900"}`}>
//               <p className=" text-xs font-semibold">
//                 Boshlangan: {data.createAt.slice(0, 16)}
//               </p>
//               <p className=" text-xs font-semibold">
//                 Yopilgan: {data.updateAt.slice(0, 16)}
//               </p>
//             </div>
//           </div>
//           <div style={{ display: toggleActive(indexItem) ? "block" : "none" }}>
//             {worker.objects.map((i, index) => {
//               return (
//                 <div key={index} className="relative">
//                   <p className="text-base font-bold text-black mt-9">
//                     {i.workerName}
//                   </p>
//                   <div className="flex gap-5">
//                     <button
//                       onClick={(e) => workerToggle(e, index, i.workerType)}
//                       style={{ borderRadius: "5px", background: "#00CAD7" }}
//                       className="flex justify-center items-center w-10 h-10"
//                     >
//                       <i className="fa-regular fa-plus fa-2xl"></i>
//                     </button>
//                     <div
//                       style={{ width: "198px" }}
//                       className={`${
//                         toggleActiveWorker(index) ? "block" : "hidden"
//                       } bg-white rounded-sm transition-all `}
//                     >
//                       {workerData?.map((workerName) => {
//                         return (
//                           <div
//                             onClick={(e) =>
//                               handlerWorker(e, i.workerType, {
//                                 id: workerName.id,
//                                 orderId: data.id,
//                                 fullName: workerName.fullName,
//                                 percent:
//                                   workerName.worksWithPercentage[
//                                     i.workerType
//                                   ],
//                               })
//                             }
//                             key={workerName.id}
//                             className={`flex justify-between text-black font-bold text-base cursor-pointer pb-1 px-3 ${activeWorkerToggle(workerName.id, i.workerType) ? "bg-stone-100" : "bg-white"} hover:bg-stone-100`}
//                           >
//                             <p>{workerName.fullName}</p>
//                             <p>
//                               {workerName.worksWithPercentage[i.workerType]}%
//                             </p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                   {
//                     angelDataRes.orderId==data.id ? 
//                     <div>
//                     {i.workerType == "ANGEL" ? angelDataRes.ANGEL?.map((workerItem) => {
//                       return <div className="flex  w-44 justify-between text-black text-base font-bold mt-1" key={workerItem.id}>
//                         <p>{workerItem.fullName}</p>
//                         <p>{workerItem.percent}%</p>
//                       </div>
//                     }) 
//                     : i.workerType == "CONSTRUCTOR" ? angelDataRes.CONSTRUCTOR?.map((workerItem) => {
//                       return <div className="flex  w-44 justify-between text-black text-base font-bold mt-1" key={workerItem.id}>
//                         <p>{workerItem.fullName}</p>
//                         <p>{workerItem.percent}%</p>
//                       </div>
//                     }) 
                    
//                     : i.workerType == "INSTALLER" ? angelDataRes.INSTALLER?.map((workerItem) => {
//                       return <div className="flex  w-44 justify-between text-black text-base font-bold mt-1" key={workerItem.id}>
//                         <p>{workerItem.fullName}</p>
//                         <p>{workerItem.percent}%</p>
//                       </div>
//                     }) 
                    
//                     : i.workerType == "DRIVER" ? angelDataRes.DRIVER?.map((workerItem) => {
//                       return <div className="flex  w-44 justify-between text-black text-base font-bold mt-1" key={workerItem.id}>
//                         <p>{workerItem.fullName}</p>
//                         <p>{workerItem.percent}%</p>
//                       </div>
//                     }) 
                    
//                     : i.workerType == "GLAZIER" ? angelDataRes.GLAZIER?.map((workerItem) => {
//                       return <div className="flex  w-44 justify-between text-black text-base font-bold mt-1" key={workerItem.id}>
//                         <p>{workerItem.fullName}</p>
//                         <p>{workerItem.percent}%</p>
//                       </div>
//                     }) 
//                     :null
                    
//                   }
//                   </div>:null
//                   }
//                 </div>
//               );
//             })}
//             <div className="flex justify-between mt-10">
//               <Button className="font-semibold" sx={{width:"154px", background:"#F0BC00", ":hover":{background:"#F0BC00"}}} variant="contained" color="warning">
//                 <p className="text-white font-semibold text-base">Boshlash</p>
//               </Button>
//               <Button variant="contained">
//                 <p className="text-white font-semibold text-base">Batafsil</p>
//               </Button>
//             </div>
//           </div>
//         </div>
//       );
// }

// export default NewOrderItem