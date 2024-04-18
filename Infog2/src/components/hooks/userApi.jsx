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

      // let config = {
      //   headers: {
      //     Authorization: `Token ${localStorage.getItem("authToken")}`,
      //   },
      // };

      console.log(headers);
      const body = {};
      const response = await api.post("/a/colaborador/", userData, { headers });
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar usuário");
    }
  },
});
