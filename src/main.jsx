import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.scss";
import "./global.scss"
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "http://185.217.131.88:8080";
axios.defaults.headers.common["Content-Type"] = "application/json";
let token = localStorage.getItem("token");  
if (token) axios.defaults.headers.common["Authorization"] = `Bearer${token}`
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    <ToastContainer />
    </Router>
  </Provider>
);
