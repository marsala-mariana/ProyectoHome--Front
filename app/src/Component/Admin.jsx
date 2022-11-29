import "../style/Admin.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AgregarPropiedad from "./AgregarPropiedad";

const Admin = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

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
        navigate("/admin");
      });
  };
  return (
    <div>
      <a href="http://localhost:3000/"> Home</a>
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
                <li class="list-group-item">
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
    </div>
  );
};

export default Admin;
