import "./login.css";
import backgroundImage from "../../assets/imagens/image 5.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthContext";

function Login() {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await auth.signin(email, password);
        console.log("Response from API:", response);

        if (response) {
          navigate("/home");
        } else {
          alert("Credenciais inválidas. Por favor, tente novamente.");
        }
      } catch (error) {
        console.error("Error during signin:", error);
        alert("Credenciais inválidas. Por favor, tente novamente.");
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  //   if (email && password) {
  //     const isLogged = await auth.signin(email, password);
  //     console.log(isLogged);
  //     if (isLogged) {
  //       navigate("/home");
  //     } else {
  //       alert("Não está logado");
  //     }
  //   }
  // };

  return (
    <section className="section__container">
      <div className="container">
        <div className="container-login">
          <div className="image-container">
            <img src={backgroundImage} className="img" alt="Imagem de fundo" />
          </div>
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title">Login</span>

              <span className="login-form-title"></span>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

              <div className="container-login-form-btn">
                <button onClick={HandleSubmit} className="login-form-btn">
                  Entrar
                </button>
              </div>

              <div className="text-center">
                <span className="posse__conta"></span>
                <a href="" className="forgot__password">
                  Esqueceu sua senha?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
