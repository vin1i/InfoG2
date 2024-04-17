import React from "react";

import ReactDOM from "react-dom/client";
// import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App.jsx";
import { AuthProvider } from "./components/context/Auth/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
