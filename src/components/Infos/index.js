import React from "react";
import "./Infos.css";

function Infos() {
  return (
    <section className="infos">
      <div className="infos-text">
        Besoin de plus d'infos ? Contactez-nous Pour toute question ou demande
        d'information supplémentaire, n'hésitez pas à nous contacter. Nous
        sommes là pour vous aider dans votre parcours d'assurance vie.
      </div>
      <a className="infos-button" href="mailto:info@soumissionsassurance.com">
        Nous joindre
      </a>
    </section>
  );
}

export default Infos;
