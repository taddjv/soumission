import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-top">
        <Router>
          <Link to="/" className="ft-link">
            Mentions légales
          </Link>
          <Link to="/assurance-vie" className="ft-link">
            Politique en matière de cookies
          </Link>
          <Link to="/assurance-invalidite" className="ft-link">
            Politique de confidentialité
          </Link>
          <Link to="/assurance-maladie-grave" className="ft-link">
            Conditions d'utilisation
          </Link>
        </Router>
      </div>
      <div className="footer-bottom">© 2024 par Soumissions Assurances</div>
    </section>
  );
}

export default Footer;
