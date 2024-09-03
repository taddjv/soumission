import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.jpg";
// e, è, é, ê, ë

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-left">
        <img src={logo} alt="logo" className="hl-image" />
        <div className="hl-text">Soumissions Assurances</div>
      </Link>
      <div className="header-right">
        <Link to="/" className="hr-Link">
          Accueil
        </Link>
        <Link to="/assurance-vie" className="hr-Link">
          Assurance Vie
        </Link>
        <Link to="/assurance-invalidite" className="hr-Link">
          Assurance Invalidité
        </Link>
        <Link to="/assurance-maladie-grave" className="hr-Link">
          Assurance Maladie Grave
        </Link>
      </div>
    </header>
  );
}

export default Header;
