import React from "react";
import { Routes, Route } from "react-router";
import Registro from "./Component/Registro";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";
import Home from "./Component/Home";
import MiPerfil from "./Component/MiPerfil";
import Admin from "./Component/Admin";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<MiPerfil />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
