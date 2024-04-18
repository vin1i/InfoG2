import PropTypes from "prop-types";
import "./Data.css";
// import IconFoto from "../../assets/IconesCadastro/icons8-circle-100.png";
import { useState } from "react";

function BasicInfo({ onChange }) {
  const [photoURL, setPhotoURL] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    nome_pai: "",
    nome_mae: "",
    cpf_cnpj: "",
    estado_civil: "",
    data_nascimento: "",
    apelido: "",
    // Adicione outros campos do formulário aqui conforme necessário
  });
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoURL(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
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
      <legend>Dados Básicos</legend>
      <div className="photo-upload" style={{ display: "flex" }}>
        <label htmlFor="photoInput" className="photo-label">
          <div className="circle">
            {photoURL ? (
              <img src={photoURL} alt="Foto da Pessoa" className="photo" />
            ) : (
              <span>+</span>
            )}
          </div>
          <input
            type="file"
            id="photoInput"
            accept="image/*"
            onChange={handlePhotoChange}
            className="photo-input"
          />
        </label>
      </div>{" "}
      <div className="form-group">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="nome_pai">Nome do Pai:</label>
        <input
          type="text"
          id="nome_pai"
          name="nome_pai"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="nome_mae">Nome da Mãe:</label>
        <input
          type="text"
          id="nome_mae"
          name="nome_mae"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf_cnpj">CPF/CNPJ</label>
        <input
          type="text"
          id="cpf_cnpj"
          name="cpf_cnpj"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      {/* REQUISITAR API AQUI NO ESTADO CIVIL */}
      <div className="form-group">
        <label htmlFor="estado_civil">Estado Civil:</label>
        <select
          id="estado_civil"
          name="estado_civil"
          onChange={handleChange}
          className="select-field"
          defaultValue=""
        >
          <option value="">Selecione o Estado Civil</option>
          <option value="solteiro">Solteiro</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viuvo">Viúvo</option>
          <option value="viuvo">Separado</option>
        </select>
      </div>{" "}
      <div className="form-group">
        <label htmlFor="data_nascimento">
          Data de Nascimento <i className="bx bxs-calendar-alt"></i>
        </label>
        <input
          type="date"
          id="data_nascimento"
          name="data_nascimento"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="apelido">Apelido</label>
        <input
          type="text"
          id="apelido"
          name="apelido"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      {/* Add other basic info fields */}
    </fieldset>
  );
}

BasicInfo.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default BasicInfo;
