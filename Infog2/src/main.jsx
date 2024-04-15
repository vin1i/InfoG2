import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Routes/Routes.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
