import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="menu">
      <nav class="navbar navbar-expand-lg danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Venta
              </a>
              <a class="nav-link active" href="#">
                Alquiler
              </a>
              <a class="nav-link active" href="#">
                Agenda tu visita
              </a>
              <a class="nav-link active" href="http://localhost:3001/registro">
                Mi perfil
              </a>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="btn-toolbar">
                  <div className="btn-group me-2" role="group">
                    <Link to="/login">
                      <button className="btn btn-outline-success" type="loggin">
                        Login
                      </button>
                    </Link>
                  </div>

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
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
