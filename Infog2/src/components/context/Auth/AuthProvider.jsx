// import { useEffect, useState } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import { useApi } from "../../hooks/userApi";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const api = useApi();

  const signin = async (email, password) => {
    const data = await api.signin(email, password);

    if (data.nome && data.token) {
      setUser(data.nome);
      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ user, signin }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
