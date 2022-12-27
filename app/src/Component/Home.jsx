import React, { useEffect } from "react";
import Propiedad from "./Propiedad";
import "../style/Propiedades.css";
import Casa from "../img/casa.jpg";
import axios from "axios";
import { useContext } from "react";
import { HomeContext } from "../Contexts/HomeContext";

const Home = () => {
  const { propiedad, setPropiedad } = useContext(HomeContext);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/propiedades/")
      .then((res) => {
        return res.data;
      })
      .then((propiedad) => setPropiedad(propiedad));
  }, []);

  const handleSubmit = () => {
    const ordenado = propiedad.slice().sort(function (a, b) {
      return b.precio - a.precio;
    });

    setPropiedad(ordenado);
  };

  const handleSubmitMenor = () => {
    const ordenado = propiedad.slice().sort(function (a, b) {
      return a.precio - b.precio;
    });

    setPropiedad(ordenado);
  };

  return (
    <div>
      <div className="container cd-sm">
        <div>
          <img class="casa" className="img-fluid" src={Casa} alt="imagen" />
        </div>
        <div class="dropdown">
          <button
            class="btn btn-outline-warning dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ordenar por
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button
                class="dropdown-item"
                type="button"
                onClick={handleSubmitMenor}
              >
                Menor Precio
              </button>
            </li>
            <li>
              <button
                class="dropdown-item"
                type="button"
                onClick={handleSubmit}
              >
                Mayor precio
              </button>
            </li>
          </ul>
        </div>

        {propiedad.map((prop) => {
          return <Propiedad prop={prop} key={prop.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
