import { Routes, Route } from "react-router-dom"; // Importe os componentes do react-router-dom
import Home from "../Home/Home";
import Users from "../Users/Users";
import Login from "../Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Usuarios" element={<Users />}></Route>
    </Routes>
  );
};

export default AppRoutes;
