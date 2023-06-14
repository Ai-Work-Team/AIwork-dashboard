import React from "react";
import { useAxios } from "../../../../Hooks/useAxios.js";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  angelData,
  constructorData,
  driverData,
  glazierData,
  installerData,
} from "../../../../store/workerSlice.js";
import axios from "axios";
import { Link } from "react-router-dom";

const Neworder = ({ data, mode, setOrdderRes, url }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    activeObject: null,
    objects: [],
  });
  async function toggleBtn(index, id) {
    dispatch(angelData({ id: 0, orderId: id, fullName: "", percent: "" }));
    setState({ ...state, activeObject: state.objects[index] });
    if (state.objects[index] === state.activeObject) {
      setOpen(!open);
    }
  }
  function toggleActive(index) {
    if (state.objects[index] === state.activeObject) {
      return open;
    } else {
      return false;
    }
  }

  const [worker, setWorker] = React.useState({
    activeObject: null,
    objects: [
      { id: 1, workerName: "Buyurtma oluvchi", workerType: "ANGEL" },
      { id: 2, workerName: "Yeg'uvchi", workerType: "CONSTRUCTOR" },
      { id: 3, workerName: "O'rnatuvchi beruvchi", workerType: "INSTALLER" },
      { id: 4, workerName: "Haydovchi", workerType: "DRIVER" },
      { id: 5, workerName: "Oyna kesuvchi", workerType: "GLAZIER" },
    ],
  });
  const [workerName, setWorkerName] = React.useState({
    activeObject: [],
    objects: [],
  });

  const [workerState, setWorkerState] = React.useState(true);
  const [workerType, setWorkerType] = React.useState("ANGEL");

  function workerToggle(e, index, type) {
    e.stopPropagation();
    setWorkerType(type);
    setWorker({ ...worker, activeObject: worker.objects[index] });
    if (worker.objects[index] === worker.activeObject) {
      setWorkerState(!workerState);
    }
    setWorkerName({ ...workerName, activeObject: [], objects: [] });
  }
  function toggleActiveWorker(index) {
    if (worker.objects[index] === worker.activeObject) {
      return workerState;
    } else {
      return false;
    }
  }

  const { data: workerData } = useAxios({
    url: `/user/workers/${
      data.length ? data[0]?.companyId : 1
    }?workType=${workerType}`,
    method: "get",
  });

  React.useEffect(() => {
    setState({ ...state, objects: data });
    setWorkerName({ ...workerName, objects: workerData });
  }, [data, workerData]);

  const angelDataRes = useSelector((state) => state.workerSlice);

  const [dataWorkers, setDataWorkers] = React.useState({
    orderWorkers: {
      angelList: [],
      constructorList: [],
      driverList: [],
      glaizerList: [],
      installerList: [],
      orderId: 0,
    },
  });

  async function handlerWorker(e, workerT, workerTypeData) {
    e.stopPropagation();

    if (workerT == "ANGEL") {
      dispatch(angelData(workerTypeData));
      if (
        dataWorkers.orderWorkers.angelList.some(
          (item) => item === workerTypeData.id
        )
      )
        return setDataWorkers({
          orderWorkers: {
            ...dataWorkers.orderWorkers,
            angelList: dataWorkers.orderWorkers.angelList.filter(
              (item) => item !== workerTypeData.id
            ),
          },
        });
      setDataWorkers({
        orderWorkers: {
          ...dataWorkers.orderWorkers,
          angelList: [...dataWorkers.orderWorkers.angelList, workerTypeData.id],
          orderId: workerTypeData.orderId,
        },
      });
    }
    if (workerT == "CONSTRUCTOR") {
      dispatch(constructorData(workerTypeData));
      if (
        dataWorkers.orderWorkers.constructorList.some(
          (item) => item === workerTypeData.id
        )
      )
        return setDataWorkers({
          constructorList: {
            ...dataWorkers.orderWorkers,
            constructorList: dataWorkers.orderWorkers.constructorList.filter(
              (item) => item !== workerTypeData.id
            ),
          },
        });
      setDataWorkers({
        orderWorkers: {
          ...dataWorkers.orderWorkers,
          constructorList: [
            ...dataWorkers.orderWorkers.constructorList,
            workerTypeData.id,
          ],
          orderId: workerTypeData.orderId,
        },
      });
    }
    if (workerT == "INSTALLER") {
      dispatch(installerData(workerTypeData));
      if (
        dataWorkers.orderWorkers.driverList.some(
          (item) => item === workerTypeData.id
        )
      )
        return setDataWorkers({
          driverList: {
            ...dataWorkers.orderWorkers,
            driverList: dataWorkers.orderWorkers.driverList.filter(
              (item) => item !== workerTypeData.id
            ),
          },
        });
      setDataWorkers({
        orderWorkers: {
          ...dataWorkers.orderWorkers,
          driverList: [
            ...dataWorkers.orderWorkers.driverList,
            workerTypeData.id,
          ],
          orderId: workerTypeData.orderId,
        },
      });
    }
    if (workerT == "DRIVER") {
      dispatch(driverData(workerTypeData));
      if (
        dataWorkers.orderWorkers.glaizerList.some(
          (item) => item === workerTypeData.id
        )
      )
        return setDataWorkers({
          glaizerList: {
            ...dataWorkers.orderWorkers,
            glaizerList: dataWorkers.orderWorkers.glaizerList.filter(
              (item) => item !== workerTypeData.id
            ),
          },
        });
      setDataWorkers({
        orderWorkers: {
          ...dataWorkers.orderWorkers,
          glaizerList: [
            ...dataWorkers.orderWorkers.glaizerList,
            workerTypeData.id,
          ],
          orderId: workerTypeData.orderId,
        },
      });
    }
    if (workerT == "GLAZIER") {
      dispatch(glazierData(workerTypeData));
      if (
        dataWorkers.orderWorkers.installerList.some(
          (item) => item === workerTypeData.id
        )
      )
        return setDataWorkers({
          installerList: {
            ...dataWorkers.orderWorkers,
            installerList: dataWorkers.orderWorkers.installerList.filter(
              (item) => item !== workerTypeData.id
            ),
          },
        });
      setDataWorkers({
        orderWorkers: {
          ...dataWorkers.orderWorkers,
          installerList: [
            ...dataWorkers.orderWorkers.installerList,
            workerTypeData.id,
          ],
          orderId: workerTypeData.orderId,
        },
      });
    }
  }
  function activeWorkerToggle(id, workerT) {
    if (
      data.some((item) => item.id === angelDataRes.orderWorkers.orderId) &&
      workerT == "ANGEL" &&
      angelDataRes.ANGEL.some((item) => item.id === id)
    )
      return true;
    if (
      data.some((item) => item.id === angelDataRes.orderWorkers.orderId) &&
      workerT == "CONSTRUCTOR" &&
      angelDataRes.CONSTRUCTOR.some((item) => item.id === id)
    )
      return true;
    if (
      angelDataRes.orderWorkers.orderId == data[0].id &&
      workerT == "INSTALLER" &&
      angelDataRes.INSTALLER.some((item) => item.id === id)
    )
      return true;
    if (
      angelDataRes.orderWorkers.orderId == data[0].id &&
      workerT == "DRIVER" &&
      angelDataRes.DRIVER.some((item) => item.id === id)
    )
      return true;
    if (
      angelDataRes.orderWorkers.orderId == data[0].id &&
      workerT == "GLAZIER" &&
      angelDataRes.GLAZIER.some((item) => item.id === id)
    )
      return true;
    else return false;
  }

  async function handlerProcess(e, userId) {
    e.stopPropagation();
    try {
      const dataPost = axios.post("/order_workers", dataWorkers);
      const dataPut = axios.put(`/order/editStatus/${userId}?status=2`);
      const { data } = useAxios({
        url: `/order/getOrderByStatus/${url}`,
        method: "get",
      });
      setOrdderRes(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{ width: "38%" }}
      className={`rounded-xl pt-4 p-6 ${mode ? "bg-white" : "bg-gray-900"}`}
    >
      <div
        className={`text-center mb-8 ${mode ? "text-blue-500" : "text-white"}`}
      >
        <strong
          className={`text-6xl  font-extrabold flex items-end justify-center gap-2`}
        >
          {data.length} <p className="text-4xl">ta</p>
        </strong>
        <p className="t ext-blue-500 mt-2 text-2xl font-extrabold">
          Yangi buyurtma
        </p>
      </div>

      {data?.map((item, index) => {
        return (
          <div
            onClick={() => toggleBtn(index, item.id)}
            key={item.id}
            style={{
              // background: "rgba(149, 210, 255, 0.33)",
              height: toggleActive(index) ? "" : "108px",
              boxShadow: "#a8e0ff93",
            }}
            className={`rounded-xl mb-5 px-8 pb-5 mt-4 hover:drop-shadow-2xl ${
              mode ? "bg-sky-200 text-blue-700" : "bg-blue-500 text-white"
            } shadow-slate-600`}
          >
            <p className=" text-lg font-extrabold text-center">№{item.id}</p>
            <div className={`${mode ? "text-blue-900" : "text-white"}`}>
              <p className="text-xl font-semibold ">{item.orderHolderName}</p>
            </div>
            <div className="text-gray-500 flex justify-between items-center">
              <p
                className={`text-xl ${
                  mode ? "text-blue-900" : "text-white"
                } font-bold`}
              >
                {item.totalPrice?.toFixed()} sum
              </p>
              <div className={`${mode ? "text-neutral-500" : "text-gray-900"}`}>
                <p className=" text-xs font-semibold">
                  Boshlangan: {item.createAt.slice(0, 16)}
                </p>
                <p className=" text-xs font-semibold">
                  Yopilgan: {item.updateAt.slice(0, 16)}
                </p>
              </div>
            </div>
            <div style={{ display: toggleActive(index) ? "block" : "none" }}>
              {worker.objects.map((i, index) => {
                return (
                  <div key={index} className="relative">
                    <p className="text-base font-bold text-black mt-9">
                      {i.workerName}
                    </p>
                    <div className="flex gap-5">
                      <button
                        onClick={(e) => workerToggle(e, index, i.workerType)}
                        style={{ borderRadius: "5px", background: "#00CAD7" }}
                        className="flex justify-center items-center w-10 h-10"
                      >
                        <i className="fa-regular fa-plus fa-2xl"></i>
                      </button>
                      <div
                        style={{ width: "198px" }}
                        className={`${
                          toggleActiveWorker(index) ? "block" : "hidden"
                        } bg-white rounded-sm transition-all `}
                      >
                        {workerData?.map((workerName) => {
                          return (
                            <div
                              onClick={(e) =>
                                handlerWorker(e, i.workerType, {
                                  id: workerName.id,
                                  orderId: item.id,
                                  fullName: workerName.fullName,
                                  percent:
                                    workerName.worksWithPercentage[
                                      i.workerType
                                    ],
                                })
                              }
                              key={workerName.id}
                              className={`flex justify-between text-black font-bold text-base cursor-pointer pb-1 px-3 ${
                                activeWorkerToggle(workerName.id, i.workerType)
                                  ? "bg-stone-100"
                                  : "bg-white"
                              } hover:bg-stone-100`}
                            >
                              <p>{workerName.fullName}</p>
                              <p>
                                {workerName.worksWithPercentage[i.workerType]}%
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {angelDataRes.orderWorkers.orderId == item.id ? (
                      <div>
                        {i.workerType == "ANGEL"
                          ? angelDataRes.ANGEL?.map((workerItem) => {
                              return workerItem.fullName ? (
                                <div
                                  className="flex  w-44 justify-between text-black text-base font-bold mt-1"
                                  key={workerItem.id}
                                >
                                  <p>{workerItem.fullName}</p>
                                  <p>{workerItem.percent}%</p>
                                </div>
                              ) : null;
                            })
                          : i.workerType == "CONSTRUCTOR"
                          ? angelDataRes.CONSTRUCTOR?.map((workerItem) => {
                              return workerItem.fullName ? (
                                <div
                                  className="flex  w-44 justify-between text-black text-base font-bold mt-1"
                                  key={workerItem.id}
                                >
                                  <p>{workerItem.fullName}</p>
                                  <p>{workerItem.percent}%</p>
                                </div>
                              ) : null;
                            })
                          : i.workerType == "INSTALLER"
                          ? angelDataRes.INSTALLER?.map((workerItem) => {
                              return workerItem.fullName ? (
                                <div
                                  className="flex  w-44 justify-between text-black text-base font-bold mt-1"
                                  key={workerItem.id}
                                >
                                  <p>{workerItem.fullName}</p>
                                  <p>{workerItem.percent}%</p>
                                </div>
                              ) : null;
                            })
                          : i.workerType == "DRIVER"
                          ? angelDataRes.DRIVER?.map((workerItem) => {
                              return workerItem.fullName ? (
                                <div
                                  className="flex  w-44 justify-between text-black text-base font-bold mt-1"
                                  key={workerItem.id}
                                >
                                  <p>{workerItem.fullName}</p>
                                  <p>{workerItem.percent}%</p>
                                </div>
                              ) : null;
                            })
                          : i.workerType == "GLAZIER"
                          ? angelDataRes.GLAZIER?.map((workerItem) => {
                              return workerItem.fullName ? (
                                <div
                                  className="flex  w-44 justify-between text-black text-base font-bold mt-1"
                                  key={workerItem.id}
                                >
                                  <p>{workerItem.fullName}</p>
                                  <p>{workerItem.percent}%</p>
                                </div>
                              ) : null;
                            })
                          : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
              <div className="flex justify-between mt-10">
                <Button
                  onClick={(e) => handlerProcess(e, item.id)}
                  className="font-semibold"
                  sx={{
                    width: "154px",
                    background: "#F0BC00",
                    ":hover": { background: "#F0BC00" },
                  }}
                  variant="contained"
                  color="warning"
                >
                  <p className="text-white font-semibold text-base">Boshlash</p>
                </Button>
                <Link to={`/analiz/:${item.id}`}>
                  <Button variant="contained">
                    <p className="text-white font-semibold text-base">
                      Batafsil
                    </p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Neworder;
