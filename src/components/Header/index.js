import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import insurance from "../../assets/insurance.png";
import disability from "../../assets/disability.png";
import medical from "../../assets/medical.png";
import facebook from "../../assets/facebookk.png";
import { motion } from "framer-motion";
// import { DisplayP3ColorSpace } from "three";
// e, è, é, ê, ë

function Header() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const [open, setOpen] = useState(false);

  const variants = {
    show: {
      opacity: 1,
      x: -screenWidth,
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          bounce: 0.3,
        },
      },
    },
    hide: {
      opacity: 0,
      display: "none",
      x: -screenWidth,
      y: -screenHeight / 5,
      transition: {
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          bounce: 0.3,
        },
      },
    },
  };

  return (
    <header className="header">
      <Link
        to="/"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
          const element = document.querySelector(".banner");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        className="header-left"
      >
        <img src={logo} alt="logo" className="hl-image" />
        <div className="hl-text">Soumissions Assurances</div>
      </Link>
      <div className="header-right">
        {screenWidth > 900 ? (
          <>
            <Link to="/assurance-vie" className="hr-Link">
              Assurance Vie
            </Link>
            <Link to="/assurance-invalidite" className="hr-Link">
              Assurance Invalidité
            </Link>
            <Link to="/assurance-maladie-grave" className="hr-Link">
              Assurance Maladie Grave
            </Link>{" "}
          </>
        ) : (
          <div
            onClick={() => {
              if (open) {
                setOpen(false);
              } else {
                setOpen(true);
              }
            }}
            className={open ? "hr-button hr-bmiddle" : "hr-button"}
          >
            <div className={open ? "hrb-top" : null}></div>
            <div></div>
            <div className={open ? "hrb-bottom" : null}></div>
          </div>
        )}
      </div>

      <motion.div
        className="header-menu"
        variants={variants}
        animate={open ? "show" : "hide"}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Link
          to="/assurance-vie"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="hm-option"
        >
          <img alt="insurance" src={insurance} className="hmo-image" />
          <div>Assurance Vie</div>
        </Link>
        <Link
          to="/assurance-invalidite"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="hm-option"
        >
          <img alt="disability" src={disability} className="hmo-image" />
          <div>Assurance Invalidité</div>
        </Link>
        <Link
          to="/assurance-maladie-grave"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="hm-option"
        >
          <img alt="medical" src={medical} className="hmo-image" />
          <div>Assurance Maladie Grave</div>
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=61565397951007">
          <img alt="medical" src={facebook} className="hmo-image2" />
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
