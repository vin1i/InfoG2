import "./home.css";
import toggle from "../../assets/icones/align-justify.png";
import Vector from "../../assets/icones/ic_round-dashboard.png";
import Vector2 from "../../assets/icones/Group 6.png";
import Vector3 from "../../assets/icones/Group.png";
import Vector4 from "../../assets/icones/mdi_customer-service.png";
import Vector5 from "../../assets/icones/system-uicons_clipboard-notes.png";
import Vector6 from "../../assets/icones/ic_outline-settings.png";
import Logo from "../../assets/imagens/Ellipse 18(1).png";
import Card from "./Card";
const Home = () => {
  return (
    <section className="container__home">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="">
                <img className="img__1" src={toggle} alt="" />
              </a>
            </li>

            <li>
              <a href="inicio">
                {" "}
                <img className="img__2" src={Vector} alt="" />
              </a>
            </li>
            <li>
              <a href="usuarios">
                <img className="img__3" src={Vector2} alt="" />
              </a>
            </li>
            <li>
              <img src={Vector3} alt="" />
            </li>
            <li>
              <img src={Vector4} alt="" />
            </li>
            <li>
              <img src={Vector5} alt="" />
            </li>
            <li>
              <img src={Vector6} alt="" />
            </li>
            <li className="image__logo">
              <img src={Logo} alt="" />
            </li>

            {/* Adicione mais itens de menu aqui */}
          </ul>
        </nav>
      </aside>
      <header className="header">
        <div className="title">Utilitários</div>
        <div className="manager">Manager</div>
      </header>
      <Card />
      {/* Adicione o conteúdo principal aqui */}
    </section>
  );
};
export default Home;
