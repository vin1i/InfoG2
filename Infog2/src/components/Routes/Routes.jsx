import { Routes, Route } from "react-router-dom"; // Importe os componentes do react-router-dom
import Home from "../Home/Home";
import Users from "../Users/Users";
import Login from "../Login/Login";
import { RequireAuth } from "../context/Auth/RequireAuth";

const AppRoutes = () => {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Login />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Usuarios" element={<Users />}></Route>{" "}
      <Route
        path="/Home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      ></Route>
      <Route path="/Usuarios" element={<Users />}></Route>
    </Routes>
  );
};

export default AppRoutes;
