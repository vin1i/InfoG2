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
import "./Form.css";
import BasicInfo from "../Formulário/BasicData/Data";
import ComplementaryInfo from "../Formulário/DadosComplementares/ComplementaryInfo";
import WorkingHours from "../Formulário/WorkingHours/WorkingHours";
import Documents from "../Formulário/Documents/Documents";
import Address from "../Formulário/Adress/Adress";
import Contact from "../Formulário/Contact/Contact";
import { useApi } from "../hooks/userApi";
import { useNavigate } from "react-router-dom";

const Users = () => {
  /*--------------------------------*/
  const [toggleState, setToggleState] = useState(0);
  const navigate = useNavigate();
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
    const userJson = {
      endereco_residencial: userData.endereco_residencial,
      estado_civil: "1",
      naturalidade: userData.complementaryInfo.naturalidade,
      nome_pai: userData.basicInfo.nome_pai,
      nome_mae: userData.basicInfo.nome_mae,
      numero_identidade: userData.documentInfo.numero_identidade,
      orgao_emissor_identidade: userData.documentInfo.orgao_emissor_identidade,
      uf_identidade: "22",
      numero_titulo_eleitor: userData.documentInfo.numero_titulo_eleitor,
      secao_titulo_eleitor: userData.documentInfo.secao_titulo_eleitor,
      zona_titulo_eleitor: userData.documentInfo.zona_titulo_eleitor,
      numero_carteira_trabalho: userData.documentInfo.numero_carteira_trabalho,
      serie_carteira_trabalho: userData.documentInfo.serie_carteira_trabalho,
      data_emissao_carteira_trabalho: null,
      uf_carteira_trabalho: "22",
      data_admissao: null,
      data_demissao: null,
      perfil: userData.complementaryInfo.perfil,
      funcao: userData.complementaryInfo.funcao,
      pix_key: userData.complementaryInfo.pix_key,
      nome: userData.basicInfo.nome,
      apelido: userData.basicInfo.apelido,
      cpf_cnpj: userData.basicInfo.cpf_cnpj,
      telefone: userData.contactInfo.telefone,
      email: userData.contactInfo.email,
      data_nascimento: "01/03/1975",
      horario_colaborador: {
        dia_util_inicio_manha: "08:00",
        dia_util_fim_manha: "12:00",
        dia_util_inicio_tarde: "14:00",
        dia_util_fim_tarde: "18:00",
        sabado_inicio: "08:00",
        sabado_fim: "12:00",
      },
    };
    try {
      const response = await createUser(userJson);
      console.log("Usuário criado com sucesso:", response);
      console.log(response);

      navigate("/lista-usuarios");
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
            <button className="btn__form save" type="submit">
              Salvar{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Users;
