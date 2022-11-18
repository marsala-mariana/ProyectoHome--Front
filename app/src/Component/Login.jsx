import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [users, setUsers] = useState([]);
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
      .post("http://localhost:3001/api/users/login", {
        email: email,
        contraseña: contraseña,
      })
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
        setUsers([...users, user]);
        // Navigate(`/users/${user.id}`);
      });
  };
  return (
    <div>
      <h1>Login</h1>

      <div className="container">
        <form className="row" onSubmit={handleSubmit}>
          <div>
            <label>Correo electrónico :</label>
            <input
              value={email}
              onChange={handleChangeEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Escribi tu email"
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              value={contraseña}
              onChange={handleChangePass}
              type="contraseña"
              className="form-control"
              id="contraseña"
              placeholder="Escribi tu contraseña"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
