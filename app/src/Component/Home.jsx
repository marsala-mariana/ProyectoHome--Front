import React, { useEffect, useState } from "react";

import Propiedad from "./Propiedad";
import "../style/Propiedades.css";
import Casa from "../img/casa.jpg";
import axios from "axios";

const Home = () => {
  const [propiedad, setPropiedad] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/propiedades/")
      .then((res) => {
        return res.data;
      })
      .then((propiedad) => setPropiedad(propiedad));
  }, []);

  return (
    <div className="container cd-sm">
      <div>
        <img class="casa" src={Casa} alt="imagen" />
      </div>

      {propiedad.map((prop) => {
        return <Propiedad prop={prop} key={prop.id} />;
      })}
    </div>
  );
};

export default Home;
