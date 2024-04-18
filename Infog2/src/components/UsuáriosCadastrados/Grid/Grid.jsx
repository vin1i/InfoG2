import PropTypes from "prop-types";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Grid.css";

function Grid({ users, onDelete }) {
  const handleDelete = async (id) => {
    try {
      onDelete(id);
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
          <th>Status</th>
          <th>CPF/CNPJ</th>
          <th className="OnlyWeb">Fone</th>
          <th>Endereço</th>
          <th>Editar</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.id}>
            <td className="Td" style={{ width: "30%" }}>
              {item.nome}
            </td>
            <td
              className={`Td ${item.status === "Ativo" ? "Ativo" : ""}`}
              style={{ width: "6%" }}
            >
              {item.status}
            </td>
            <td className="Td" style={{ width: "30%" }}>
              {item.cpf_cnpj_formatado}
            </td>

            <td className="Td " style={{ width: "25%" }}>
              {item.endereco_residencial}
            </td>
            <td className="Td Actions" style={{ width: "20%" }}>
              <FaEdit />
            </td>
            <td className="Td Actions" style={{ width: "20%" }}>
              <FaTrash onClick={() => handleDelete(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Grid.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Grid;
