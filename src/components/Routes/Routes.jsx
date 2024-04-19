import { Routes, Route } from "react-router-dom"; // Importe os componentes do react-router-dom
import Home from "../Home/Home";
import Users from "../Users/Users";
import Login from "../Login/Login";
import { RequireAuth } from "../context/Auth/RequireAuth";

import ListUsers from "../UsuáriosCadastrados/ListUsers/ListUsers";

const AppRoutes = () => {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/usuarios" element={<Users />}></Route>{" "}
      <Route
        path="/inicio"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      ></Route>
      <Route path="/lista-usuarios" element={<ListUsers />}></Route>
    </Routes>
  );
};

export default AppRoutes;
