import PropTypes from "prop-types";
import perfilOptions from "./Data";
import { useState } from "react";
function ComplementaryInfo({ onChange }) {
  const [formData, setFormData] = useState({
    perfil: "",
    funcao: "",
    pix_key: "",
    naturalidade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Chame a função onChange passando os dados atualizados
    onChange(formData);
  };

  return (
    <fieldset className="field">
      <legend className="section-title">Dados Complementares</legend>
      <div className="form-group">
        {" "}
        <label htmlFor="perfil" className="info-label">
          Perfil
          <select
            id="perfil"
            name="perfil"
            className="select-field"
            onChange={handleChange}
            required
            defaultValue=""
          >
            <option value="" disabled>
              Selecione o perfil
            </option>
            {perfilOptions.map((perfil) => (
              <option key={perfil.value} value={perfil.value}>
                {perfil.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-group">
        {" "}
        <label htmlFor="funcao" className="info-label">
          Função
          <input
            type="text"
            id="pix"
            name="funcao"
            className="info-input"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        {" "}
        <label htmlFor="naturalidade" className="info-label">
          Naturalidade
          <input
            type="text"
            id="naturalidade"
            name="naturalidade"
            className="info-input"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="pix" className="info-label">
          Chave PIX
          <input
            type="text"
            id="pix"
            name="chavePix"
            className="info-input"
            onChange={handleChange}
          />
        </label>
      </div>
    </fieldset>
  );
}
ComplementaryInfo.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default ComplementaryInfo;
