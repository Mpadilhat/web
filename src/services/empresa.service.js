import axios from "axios";

const api = axios.create({
  //Se quiser testar local e usar socket.io para real time
  // baseURL: "http://localhost:3333",
  baseURL: "https://us-central1-minha-van-web.cloudfunctions.net/app",
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

const deletarEmpresa = (id) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`/empresas/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const atualizarVeiculos = (id, body) => {
  return new Promise((resolve, reject) => {
    api
      .put(`/empresas-veiculos/${id}`, body)
      .then((resp) => {
        if (resp.data.message.includes("Erro")) reject(resp.data.message);
        else resolve(resp.data.message);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const atualizarEmpresa = (id, body) => {
  return new Promise((resolve, reject) => {
    api
      .put(`/empresas/${id}`, body)
      .then((resp) => {
        if (resp.data.message.includes("Erro")) reject(resp.data.message);
        else resolve(resp.data.message);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export {
  listarEmpresas,
  cadastrarEmpresa,
  buscarEmpresa,
  deletarEmpresa,
  atualizarVeiculos,
  atualizarEmpresa,
};
