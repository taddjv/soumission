import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-top">
        <Link to="/" className="ft-link">
          Mentions légales
        </Link>
        <Link to="/" className="ft-link">
          Politique en matière de cookies
        </Link>
        <Link to="/" className="ft-link">
          Politique de confidentialité
        </Link>
        <Link to="/" className="ft-link">
          Conditions d'utilisation
        </Link>
      </div>
      <div className="footer-bottom">© 2024 par Soumissions Assurances</div>
    </section>
  );
}

export default Footer;
