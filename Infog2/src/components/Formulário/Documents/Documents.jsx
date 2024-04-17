import PropTypes from "prop-types";

import { useState } from "react";

function Documents({ onChange }) {
  const [documentInfo, setDocumentInfo] = useState({});

  const handleChange = (e) => {
    setDocumentInfo({
      ...documentInfo,
      [e.target.name]: e.target.value,
    });
    onChange(documentInfo);
  };

  return (
    <fieldset className="field">
      <legend>Documentos</legend>
      <div className="form-group">
        <label htmlFor="numIdentidade">Número de Identidade:</label>
        <input
          type="text"
          id="numIdentidade"
          name="numIdentidade"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="orgaoEmissor">Órgão Emissor da Identidade:</label>
        <input
          type="text"
          id="orgaoEmissor"
          name="orgaoEmissor"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ufIdentidade">UF da Identidade:</label>
        <input
          type="text"
          id="ufIdentidade"
          name="ufIdentidade"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="tituloEleitor">Título de Eleitor:</label>
        <input
          type="text"
          id="tituloEleitor"
          name="tituloEleitor"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="secaoTitulo">Seção do Título:</label>
        <input
          type="text"
          id="secaoTitulo"
          name="secaoTitulo"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="zonaTitulo">Zona do Título:</label>
        <input
          type="text"
          id="zonaTitulo"
          name="zonaTitulo"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="carteiraTrabalho">Carteira de Trabalho:</label>
        <input
          type="text"
          id="carteiraTrabalho"
          name="carteiraTrabalho"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="serieCarteira">Série da Carteira:</label>
        <input
          type="text"
          id="serieCarteira"
          name="serieCarteira"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dataEmissaoCarteira">
          Data de Emissão da Carteira:
        </label>
        <input
          type="text"
          id="dataEmissaoCarteira"
          name="dataEmissaoCarteira"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ufCarteira">UF da Carteira:</label>
        <input
          type="text"
          id="ufCarteira"
          name="ufCarteira"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      {/* Add other document info fields */}
    </fieldset>
  );
}

Documents.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Documents;
