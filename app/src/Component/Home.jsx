import React from "react";
import Data from "../consts/Data";
import Propiedad from "./Propiedad";
import "../style/Propiedades.css";
import Casa from "../img/casa.jpg";

const Home = () => {
  return (
    <div className="container cd-sm">
      <div>
        <img class="casa" src={Casa} alt="imagen" />
      </div>

      {Data.map((prop) => {
        return <Propiedad prop={prop} key={prop.id} />;
      })}
    </div>
  );
};

export default Home;
