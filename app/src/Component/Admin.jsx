import React from "react";

import "../style/Admin.css";

const Admin = () => {
  return (
    <div>
      <div class="card">
        <a href="http://localhost:3000/"> Home</a>
        <div class="card-body">
          <h4>PERFIL ADMINISTRADOR</h4>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Lista de Usuarios:</h2>

          <ul class="list-group list-group-flush">
            <li class="list-group-item">1</li>
            <li class="list-group-item">1</li>
            <li class="list-group-item">1</li>
            <li class="list-group-item">1</li>
            <li class="list-group-item">1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
