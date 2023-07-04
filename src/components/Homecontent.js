import { NavLink } from "react-router-dom";
import Logementsdata from "./Logementsdata";

const Homecontent = () => {
  const logementsData = Logementsdata();

  return (
    <div>
      <div className="img-banner">
        <div className="img-overlay"></div>
        <img src="./img/Home-banner-img.png" alt="Paysage" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="home-gallery">
        {logementsData.map((logement, index) => (
          <NavLink to={`${logement.id}`} className="card" key={index}>
            <img src={logement.cover} alt="Pièce d'un logement" />
            <h3>{logement.title}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Homecontent;
