import icon1 from "../../assets/iconesHome/ant-design_setting-outlined.png";
import icon2 from "../../assets/iconesHome/ph_user-bold.png";
import icon3 from "../../assets/iconesHome/arcticons_permissionsmanager.png";
import icon4 from "../../assets/iconesHome/mdi_file-cancel-outline.png";
import icon5 from "../../assets/iconesHome/icon-park-outline_upload-logs.png";
import icon6 from "../../assets/iconesHome/ph_line-segments.png";
import icon7 from "../../assets/iconesHome/tabler_versions.png";
import icon8 from "../../assets/iconesHome/mdi_calendar-outline.png";
import icon9 from "../../assets/iconesHome/carbon_report.png";
import icon10 from "../../assets/iconesHome/mdi_message-fast-outline.png";
const Card = () => {
  return (
    <div className="card__content">
      <div className="card">
        {" "}
        <img src={icon1} alt="" />
        <h1>Configuração</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon2} alt="" />
        <h1>Usuários</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon3} alt="" />
        <h1>Permissões</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon4} alt="" />
        <h1>Motivo de cancelamento</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon5} alt="" />
        <h1>Logs</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon6} alt="" />
        <h1>Segmentos</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon7} alt="" />
        <h1>Versões</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon8} alt="" />
        <h1>Feriados</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon9} alt="" />
        <h1>Laudos</h1>
      </div>
      <div className="card">
        {" "}
        <img src={icon10} alt="" />
        <h1>Mensagens pré-definidas</h1>
      </div>
    </div>
  );
};
export default Card;
