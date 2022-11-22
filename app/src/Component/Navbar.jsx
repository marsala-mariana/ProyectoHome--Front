import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  //console.log(usuario, "NAVBAR");
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await axios.post("http://localhost:3001/api/users/logout");

      localStorage.removeItem("user");

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
        <div className="container-fluid">
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
            className="collapse navbar-collapse p-2"
            id="navbarTogglerDemo02"
          >
            <div className="navbar-nav">
              {/* <a class="nav-link active" aria-current="page" href="#">
                Venta
              </a>
              <a class="nav-link active" href="#">
                Alquiler
              </a>
              <a class="nav-link active" href="#">
                Agenda tu visita
              </a>
              <a class="nav-link active" href="#">
                Mi perfil
              </a>
*/}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <>
                  {usuario.nombre ? (
                    <div className="btn-group me-2" role="group">
                      <p className="has-text-white">
                        {usuario.nombre
                          ? `${usuario.nombre.toUpperCase()}`
                          : `LOGUEATE`}
                      </p>
                      <button
                        className="btn btn-outline-success"
                        type="logout"
                        onClick={handleLogOut}
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  ) : (
                    <div className="btn-toolbar">
                      <div className="btn-group me-2" role="group">
                        <Link to="/registro">
                          <button
                            className="btn btn-outline-success"
                            type="registro"
                          >
                            Registro
                          </button>
                        </Link>
                      </div>

                      <div className="btn-group me-2" role="group">
                        <Link to="/login">
                          <button
                            className="btn btn-outline-success"
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
