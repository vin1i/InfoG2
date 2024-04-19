import PropTypes from "prop-types";
import ufOptionsDocuments from "./Data";
import { useState } from "react";

function Documents({ onChange }) {
  const [documentInfo, setDocumentInfo] = useState({
    numero_identidade: "",
    orgao_emissor_identidade: "",
    uf_identidade: "",
    numero_titulo_eleitor: "",
    secao_titulo_eleitor: "",
    zona_titulo_eleitor: "",
    numero_carteira_trabalho: "",
    serie_carteira_trabalho: "",
    data_emissao_carteira_trabalho: "",
    uf_carteira_trabalho: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocumentInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));

    onChange(documentInfo);
  };
  return (
    <fieldset className="field">
      <legend>Documentos</legend>
      <div className="form-group">
        <label htmlFor="numero_identidade">Número de Identidade:</label>
        <input
          type="text"
          id="numero_identidade"
          name="numero_identidade"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="orgao_emissor_identidade">
          Órgão Emissor da Identidade:
        </label>
        <input
          type="text"
          id="orgao_emissor_identidade"
          name="orgao_emissor_identidade"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="uf_identidade">UF da Identidade:</label>
        <select
          id="uf_identidade"
          name="uf_identidade"
          onChange={handleChange}
          className="select-field"
          defaultValue=""
        >
          <option value="">Selecione...</option>
          {ufOptionsDocuments.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="numero_titulo_eleitor">Título de Eleitor:</label>
        <input
          type="text"
          id="numero_titulo_eleitor"
          name="numero_titulo_eleitor"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="secao_titulo_eleitor">Seção do Título:</label>
        <input
          type="text"
          id="secao_titulo_eleitor"
          name="secao_titulo_eleitor"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="zona_titulo_eleitor">Zona do Título:</label>
        <input
          type="text"
          id="zona_titulo_eleitor"
          name="zona_titulo_eleitor"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="numero_carteira_trabalho">Carteira de Trabalho:</label>
        <input
          type="text"
          id="numero_carteira_trabalho"
          name="numero_carteira_trabalho"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="serie_carteira_trabalho">Série da Carteira:</label>
        <input
          type="text"
          id="serie_carteira_trabalho"
          name="serie_carteira_trabalho"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="data_emissao_carteira_trabalho">
          Data de Emissão da Carteira:
        </label>
        <input
          type="date"
          id="data_emissao_carteira_trabalho"
          name="data_emissao_carteira_trabalho"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="uf_carteira_trabalho">UF da Carteira:</label>
        <select
          id="uf_carteira_trabalho"
          name="uf_carteira_trabalho"
          onChange={handleChange}
          className="select-field"
          defaultValue=""
        >
          <option value="">Selecione...</option>
          {ufOptionsDocuments.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* Add other document info fields */}
    </fieldset>
  );
}

Documents.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Documents;
