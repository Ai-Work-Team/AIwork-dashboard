import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Analiz from "./Pages/Analiz/Analiz";
import Price from "./Pages/Price/Price";
import Salary from "./Pages/Salary/Salary";
import { useSelector } from "react-redux";
import AboutUser from "./Pages/Salary/Components/AboutUser";

function App() {
  const { mode } = useSelector((state) => state.timeMode);
  return (
    <div
      style={{ background: mode ? "#E4E5E9" : "#111219" }}
      className={`${mode ? "bg-zinc-200" : "bg-gray-800"}`}
    >
      <Header />
      <div className="container mx-auto flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Analiz />} />
          <Route path="/price" element={<Price />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/salary/user" element={<AboutUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
