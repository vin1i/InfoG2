import { useState } from "react";
import PropTypes from "prop-types";
import "./Adress.css";
import { ufOptions } from "./Data";
function Address({ onChange }) {
  const [addressInfo, setAddressInfo] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    // estado: "",
    cidade: "",
    bairro: "",
    referencia: "",
    complemento: "",
  });

  const handleChange = (e) => {
    setAddressInfo({
      ...addressInfo,
      [e.target.name]: e.target.value,
    });
    onChange(addressInfo);
  };

  return (
    <fieldset className="field">
      <legend>Endereço</legend>
      <div className="form-group">
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="logradouro">Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          name="logradouro"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          id="numero"
          name="numero"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      {/* ---------------SELEÇÃO DOS ESTADOS------------------ */}
      <div className="form-group">
        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          name="estado"
          onChange={handleChange}
          className="select-field"
          required
          defaultValue=""
        >
          <option value="">Selecione...</option>

          {ufOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* ---------------SELEÇÃO DOS ESTADOS------------------ */}
      <div className="form-group">
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="referencia">Referência:</label>
        <input
          type="text"
          id="referencia"
          name="referencia"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="complemento">Complemento:</label>
        <input
          type="text"
          id="complemento"
          name="complemento"
          onChange={handleChange}
          className="input-field"
        />
      </div>
    </fieldset>
  );
}

Address.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Address;
