import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="dropdown-position">
      <div className="dropdown">
        <h1>{title}</h1>
        <img src="./img/arrow_icon.png" alt="flèche" onClick={toggleDropdown} />
      </div>
      {openDropdown && <p className="dropdown-content">{content}</p>}
    </div>
  );
};

export default Dropdown;
