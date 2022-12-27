import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { PropIdContext } from "../Contexts/PropIdContext";

const DetallesProp = () => {
  const { id } = useParams();
  const { detalle, setDetalles } = useContext(PropIdContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/propiedades/${id}`)
      .then((res) => res.data)
      .then((detalle) => {
        setDetalles(detalle);
      });
  }, []);

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={detalle.imagen ? detalle.imagen[0] : ""}
              className="img-fluid rounded-start"
              alt="imagen1"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{detalle.nombre}</h5>
              <p className="card-text">{detalle.descripcion}</p>
              <p className="card-text">
                <small className="text-muted">{detalle.ubicacion}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{detalle.estado}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{detalle.barrio}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{detalle.pais}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{detalle.disponibilidad}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{detalle.precio}</small>
              </p>
              <p className="card-text">
                <small className="text-muted">{detalle.categoria}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesProp;
