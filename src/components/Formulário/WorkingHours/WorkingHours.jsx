// WorkingHours.js

import PropTypes from "prop-types";
import "./WorkingHours.css";
import { useState } from "react";
function WorkingHours({ onChange }) {
  const [formData, setFormData] = useState({
    dia_util_inicio_manha: "",
    dia_util_fim_manha: "",
    sabado_inicio: "",
    sabado_fim: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    onChange(formData);
  };

  return (
    <fieldset className="field">
      <legend>Horário de Trabalho</legend>
      <div className="day-group">
        <label htmlFor="semana">Dia da semana:</label>
        <div className="time-group">
          <input
            type="time"
            id="dia_util_inicio_manha"
            name="dia_util_inicio_manha"
            placeholder="Início"
            onChange={handleChange}
            className="input-field-hour"
          />

          <input
            type="time"
            id="dia_util_fim_manha"
            name="dia_util_fim_manha"
            placeholder="Fim"
            onChange={handleChange}
            className="input-field-hour"
          />
        </div>
      </div>
      <div className="day-group">
        <label htmlFor="sabado">Sábado:</label>
        <div className="time-group">
          <input
            type="time"
            id="sabado_inicio"
            name="sabado_inicio"
            placeholder="Início"
            onChange={handleChange}
            className="input-field-hour"
          />
          <input
            type="time"
            id="sabado_fim"
            name="sabado_fim"
            placeholder="Fim"
            onChange={handleChange}
            className="input-field-hour"
          />
        </div>
      </div>
    </fieldset>
  );
}

WorkingHours.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default WorkingHours;
