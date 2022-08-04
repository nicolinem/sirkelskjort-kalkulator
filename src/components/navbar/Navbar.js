import React from "react";
import "./navbar.css";
import centerimage from "../../assets/CenterImage.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar_center_image">
        <img id="centerimage" src={centerimage} alt="centerimage" />
      </div>

      <div className="navbar">
        <div className="navbar_links_container first_container">
          <p>
            <a href="#kalkulator">Kalkulator</a>
          </p>
          <p>
            <a href="#hvordansy">Hvordan sy sirkelskjørt</a>
          </p>
        </div>
        <div className="navbar_links_container second_container">
          <p>
            <a href="#klippehjelp">Klippehjelp</a>
          </p>
          <p>
            <a href="#utregninger">Om utregningen</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
