import PropTypes from "prop-types";
import "./Data.css";
// import IconFoto from "../../assets/IconesCadastro/icons8-circle-100.png";
import { useState } from "react";

function BasicInfo({ onChange }) {
  const [photoURL, setPhotoURL] = useState(""); // Estado para armazenar a URL da foto

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoURL(event.target.result); // Define a URL da foto
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    onChange({
      ...onChange,
      [e.target.name]: e.target.value,
    });
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
        <label htmlFor="nomePai">Nome do Pai:</label>
        <input
          type="text"
          id="nomePai"
          name="nomePai"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="nomeMae">Nome da Mãe:</label>
        <input
          type="text"
          id="nomeMae"
          name="nomeMae"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      {/* REQUISITAR API AQUI NO ESTADO CIVIL */}
      <div className="form-group">
        <label htmlFor="estadoCivil">Estado Civil:</label>
        <select
          id="estadoCivil"
          name="estadoCivil"
          onChange={handleChange}
          className="input-field options"
        >
          <option value="">Selecione o Estado Civil</option>
          <option value="solteiro">Solteiro</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viuvo">Viúvo</option>
        </select>
      </div>{" "}
      {/* REQUISITAR API AQUI NO ESTADO CIVIL */}
      <div className="form-group">
        <label htmlFor="dataNascimento">
          Data de Nascimento <i className="bx bxs-calendar-alt"></i>
        </label>
        <input
          type="text"
          id="dataNascimento"
          name="dataNascimento"
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
