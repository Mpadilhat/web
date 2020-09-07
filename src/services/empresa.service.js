import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

const listarEmpresas = () => {
  return new Promise((resolve, reject) => {
    api
      .get(`/empresas`)
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data);
      })
      .catch((e) => reject(e));
  });
};

export { listarEmpresas };
