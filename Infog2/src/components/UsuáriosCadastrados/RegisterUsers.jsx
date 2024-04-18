import "./Styled.css";
import Modal from "./Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grid from "./Grid/Grid";
import { useEffect, useState } from "react";
import axios from "axios";

function RegisterUsers() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <div className="Container">
        <h2 className="Title">USUÁRIOS</h2>
        <Modal />
        <Grid users={users} />
      </div>
      <ToastContainer autoClose={3000} position="bottom-left" />
    </>
  );
}

export default RegisterUsers;
