import React from "react";
import Data from "../consts/Data";
import Propiedad from "./Propiedad";
import "../style/Propiedades.css";

const Home = () => {
  return (
    <div className="container">
      <h6>Propiedades </h6>
      {Data.map((prop) => {
        return <Propiedad prop={prop} key={prop.id} />;
      })}
    </div>
  );
};

export default Home;
