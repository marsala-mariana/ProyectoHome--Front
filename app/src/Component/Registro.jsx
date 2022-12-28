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
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <div className="Auto">
            <h1>Registrarse </h1>
            <label for="floatingInput">Nombre</label>
            <input
              value={nombre}
              onChange={handleChangeNombre}
              type="nombre"
              className="form-control"
              id="nombre"
              aria-describedby="nombre"
              placeholder="Escribi tu nombre"
            />
          </div>
          <div className="Auto">
            <label for="floatingInput">Celular</label>
            <input
              value={celu}
              onChange={handleChangeCelu}
              type="celular"
              className="form-control"
              id="celular"
              placeholder="Escribi tu celular"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Email</label>
            <input
              value={email}
              onChange={handleChangeEmail}
              type="email"
              className="form-control"
              id="email"
              placeholder="Escribi tu email"
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Contraseña</label>
            <input
              value={password}
              onChange={handleChangePass}
              type="contraseña"
              className="form-control"
              id="contraseña"
              placeholder="Escribi tu contraseña"
            />
          </div>

          <button type="submit" class="w-100 btn btn-lg btn-primary">
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Registro;
