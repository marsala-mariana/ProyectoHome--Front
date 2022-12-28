import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [contraseña, setPass] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email: email,
          contraseña: contraseña,
        },
        { withCredentials: true }
      )
      .then((res) => localStorage.setItem("user", JSON.stringify(res.data)))

      .then(() => {
        navigate("/");
      });
  };

  return (
    <div>
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <h1> Por favor ingresa</h1>
          <div className="form-floating">
            <input
              value={email}
              onChange={handleChangeEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Escribi tu email"
            />
            <label for="floatingInput">Correo electrónico :</label>
          </div>
          <div className="form-floating">
            <input
              value={contraseña}
              onChange={handleChangePass}
              type="password"
              className="form-control"
              id="contraseña"
              placeholder="Escribi tu contraseña"
            />
            <label for="floatingInput">Contraseña:</label>
          </div>
          <button type="submit" class="w-100 btn btn-lg btn-primary">
            Ingesar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
