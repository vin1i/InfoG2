import { useState } from "react";
import PropTypes from "prop-types";

function Contact({ onChange }) {
  const [contactInfo, setContactInfo] = useState({
    telefone: "",
    email: "",
  });

  const handleChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
    onChange(contactInfo);
  };

  return (
    <fieldset className="field">
      <legend>Contato</legend>
      <div className="form-group">
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
    </fieldset>
  );
}

Contact.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Contact;
