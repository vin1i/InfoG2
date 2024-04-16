import toggle from "../../assets/icones/align-justify.png";
import Vector from "../../assets/icones/ic_round-dashboard.png";
import Vector2 from "../../assets/icones/Group 6.png";
import Vector3 from "../../assets/icones/Group.png";
import Vector4 from "../../assets/icones/mdi_customer-service.png";
import Vector5 from "../../assets/icones/system-uicons_clipboard-notes.png";
import Vector6 from "../../assets/icones/ic_outline-settings.png";
import Logo from "../../assets/imagens/Ellipse 18(1).png";
import ghost from "../../assets/iconesHome/Group 783.png";
import "./Users.css";

const Users = () => {
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
              <img className="img__2" src={Vector} alt="" />
            </li>
            <li>
              <a href="">
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
        <div className="title">Utilitários/Usuários</div>
        <div className="manager">Manager</div>
      </header>
      <div className="content__add">
        <h1>Usuários</h1>
        <button className="button__add">+</button>
      </div>
      <div className="container__ghost">
        {" "}
        <img className="img__ghost" src={ghost} alt="" />
      </div>

      {/* Adicione o conteúdo principal aqui */}
    </section>
  );
};

export default Users;
