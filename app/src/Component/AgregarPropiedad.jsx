import React from "react";
//import useInput from "../Hooks/useInput";
const AgregarPropiedad = () => {
  return (
    <div>
      <h4>AGREGAR UNA PROPIEDAD:</h4>
      <form>
        <div class="row">
          <div class="col-4">
            <input type="text" class="form-control" placeholder="ubicacion" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="estado" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="nombre" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="barrio" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="pais" />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              placeholder="disponibilidad"
            />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="precio" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="descripcion" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="categoria" />
          </div>
          <div class="col-4">
            <input type="text" class="form-control" placeholder="imagen" />
          </div>
        </div>
        <button className="btn btn-outline-warning">Agregar</button>
      </form>
    </div>
  );
};

export default AgregarPropiedad;
