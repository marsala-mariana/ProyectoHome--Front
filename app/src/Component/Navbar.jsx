import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Navbar.css";
import logo from "../img/Group 177.png";
import MenuDesplegable from "./MenuDesplegable";

import { BusquedaContext } from "../Contexts/BusquedaContext";

const Navbar = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const { busquedaProp, setBusquedaProp } = useContext(BusquedaContext);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/propiedades/busqueda/${input}`)
      .then((res) => setBusquedaProp(res.data))

      .catch((error) => console.log(error, "NO FUNCIONA LA BUSQUEDA"));

    navigate("/encontrado");
  };

  const handleLogOut = async () => {
    try {
      await axios.post("http://localhost:3001/api/users/logout");

      localStorage.removeItem("user");

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(busquedaProp);
  return (
    <div id="fondo">
      <nav className="navbar navbar-expand-sm " id="nav">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse p-0"
            id="navbarSupportedContent"
          >
            <img class="logo" src={logo} alt="logo" />

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <>
                {usuario.nombre ? (
                  <MenuDesplegable />
                ) : (
                  <div className="btn-toolbar">
                    <div className="btn-group me-2" role="group">
                      <Link to="/registro">
                        <button
                          className="btn btn btn btn-danger"
                          type="registro"
                        >
                          Registro
                        </button>
                      </Link>
                    </div>

                    <div className="btn-group me-2" role="group">
                      <Link to="/login">
                        <button
                          className="btn btn btn btn-danger"
                          type="loggin"
                        >
                          Iniciar Sesión
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </>
            </ul>
          </div>

          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              onChange={handleInput}
              className="form-control me-2"
              type="text"
              placeholder="Busqueda"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
