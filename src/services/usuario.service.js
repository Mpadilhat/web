import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

const logar = (email, senha) => {
  return new Promise((resolve, reject) => {
    let body = { email, senha };
    api
      .post(`/usuarios-login`, body)
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data[0]);
      })
      .catch((e) => {
        reject("Erro ao tentar login :(");
      });
  });
};

const editarFoto = (idUser, foto) => {
  return new Promise((resolve, reject) => {
    api
      .put(`/usuarios/${idUser}/foto`, foto)
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data[0]);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export { logar, editarFoto };
