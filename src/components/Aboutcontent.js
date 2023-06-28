import React from "react";

const Aboutcontent = () => {
  const aboutInfos = ["Fiabilité", "Respect", "Services", "Sécurité"];
  return (
    <div>
      <div className="img-banner">
        <div className="img-overlay"></div>
        <img src="./img/About-banner-img.png" alt="Photo d'un paysage" />
      </div>
      <div className="about-infos">
        {aboutInfos.map((info, index) => (
          <div key={index} className="icon-position">
            <h1>{info}</h1>
            <img src="./img/arrow_icon.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutcontent;
