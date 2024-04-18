import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Adress.css";
import { ufOptions } from "./Data";
// import { useApi } from "../../hooks/userApi";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-manager-test.infog2.com.br.infog2.com.br/",
});

const config = {
  headers: {
    Authorization: `Token ${localStorage.getItem("authToken")}`,
  },
};

const Address = ({ onChange }) => {
  const [addressInfo, setAddressInfo] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    cidade: "",
    bairro: "",
    referencia: "",
    complemento: "",
  });

  const [cidades, setCidades] = useState([]);
  const [bairros, setBairros] = useState([]);

  const fetchCidades = async () => {
    try {
      const response = await api.get("/a/cidade/", config);
      setCidades(response.data);

      if (response.data.length > 0) {
        setAddressInfo((prevAddressInfo) => ({
          ...prevAddressInfo,
          cidade: response.data[0].id,
        }));

        const bairrosData = await fetchBairros(response.data[0].id);
        setBairros(bairrosData);
      }
    } catch (error) {
      console.error("Erro ao obter dados das cidades:", error.message);
    }
  };

  const fetchBairros = async (cidadeId) => {
    try {
      const response = await api.get(
        `/a/bairro/?cidade_id=${cidadeId}`,
        config
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao obter lista de bairros:", error.message);
      return [];
    }
  };

  useEffect(() => {
    fetchCidades();
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setAddressInfo((prevAddressInfo) => ({
      ...prevAddressInfo,
      [name]: value,
    }));
    onChange({
      ...addressInfo,
      [name]: value,
    });

    if (name === "cidade") {
      const bairrosData = await fetchBairros(value);
      setBairros(bairrosData);
    }
  };

  // const [addressInfo, setAddressInfo] = useState({
  //   cep: "",
  //   logradouro: "",
  //   numero: "",
  //   // estado: "",
  //   cidade: "",
  //   bairro: "",
  //   referencia: "",
  //   complemento: "",
  // });

  // const [cidades, setCidades] = useState([]);
  // const [bairros, setBairros] = useState([]);

  // const { getCidades, getBairros } = useApi();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const cidadesData = await getCidades();
  //       setCidades(cidadesData);

  //       if (cidadesData.length > 0) {
  //         setAddressInfo({
  //           ...addressInfo,
  //           cidade: cidadesData[0].id,
  //         });
  //         const bairrosData = await getBairros(cidadesData[0].id);
  //         setBairros(bairrosData);
  //       }
  //     } catch (error) {
  //       console.error("Erro ao obter dados:", error.message);
  //     }
  //   };

  //   fetchData();
  // }, [getCidades, getBairros, addressInfo]);

  // const handleChange = async (e) => {
  //   const { name, value } = e.target;
  //   setAddressInfo({
  //     ...addressInfo,
  //     [name]: value,
  //   });
  //   onChange({
  //     ...addressInfo,
  //     [name]: value,
  //   });

  //   // Atualizar os bairros com base na cidade selecionada
  //   if (name === "cidade") {
  //     try {
  //       const bairrosData = await getBairros(value);
  //       setBairros(bairrosData);
  //     } catch (error) {
  //       console.error("Erro ao obter lista de bairros:", error.message);
  //     }
  //   }
  // };

  return (
    <fieldset className="field">
      <legend>Endereço</legend>
      <div className="form-group">
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="logradouro">Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          name="logradouro"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          id="numero"
          name="numero"
          onChange={handleChange}
          className="input-field"
          required
        />
      </div>
      {/* ---------------SELEÇÃO DOS ESTADOS------------------ */}
      <div className="form-group">
        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          name="estado"
          onChange={handleChange}
          className="select-field"
          required
          defaultValue=""
        >
          <option value="">Selecione...</option>

          {ufOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* ---------------SELEÇÃO DOS ESTADOS------------------ */}
      <div className="form-group">
        <label htmlFor="cidade">Cidade:</label>
        <select
          id="cidade"
          name="cidade"
          onChange={handleChange}
          className="select-field"
          required
        >
          <option value="">Selecione a cidade...</option>
          {cidades.map((cidade) => (
            <option key={cidade.id} value={cidade.id}>
              {cidade.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="bairro">Bairro:</label>
        <select
          id="bairro"
          name="bairro"
          onChange={handleChange}
          className="select-field"
          required
        >
          <option value="">Selecione o bairro...</option>
          {bairros.map((bairro) => (
            <option key={bairro.id} value={bairro.id}>
              {bairro.nome}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="referencia">Referência:</label>
        <input
          type="text"
          id="referencia"
          name="referencia"
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="complemento">Complemento:</label>
        <input
          type="text"
          id="complemento"
          name="complemento"
          onChange={handleChange}
          className="input-field"
        />
      </div>
    </fieldset>
  );
};

Address.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Address;
