import React, { useContext, useState } from "react";
import { BusquedaContext } from "../Contexts/BusquedaContext";
import "../style/Busqueda.css";

const BusquedaEncontrada = () => {
  const { busquedaProp, setBusquedaProp } = useContext(BusquedaContext);

  return (
    <div>
      <a href="http://localhost:3000/"> Home</a>
      <div className="card ">
        <div className="card-body">
          <ul class="list-group list-group-flush">
            {busquedaProp.map((data) => {
              return (
                <li key={data.id} class="list-group-item">
                  {data.barrio}
                  <br />
                  {data.categoria}
                  <br />
                  {data.precio}
                  <br />
                  {data.nombre}
                  <br />
                  {data.ubicacion}
                  <br />
                  {data.pais}
                  <br />

                  <img class="bus" src={data?.imagen[1]} alt="imagen rota" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusquedaEncontrada;
