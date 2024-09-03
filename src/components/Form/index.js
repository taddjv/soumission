import React, { useState } from "react";
import image from "../../assets/mom.jpg";
import PhoneInput from "react-phone-number-input";
import "./Form.css";

const Form = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [, setOption] = useState("permanante");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      <div className="form-top">
        <div className="ft-title">Assurance Vie</div>{" "}
        <div className="ft-text">
          L'assurance-vie peut aider à couvrir les dépenses telles que les frais
          funéraires, les dettes impayées et les frais de subsistance en cours,
          offrant la tranquillité d'esprit que sa famille sera soutenue en son
          absence.
        </div>
      </div>
      <div className="form-bottom">
        <img className="fb-left" src={image} alt="mom" />
        <div className="fb-right">
          <div className="fbr-title">Obtenez une Soumission</div>
          <form className="fbr-form" onSubmit={handleSubmit}>
            <div className="fbrf-labels">
              <label>
                Prénom *
                <input
                  type="text"
                  required="true"
                  id="first"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
              </label>
              <label>
                Nom *
                <input
                  type="text"
                  id="last"
                  required="true"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                />
              </label>
            </div>
            <label>
              Courriel *
              <input
                type="email"
                id="email"
                required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Téléphone *
              <PhoneInput
                placeholder="Entrez le Numéro de Téléphone"
                value={phone}
                onChange={setPhone}
                defaultCountry="CA"
                id="phone"
                required="true"
              />
            </label>
            <div className="fbrf-options">
              <legend>Sélectionnez une option *</legend>
              <label for="permanante">
                Assurance Vie Pernanante{" "}
                <input
                  type="radio"
                  id="permanante"
                  name="assurance"
                  value="permanante"
                  required="true"
                  onChange={(e) => setOption(e.target.value)}
                />
                <span class="checkmark"></span>
              </label>
              <label for="temporaire">
                Assurance Vie Temporaire{" "}
                <input
                  type="radio"
                  id="temporaire"
                  name="assurance"
                  value="temporaire"
                  required="true"
                  onChange={(e) => setOption(e.target.value)}
                />
                <span class="checkmark"></span>
              </label>
              <label for="hypothecaire">
                Assurance Vie Hypothécaire{" "}
                <input
                  type="radio"
                  id="hypothecaire"
                  name="assurance"
                  value="hypothecaire"
                  required="true"
                  onChange={(e) => setOption(e.target.value)}
                />
                <span class="checkmark"></span>
              </label>
            </div>
            <label>
              Message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button className="fbrf-button">Soumettre</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
