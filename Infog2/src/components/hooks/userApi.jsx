/* eslint-disable no-unused-vars */
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-manager-test.infog2.com.br.infog2.com.br/",
});

// api.interceptors.request.use((config) => {
//   const token = "8d23698c5b30fe6515331ef1ef40e7a903169829";
//   if (token) {
//     config.headers.Authorization = `Token ${token}`;
//   }
//   return config;
// });
const config = {
  headers: {
    Authorization: `Token ${localStorage.getItem("authToken")}`,
  },
};

export const useApi = () => ({
  signin: async (email, password) => {
    const username = email;
    const response = await api.post("/a/auth/login_colaborador/", {
      username,
      password,
    });

    return response.data;
  },

  createUser: async (userData) => {
    try {
      const headers = {
        Authorization: `Token ${localStorage.getItem("authToken")}`,
      };

      const response = await api.post("/a/colaborador/", userData, { headers });

      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar usuário");
    }
  },

  getUsers: async () => {
    try {
      let config = {
        headers: {
          Authorization: `Token ${localStorage.getItem("authToken")}`,
        },
      };
      const res = await api.get("/a/colaborador/?text=", config);
      return res.data.results;
    } catch (error) {
      throw new Error("Erro ao buscar usuários.");
    }
  },

  getSearchUsers: async (searchTerm) => {
    try {
      const response = await api.get(
        `/a/colaborador/?text=${searchTerm}`,
        config
      );

      return response.data.results;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error.message);
      throw new Error("Erro ao buscar usuários");
    }
  },

  // getCidades: async () => {
  //   try {
  //     const response = await api.get("/a/cidade/", config);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Erro ao obter lista de cidades:", error.message);
  //     throw new Error("Erro ao obter lista de cidades");
  //   }
  // },

  // getBairros: async () => {
  //   try {
  //     const response = await api.get("/a/bairro/?cidade_id=1");
  //     return response.data;
  //   } catch (error) {
  //     console.error("Erro ao obter lista de bairros:", error.message);
  //     throw new Error("Erro ao obter lista de bairros");
  //   }
  // },
});
