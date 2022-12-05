import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetallesProp = () => {
  const { id } = useParams();
  const [detalle, setDetalles] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((detalle) => {
        setDetalles(detalle);
      });
  }, []);

  //  console.log(detalle.imagen ? detalle.imagen[0] : "");
  return (
    <div>
      <a href="http://localhost:3000/"> Home</a>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={detalle.imagen ? detalle.imagen[0] : ""}
              class="img-fluid rounded-start"
              alt="imagen1"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{detalle.nombre}</h5>
              <p class="card-text">{detalle.descripcion}</p>
              <p class="card-text">
                <small class="text-muted">{detalle.ubicacion}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{detalle.estado}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{detalle.barrio}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{detalle.pais}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{detalle.disponibilidad}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{detalle.precio}</small>
              </p>
              <p class="card-text">
                <small class="text-muted">{detalle.categoria}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesProp;
