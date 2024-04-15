import "./home.css";
import Vector from "../../assets/icones/ic_round-dashboard.png";
import Vector2 from "../../assets/icones/Group 6.png";
import Vector3 from "../../assets/icones/Group.png";
import Vector4 from "../../assets/icones/mdi_customer-service.png";
import Vector5 from "../../assets/icones/system-uicons_clipboard-notes.png";
import Vector6 from "../../assets/icones/ic_outline-settings.png";
const Home = () => {
  return (
    <div className="container__home">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <img className="img__1" src={Vector} alt="" />
            </li>
            <li>
              <img src={Vector2} alt="" />
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

            {/* Adicione mais itens de menu aqui */}
          </ul>
        </nav>
      </aside>
      <header className="header">
        <div className="title">Utilitários</div>
        <div className="manager">Manager</div>
      </header>

      {/* Adicione o conteúdo principal aqui */}
    </div>
  );
};
export default Home;
