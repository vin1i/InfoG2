// WorkingHours.js

import PropTypes from "prop-types";
import "./WorkingHours.css";
function WorkingHours({ onChange }) {
  const handleChange = (e) => {
    onChange({
      ...onChange,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <fieldset className="field">
      <legend>Horário de Trabalho</legend>
      <div className="day-group">
        <label htmlFor="semana">Dia da semana:</label>
        <div className="time-group">
          <input
            type="text"
            id="inicioSemana"
            name="inicioSemana"
            placeholder="Início"
            onChange={handleChange}
            className="input-field-hour"
          />
          <input
            type="text"
            id="fimSemana"
            name="fimSemana"
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
            type="text"
            id="inicioSabado"
            name="inicioSabado"
            placeholder="Início"
            onChange={handleChange}
            className="input-field-hour"
          />
          <input
            type="text"
            id="fimSabado"
            name="fimSabado"
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
