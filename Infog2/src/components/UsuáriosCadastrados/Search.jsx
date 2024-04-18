import "./Styled.css";
import { useRef } from "react";
import PropTypes from "prop-types";

function Search({ onSearch }) {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = ref.current.value.trim();
    onSearch(searchTerm);
  };

  return (
    <form className="FormContainer" onSubmit={handleSubmit}>
      <div className="InputArea">
        <label className="Label"></label>
        <input
          ref={ref}
          className="Input"
          placeholder="Nome e CPF"
          name="NOME"
          type="search"
        />
      </div>

      <button type="submit" className="Button">
        +
      </button>
    </form>
  );
}
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
