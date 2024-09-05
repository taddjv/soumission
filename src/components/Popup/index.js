import React from "react";
import { useNavigate } from "react-router-dom";
import "./Popup.css";
import check from "../../assets/check.gif";
import { motion } from "framer-motion";

const Popup = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className="popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pop-container">
          <img src={check} alt="check" />
          <div className="pop-title">Merci pour votre demande.</div>
          <div className="pop-text">
            Un conseiller financier vous contacterai dans un delai de 24h.
          </div>
          <button
            className="pop-button"
            onClick={() => {
              navigate("/");
              document.querySelector("body").style.overflow = "scroll";
            }}
          >
            Retourner
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Popup;
