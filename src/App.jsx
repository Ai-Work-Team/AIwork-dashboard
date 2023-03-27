import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Analiz from "./Pages/Analiz/Analiz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container mx-auto flex gap-1">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Analiz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
