import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";

function Banner() {
  const scroll = () => {
    const element = document.querySelector(".products");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <motion.section
      className="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="banner-title">Soumissions Assurances</span>
      <span className="banner-phrase">Protégez votre avenir financier</span>
      <button className="banner-button" onClick={scroll}>
        Découvrez nos services
      </button>
    </motion.section>
  );
}

export default Banner;
