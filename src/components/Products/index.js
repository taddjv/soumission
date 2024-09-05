import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import banner from "../../assets/hands.jpg";
import insurance from "../../assets/insurance.png";
import disability from "../../assets/disability.png";
import medical from "../../assets/medical.png";
import { motion } from "framer-motion";

function Products() {
  return (
    <motion.div
      className="products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <img className="products-image" src={banner} alt="" />
      <div className="group-products">
        {" "}
        <div className="product">
          <div className="p-logo">
            <img alt="insurance" src={insurance} className="pl-image" />
          </div>
          <div className="p-title">Assurance Vie</div>
          <div className="p-text">
            L'assurance vie peut aider à couvrir les dépenses telles que les
            frais funéraires, les dettes impayées et les frais de subsistance en
            cours, offrant la tranquillité d'esprit que sa famille sera soutenue
            en son absence.
          </div>
          <Link to="/assurance-vie" className="p-button">
            Plus d'infos
          </Link>
        </div>
        <div className="product">
          <div className="p-logo">
            <img alt="disability" src={disability} className="pl-image" />
          </div>
          <div className="p-title">Assurance Invalidité</div>
          <div className="p-text">
            L'assurance invalidité est un produit financier conçu pour offrir
            une protection en cas d'incapacité de travailler due à une maladie
            ou un accident.
          </div>
          <Link to="/assurance-invalidite" className="p-button">
            Plus d'infos
          </Link>
        </div>
        <div className="product">
          <div className="p-logo">
            <img alt="medical" src={medical} className="pl-image" />
          </div>
          <div className="p-title">Assurance Maladie Grave</div>
          <div className="p-text">
            L'assurance maladie grave est un produit d'assurance destiné à
            offrir un soutien financier en cas de diagnostic de maladies graves
            spécifiées dans le contrat, telles que le cancer, les maladies
            cardiaques majeures, ou les AVC.
          </div>
          <Link to="/assurance-maladie-grave" className="p-button">
            Plus d'infos
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Products;
