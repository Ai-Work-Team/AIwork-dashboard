import { createSlice } from "@reduxjs/toolkit";

const workerSlice = createSlice({
  name: "worker",
  initialState: {
    ANGEL: [],
    CONSTRUCTOR: [],
    INSTALLER: [],
    DRIVER: [],
    GLAZIER: [],
    orderWorkers: {
      angelList: [],
      constructorList: [],
      driverList: [],
      glaizerList: [],
      installerList: [],
      orderId: 0,
    },
  },
  reducers: {
    angelData: (state, action) => {
      if (state.orderWorkers.orderId !== action.payload.orderId && state.orderWorkers.orderId) {
        return { ...state, ANGEL: [], CONSTRUCTOR:[], INSTALLER:[], DRIVER:[], GLAZIER:[], orderWorkers: {...state.orderWorkers, orderId: action.payload.orderId} };
      }
      if (state.ANGEL.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          ANGEL: state.ANGEL.filter((item) => item.id !== action.payload.id),
        };
      }
      return {  
        ...state,
        ANGEL: [...state.ANGEL.slice().reverse(), action.payload],
        orderWorkers: {...state.orderWorkers, orderId: action.payload.orderId,  angelList:state.ANGEL.sort((a,b) => a.id + b.id).map((item) => {
            return item.id
          // }
        })}
      };
    },
    constructorData: (state, action) => {
      if (state.CONSTRUCTOR.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          CONSTRUCTOR: state.CONSTRUCTOR.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        CONSTRUCTOR: [...state.CONSTRUCTOR, action.payload],
        orderWorkers: {...state.orderWorkers, orderId: action.payload.orderId}
      };
    },
    installerData: (state, action) => {
      if (state.INSTALLER.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          INSTALLER: state.INSTALLER.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        INSTALLER: [...state.INSTALLER, action.payload],
        orderWorkers: {...state.orderWorkers, orderId: action.payload.orderId}
      };
    },
    driverData: (state, action) => {
      if (state.DRIVER.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          DRIVER: state.DRIVER.filter((item) => item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        DRIVER: [...state.DRIVER, action.payload],
        orderWorkers: {...state.orderWorkers, orderId: action.payload.orderId}
      };
    },
    glazierData: (state, action) => {
      if (state.GLAZIER.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          GLAZIER: state.GLAZIER.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      }
      return {
        ...state,
        GLAZIER: [...state.GLAZIER, action.payload],
        orderWorkers: {...state.orderWorkers, orderId: action.payload.orderId}
      };
    },
  },
});

export const {
  angelData,
  constructorData,
  installerData,
  driverData,
  glazierData,
} = workerSlice.actions;
export default workerSlice.reducer;
