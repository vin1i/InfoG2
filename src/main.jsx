import ReactDOM from "react-dom/client";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App.jsx";
import { AuthProvider } from "./components/context/Auth/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
