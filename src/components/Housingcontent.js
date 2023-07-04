import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Logementsdata from "./Logementsdata";
import Dropdown from "./Dropdown";

const Housingcontent = () => {
  const { id } = useParams();
  const logementsData = Logementsdata();
  const logement = logementsData.find((logement) => logement.id === id);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!logement) {
    return <div>Logement introuvable.</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === logement.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? logement.pictures.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="carrousel-position">
        <div className="carrousel">
          <img
            className="current-img"
            src={logement.pictures[currentSlide]}
            alt=""
          />
          {logement.pictures.length > 1 && (
            <>
              <img
                className="arrow left-arrow"
                src="./img/left-arrow.png"
                onClick={previousSlide}
              />
              <img
                className="arrow right-arrow"
                src="./img/right-arrow.png"
                onClick={nextSlide}
              />
              <span className="carrousel_slide-number">
                {currentSlide + 1}/{logement.pictures.length}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="infos-position">
        <div className="logement-infos">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
        <div className="host-infos">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt="" />
        </div>
      </div>
      <div className="housing-dropdown">
        <Dropdown title="Description" content={<p>{logement.description}</p>} />
        <Dropdown
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Housingcontent;
