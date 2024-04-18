import { useState } from "react";
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
import "../Home/home.css";
import "../Formulário/Cadastro/Cadastro.css";
import BasicInfo from "../Formulário/BasicData/Data";
import ComplementaryInfo from "../Formulário/DadosComplementares/ComplementaryInfo";
import WorkingHours from "../Formulário/WorkingHours/WorkingHours";
import Documents from "../Formulário/Documents/Documents";
import Address from "../Formulário/Adress/Adress";
import Contact from "../Formulário/Contact/Contact";
import { useApi } from "../hooks/userApi";

const Users = () => {
  /*--------------------------------*/
  const [toggleState, setToggleState] = useState(0);
  /*--------------------------------*/
  const toggleTab = (index) => {
    setToggleState(index);
  };
  /*--------------------------------*/
  const { createUser } = useApi();
  /*--------------------------------*/
  const [basicInfo, setBasicInfo] = useState({});
  const [complementaryInfo, setComplementaryInfo] = useState({});
  const [workingInfo, setWorkingInfo] = useState({});
  const [documentInfo, setDocumentInfo] = useState({});
  const [endereco_residencial, setAdressInfo] = useState({});
  const [contactInfo, setContactInfo] = useState({});

  /*--------------------------------*/

  const handleBasicInfoChange = (info) => {
    setBasicInfo(info);
  };

  const handleComplementaryInfoChange = (info) => {
    setComplementaryInfo(info);
  };

  const handleWorkingInfoChange = (info) => {
    setWorkingInfo(info);
  };

  const handleDocumentInfoChange = (info) => {
    setDocumentInfo(info);
  };

  const handleAdressInfoChange = (info) => {
    setAdressInfo(info);
  };

  const handleContactInfoChange = (info) => {
    setContactInfo(info);
  };
  /*--------------------------------*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      basicInfo,
      complementaryInfo,
      workingInfo,
      documentInfo,
      endereco_residencial,
      contactInfo,
    };

    try {
      const response = await createUser(userData);
      console.log("Usuário criado com sucesso:", response);

      setBasicInfo({});
      setComplementaryInfo({});
      setWorkingInfo({});
      setDocumentInfo({});
      setAdressInfo({});
      setContactInfo({});
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <section className="container__home">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="home">
                <img className="img__1" src={toggle} alt="" />
              </a>
            </li>

            <li>
              <a href="home">
                {" "}
                <img className="img__2" src={Vector} alt="" />
              </a>
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
        <h1>Usuários</h1>{" "}
        <button className="button__add" onClick={() => toggleTab(1)}>
          +
        </button>
      </div>
      <div className="container__ghost">
        {" "}
        <img className="img__ghost" src={ghost} alt="" />
      </div>

      <div
        className={
          toggleState === 1 ? "cadastro__modal active-modal" : "cadastro__modal"
        }
      >
        <div className="cadastro__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times cadastro__modal-close"
          ></i>
          <form onSubmit={handleSubmit}>
            <BasicInfo onChange={handleBasicInfoChange} />
            <ComplementaryInfo onChange={handleComplementaryInfoChange} />
            <WorkingHours onChange={handleWorkingInfoChange} />
            <Documents onChange={handleDocumentInfoChange} />
            <Address onChange={handleAdressInfoChange} />
            <Contact onChange={handleContactInfoChange} />
            <button
              onClick={() => toggleTab(0)}
              className="btn__form cancel"
              type="button"
            >
              Cancelar
            </button>
            <button
              onClick={() =>
                createUser({
                  nome: basicInfo.nome,
                  sobrenome: basicInfo.sobrenome,
                  email: contactInfo.email,
                  telefone: contactInfo.telefone,
                })
              }
              className="btn__form save"
              type="submit"
            >
              Salvar{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Users;
