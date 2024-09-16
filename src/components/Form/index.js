import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import Popup from "../Popup";
import "./Form.css";
import { motion } from "framer-motion";

const Form = ({ data }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState(data?.option || " ");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState(false);
  const form = useRef();
  useEffect(() => {
    const element = document.querySelector(".form");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = "service_4sn6l6j";
    const templateId = "template_2fqpcut";
    const publicKey = "vktr9vYp-nh4im-e9";

    const templateParams = {
      name: first + " " + last,
      type: data.type,
      option: option,
      phone: phone,
      email: email,
      message: message,
    };
    const info = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    };

    try {
      const res = axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        info
      );
      setFirst("");
      setLast("");
      setEmail("");
      setPhone("");
      setOption("");
      setMessage("");
      setPopup(true);
      document.querySelector("body").style.overflow = "hidden";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {popup ? <Popup /> : null}
      <motion.div
        className="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="form-top">
          <div className="ft-title">{data.type}</div>{" "}
          <div className="ft-text">{data.text}</div>
        </motion.div>
        <div className="form-bottom">
          <img className="fb-left" src={data.image} alt="mom" />
          <div className="fb-right">
            <div className="fbr-title">Obtenez une Soumission</div>
            <form className="fbr-form" ref={form} onSubmit={handleSubmit}>
              <div className="fbrf-labels">
                <label>
                  Prénom *
                  <input
                    type="text"
                    required={true}
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
                    required={true}
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
                  required={true}
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
                  required={true}
                />
              </label>
              {data.option && (
                <div className="fbrf-options">
                  <legend>Sélectionnez une option *</legend>
                  <label for="permanante">
                    Assurance Vie Pernanante{" "}
                    <input
                      type="radio"
                      id="permanante"
                      name="assurance"
                      value="permanante"
                      required={true}
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
                      required={true}
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
                      required={true}
                      onChange={(e) => setOption(e.target.value)}
                    />
                    <span class="checkmark"></span>
                  </label>
                </div>
              )}

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
      </motion.div>
    </>
  );
};

export default Form;
