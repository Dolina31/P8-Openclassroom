import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logements from "../logements.json";

const Homecontent = () => {
  const [logementsData, setLogementsData] = useState([]);

  useEffect(() => {
    setLogementsData(logements);
    console.log(logements);
  }, []);

  return (
    <div>
      <div className="img-banner">
        <div className="img-overlay"></div>
        <img src="./img/Home-banner-img.png" alt="Paysage" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="home-gallery">
        {logementsData.map((logement, index) => (
          <NavLink to={`/housing/${logement.id}`} key={index}>
            <div className="card" id={logement.id}>
              <img src={logement.cover} alt="Pièce d'un logement" />
              <h3>{logement.title}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Homecontent;
