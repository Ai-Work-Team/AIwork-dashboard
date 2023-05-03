import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Analiz from "./Pages/Analiz/Analiz";
import Price from "./Pages/Price/Price";
import Salary from "./Pages/Salary/Salary";
import { useSelector } from "react-redux";
import AboutUser from "./Pages/Salary/Components/AboutUser";
import Login from "./Pages/Login/Login";
import LoginSms from "./Pages/Login/LoginSms";
import EditUser from "./Pages/Login/EditUser";
import { loadState } from "./Utils/storage";
import Success from "./Pages/Login/Success";

function App() {
  const { mode } = useSelector((state) => state.timeMode);
  const navigate = useNavigate()
  React.useEffect(() => {
    const token = loadState("token")
    if(!token){
      navigate("/login")
    }
  }, [])

  return (
    <div
      style={{ background:location.pathname === '/login' ? "white" : mode ? "#E4E5E9":  "#111219" }}
      className={`${mode ? "bg-zinc-200" : "bg-gray-800"}`}
    >
      <Header />
      <div className="container mx-auto flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Analiz />} />
          <Route path="/price" element={<Price />} />
          <Route path="/salary" element={<Salary />}/>
          <Route path="/salary/:userId" element={<AboutUser/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/phoneSms" element={<LoginSms />}/>
          <Route path="/editUser" element={<EditUser />}/>
          <Route path="/success" element={<Success />}/>
          {/* <Route path="/salary/user" element={<AboutUser />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
