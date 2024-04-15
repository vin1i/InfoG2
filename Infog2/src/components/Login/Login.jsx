import "./login.css";
import backgroundImage from "../../assets/image 5.png";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    // <div className="container">
    //   <div className="form-image">
    //     <img src={backgroundImage} alt="" />
    //   </div>
    //   <div className="form">
    //     <form action="#">
    //       <div className="form-header">
    //         <div className="title">
    //           <h1>Login</h1>
    //         </div>
    //         <div className="login-button">
    //           <button>
    //             <a href="#">Entrar</a>
    //           </button>
    //         </div>
    //       </div>{" "}
    //       <div className="input-group">
    //         <div className="input-box">
    //           <label htmlFor="email">Email</label>
    //           <input
    //             id="email"
    //             type="email"
    //             name="email"
    //             placeholder="Digite seu Email"
    //             required
    //           />
    //         </div>
    //       </div>
    //       <div className="input-group">
    //         <div className="input-box">
    //           <label htmlFor="firstname">Senha</label>
    //           <input
    //             id="firstname"
    //             type="text"
    //             name="firstname"
    //             placeholder="Digite sua senha"
    //             required
    //           />
    //         </div>
    //       </div>
    //       <div className="continue-button">
    //         <button>
    //           <a href="#">Entrar</a>
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    //</div>
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
                <a href="home" className="login-form-btn">
                  Entrar
                </a>
              </div>

              <div className="text-center">
                <span className="posse__conta"></span>
                <a href="register" className="forgot__password">
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
