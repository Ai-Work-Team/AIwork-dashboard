import React from "react";
import { useAxios } from "../../../../../Hooks/useAxios";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const workerTypes = {
  ANGEL:"Buyurtma beruvchi",
  CONSTRUCTOR: "Yeg'uvchi",
  INSTALLER: "O'rnatuvchi beruvchi",
  DRIVER: "Haydovchi",
  GLAZIER: "Oyna kesuvchi"
}


const WorkerList = () => {
  const [list, setList] = React.useState([])
  const { orderId } = useParams();
  const id = orderId.slice(1);
  const { data: workerData } = useAxios({
    url: `/order_workers/${40}`,
    method: "get",
  });
  const { data: workersList } = useAxios({
    url: "/user/all",
    method: "get",
  });
  const { data: workerInstaller } = useAxios({
    url: "/user/workers/1?workType=INSTALLER",
    method: "get",
  });
  // console.log(workerData);

  const [workerName, setWorkerName] = React.useState({
    activeObject: [],
    objects: [],
  });

  const [dataWorkers, setDataWorkers] = React.useState({
    angelList: [],
    constructorList: [],
    driverList: [],
    glaizerList: [],
    installerList: [],
    orderId: 40,
  });

  const [workerType, setWorkerType] = React.useState({
    activeObject: null,
    objects: [{workerType:"DRIVER"}],
  }); 

  const [workerState, setWorkerState] = React.useState(true);
  // workersList.map((item, index) => {
  //   console.log(item.id);
  //   if(index <= 4){
  //     // console.log(Object.entries(dataWorkers)[0][1].includes(item.id));
  //     if(Object.entries(dataWorkers)[index][1].includes(item.id)) list.push(item);

  //   }
  //   // dataWorkers?.map((i) =>{
  //   //   console.log(i);
  //   //   if(i.some((a) => a === item.id)){
  //   //     list.push(item)
  //   //   }
  //   // })
  // })
  React.useMemo(() => {
    workerData?.map((item) => {
      if (!workerType.objects?.some((i) => i.workerType === item.workType)) {
        setWorkerType({
          ...workerType,
          objects: [...workerType.objects, {workerType: item.workType }],
        });
        list.push(item)
      }
      console.log('ishladi');
      switch(item.workType) {
        case 'ANGEL':
          dataWorkers.angelList.push(item.userId)
          break
        case 'CONSTRUCTOR':
          dataWorkers.constructorList.push(item.userId)
          break
        
        case 'DRIVER':
          dataWorkers.driverList.push(item.userId)
          break
        
        case 'GLAZIER':
          dataWorkers.glaizerList.push(item.userId)
          break
        
        case 'INSTALLER':
          dataWorkers.installerList.push(item.userId)
          break
      }
      // if(item.workType === 'ANGEL'){
      //   return dataWorkers.angelList.push(item.userId)
      // }
      // if(item.workType === 'CONSTRUCTOR'){
      //   return dataWorkers.constructorList.push(item.userId)
      // }
      // if(item.workType === 'DRIVER'){
      //   return dataWorkers.driverList.push(item.userId)
      // }
      // if(item.workType === 'GLAZIER'){
      //   return dataWorkers.glaizerList.push(item.userId)
      // }
      // if(item.workType === 'INSTALLER'){
      //   return dataWorkers.installerList.push(item.userId)
      // }
    });
    // console.log(list);
  }, [workerData, setWorkerName]);



  const [state, setState] = React.useState({
    activeObject: null,
    objects: [],
  });


  function toggleBtn(e, index, type) {
    e.stopPropagation();
    setWorkerType(type);
    setWorkerType({ ...workerType, activeObject: workerType.objects[index] });
    if (workerType.objects[index] !== workerType.activeObject){
      setWorkerState(true);
    }
    if (workerType.objects[index] === workerType.activeObject) {
      setWorkerState(!workerState);
    }
    setWorkerName({ ...workerName, activeObject: [], objects: [] });
  }
  function toggleActive(index) {
    if (workerType.objects[index] === workerType.activeObject) {
      return workerState;
    } else {
      return false;
    }
  }
 
   function handlerWorker(id, workerT) {
     list.push(workersList.find(item => item.id === id))
    if (workerT == "WORKER" && !dataWorkers.angelList.some((i) => i === id)) {
      dataWorkers.angelList.push(id);
    }
    if (workerT == "CONSTRUCTOR" && !dataWorkers.constructorList.some((i) => i === id)) {
      dataWorkers.constructorList.push(id)
    }
    if (workerT == "INSTALLER" && !dataWorkers.installerList.some((i) => i === id)) {
      dataWorkers.installerList.push(id)
    }
    if (workerT == "DRIVER" && !dataWorkers.driverList.some((i) => i === id)) {
      dataWorkers.driverList.push(id)
    }
    if (workerT == "GLAZIER" && !dataWorkers.glaizerList.some((i) => i === id)) {
      dataWorkers.glaizerList.push(id)
    }
    console.log(dataWorkers);
    console.log(list);
  }

  async function handleRemove(userId, workerT) {
    // list = list.filter(item => item.id !== id)
    console.log(list);
    setList([list.filter(item => item.userId !== userId)])
    switch(workerT){
      case 'ANGEL':
        dataWorkers.angelList = dataWorkers.angelList.filter((i) => i!== userId);
        break;
      case 'CONSTRUCTOR':
        dataWorkers.constructorList = dataWorkers.constructorList.filter((i) => i!== userId);
        break;
      case 'DRIVER':
        dataWorkers.driverList = dataWorkers.driverList.filter((i) => i!== userId);
        break;
      case 'GLAZIER':
        dataWorkers.glaizerList = dataWorkers.glaizerList.filter((i) => i!== userId);
        break;
      case 'INSTALLER':
        dataWorkers.installerList = dataWorkers.installerList.filter((i) => i!== userId);
        break;
    }
    // if (workerT == "ANGEL") dataWorkers.angelList = dataWorkers.angelList.filter(
    //   (item) => item !== userId
    // );
    // if (workerT == "CONSTRUCTOR") dataWorkers.constructorList = dataWorkers.constructorList.filter(
    //       (item) => item !== userId
    //     );
    // if (workerT == "INSTALLER") dataWorkers.installerList = dataWorkers.installerList.filter(
    //       (item) => item !== userId
    //     );
    // if (workerT == "DRIVER") dataWorkers.driverList = dataWorkers.driverList.filter(
    //       (item) => item !== userId
    //     );
    // if (workerT == "GLAZIER") dataWorkers.glaizerList = dataWorkers.glaizerList.filter(
    //       (item) => item !== userId
    //     );
    console.log(dataWorkers);
    console.log(list);
  }
  // console.log(dataWorkers);
  // console.log(workersList);
  async function handlerSubmit() {
    try {
      const workerPost = await axios.post("/order_workers", dataWorkers);
      console.log(workerPost);
    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <div style={{ width: 315 }} className="bg-white rounded-xl py-7 px-6">
      <div className="flex justify-end">
        <Button
          onClick={handlerSubmit}
          variant="contained"
          sx={{
            borderRadius: "7px",
            background: "#0077FF",
            ":hover": { background: "#0673f0" },
          }}
        >
          Saqlash
        </Button>
      </div>
      {workerType.objects?.map((i, index) => {
        return (
          <div key={index}>
            {/* <strong className="font-bold text-md">{workerTypes.i.workerType}</strong> */}
            <strong className="font-bold text-md">{workerTypes[`${i.workerType}`]}</strong>
            <button
              onClick={(e) => toggleBtn(e, index, id)}
              style={{ borderRadius: "5px", background: "#00CAD7" }}
              className="flex justify-center items-center w-10 h-10 mb-3"
            >
              <i
                className="fa-regular fa-plus fa-2xl"
                style={{ color: "#00878F" }}
              ></i>
            </button>
            <div
              style={{ width: "198px" }}
              className={`${
                toggleActive(index) ? "block" : "hidden"
              } bg-stone-200 rounded-sm transition-all `}
            >
              {workersList?.map((workerName) => {
                return (
                  <div
                    onClick={(e) =>
                      handlerWorker(workerName.id, workerName.role.name)
                    }
                    // style={{"background": toggleActive(index) ? "#" : "hidden"}}
                    key={workerName.id}
                    className={`flex justify-between text-black font-bold text-base cursor-pointer pb-1 px-3 ${
                      toggleActive(index)
                        ? "bg-neutral-100"
                        : "bg-stone-100"
                    } hover:bg-gray-200`}
                  >
                    <p>{workerName.fullName}</p>
                    <p>{workerName.worksWithPercentage[i.workerType]}%</p>
                  </div>
                );
              })}
            </div>
            {list.map((item) => {
              return (i.workerType === item.workType ?
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-5"
                >
                  <strong className="font-bold text-sm">{item.fullName}</strong>
                  <div className="flex items-center gap-5">
                    <p className="font-bold text-sm">{item.percent}%</p>
                    <div
                      onClick={() => handleRemove(item.userId, item.workType)}
                      className="p-2 cursor-pointer"
                    >
                      <span
                        className=""
                        style={{
                          width: 17,
                          height: 2,
                          background: "#BA0000",
                          display: "block",
                        }}
                      ></span>
                    </div>
                  </div>
                </div> : null
              )
            })} 
            <hr className="border mt-7" />
          </div>
        );
      })}
    </div>
  );
};

export default WorkerList;
