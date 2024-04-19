import { useEffect, useState } from "react";
import { useApi } from "../../hooks/userApi";
import Grid from "../Grid/Grid";
import Search from "../Search";

function RegisterUsers() {
  const { getUsers } = useApi();
  const { getSearchUsers } = useApi();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (term) => {
    setSearchTerm(term);
    try {
      const results = await getSearchUsers(term);
      setUsers(results);
    } catch (error) {
      console.error("Erro ao buscar usuários.");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error.message);
      }
    };

    fetchUsers();
  }, [searchTerm]);

  const handleDelete = async (id) => {
    try {
      console.log("Usuário deletado com ID:", id);

      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Erro ao deletar usuário:", error.message);
    }
  };

  return (
    <>
      <div className="Container">
        <h2 className="Title">USUÁRIOS</h2>
        <Search onSearch={handleSearch} />
        <Grid users={users} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default RegisterUsers;
