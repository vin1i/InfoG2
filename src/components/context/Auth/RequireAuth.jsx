import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from "prop-types";
import Login from "../../Login/Login";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }
  return children;
};
RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
