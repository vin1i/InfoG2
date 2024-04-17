/* eslint-disable no-unused-vars */
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-manager-test.infog2.com.br.infog2.com.br/",
});

export const useApi = () => ({
  signin: async (email, password) => {
    const username = email;
    const response = await api.post("/a/auth/login_colaborador/", {
      username,
      password,
    });

    return response.data;
  },
});
