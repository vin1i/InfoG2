import PropTypes from "prop-types";

function ComplementaryInfo({ onChange }) {
  const handleChange = (e) => {
    onChange({
      ...onChange,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <fieldset className="field">
      <legend className="section-title">Dados Complementares</legend>
      <div className="form-group">
        {" "}
        <label htmlFor="perfil" className="info-label">
          Perfil
          <input
            type="text"
            id="perfil"
            name="perfilFuncionario"
            className="info-input"
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="form-group">
        {" "}
        <label htmlFor="pix" className="info-label">
          Função
          <input
            type="text"
            id="pix"
            name="chavePix"
            className="info-input"
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        {" "}
        <label htmlFor="nacionalidade" className="info-label">
          Nacionalidade
          <input
            type="text"
            id="nacionalidade"
            name="nacionalidade"
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
