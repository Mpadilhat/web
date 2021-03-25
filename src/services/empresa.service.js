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

const cadastrarEmpresa = (body) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/empresas`, body)
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data[0]);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const buscarEmpresa = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/empresas/${id}`)
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data);
      })
      .catch((e) => reject(e));
  });
};

export { listarEmpresas, cadastrarEmpresa, buscarEmpresa };
