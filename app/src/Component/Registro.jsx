import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [celu, setCelu] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleChangeNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleChangeCelu = (e) => {
    setCelu(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/registro", {
        nombre: nombre,
        celular: celu,
        email: email,
        contraseña: password,
      })
      .then((res) => res.data)
      .then(() => navigate("/login"));
  };

  return (
    <div>
      <h1>Registrarse : </h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={handleChangeNombre}
            type="nombre"
            class="form-control"
            id="nombre"
            aria-describedby="nombre"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Celular</label>
          <input
            value={celu}
            onChange={handleChangeCelu}
            type="celular"
            class="form-control"
            id="celular"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            value={email}
            onChange={handleChangeEmail}
            type="email"
            class="form-control"
            id="email"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input
            value={password}
            onChange={handleChangePass}
            type="contraseña"
            class="form-control"
            id="contraseña"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Registro;
