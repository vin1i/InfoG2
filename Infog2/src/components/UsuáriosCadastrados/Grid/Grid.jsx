import PropTypes from "prop-types";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Grid.css";

function Grid({ users }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      toast.success("Usuário deletado com sucesso!");
    } catch (error) {
      toast.error("Erro ao deletar usuário.");
    }
  };

  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th className="OnlyWeb">Fone</th>
          <th>Endereço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td className="Td" style={{ width: "30%" }}>
              {item.nome}
            </td>
            <td className="Td" style={{ width: "30%" }}>
              {item.email}
            </td>
            <td className="Td OnlyWeb" style={{ width: "20%" }}>
              {item.fone}
            </td>
            <td className="Td Actions" style={{ width: "10%" }}>
              <FaEdit />
            </td>
            <td className="Td Actions" style={{ width: "10%" }}>
              <FaTrash onClick={() => handleDelete(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Grid.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      fone: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Grid;
