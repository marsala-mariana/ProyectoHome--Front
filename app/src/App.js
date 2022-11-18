import React from "react";

import { Routes, Route } from "react-router";
import Registro from "./Component/Registro";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
