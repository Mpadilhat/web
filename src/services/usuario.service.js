import axios from "axios";

const api = axios.create({
  //Se quiser testar local e usar socket.io para real time
  // baseURL: "http://localhost:3333",
  baseURL: "https://us-central1-minha-van-web.cloudfunctions.net/app",
});

const cadastrarUsuario = (body) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/usuarios`, body)
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data);
      })
      .catch((e) => {
        if (e.response.status === 413) reject("A foto é muito pesada!");
        else reject("Erro ao tentar realizar cadastro :(");
      });
  });
};

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
      .put(`/usuarios/${idUser}/foto`, { foto })
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const buscarUsuario = (idUser) => {
  return new Promise((resolve, reject) => {
    api
      .get(`/usuarios/${idUser}`)
      .then((resp) => {
        if (resp.data.message) reject(resp.data.message);
        else resolve(resp.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const deletarUsuario = (idUser) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`/usuarios/${idUser}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

const validaSenha = (body) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/usuarios-senha`, body)
      .then((resp) => {
        if (resp.data.message === "Senha validada") resolve(resp.data.message);
        else reject(resp.data.message);
      })
      .catch((e) => {
        reject("Erro ao tentar validar senha :(");
      });
  });
};

const alterarSenha = (body) => {
  return new Promise((resolve, reject) => {
    api
      .put(`/usuarios-editar-senha`, body)
      .then((resp) => {
        if (resp.data.message.includes("Erro")) reject(resp.data.message);
        else resolve(resp.data.message);
      })
      .catch((e) => {
        reject("Erro ao tentar atualizar senha :(");
      });
  });
};

export {
  logar,
  editarFoto,
  buscarUsuario,
  cadastrarUsuario,
  deletarUsuario,
  validaSenha,
  alterarSenha,
};
