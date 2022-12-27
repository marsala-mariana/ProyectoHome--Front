import "../style/Admin.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import AgregarPropiedad from "./AgregarPropiedad";
import AdminPropiedad from "./AdminPropiedad";

const Admin = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/usuarios", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);
  //  console.log(user);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3001/api/users/borrarUser/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        window.location.reload(false);
      })
      .then(() => alert("Usuario eliminado"));
  };
  return (
    <>
      {usuario.admin ? (
        <div>
          <div class="card">
            <div class="card-body">
              <h4>PERFIL ADMINISTRADOR</h4>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Lista de Usuarios:</h2>

              <ul class="list-group list-group-flush">
                {user.map((usuarios) => {
                  return (
                    <li key={usuarios.id} class="list-group-item">
                      {usuarios.nombre}
                      <br />
                      {usuarios.celular}
                      <br />
                      {usuarios.email}
                      <br />
                      {usuarios.updatedAt}
                      <br />
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => handleSubmit(usuarios.id)}
                      >
                        🗑 Eliminar
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <AgregarPropiedad />
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <AdminPropiedad />
            </div>
          </div>
        </div>
      ) : (
        <h1>NO SOS ADMIN</h1>
      )}
    </>
  );
};
export default Admin;
