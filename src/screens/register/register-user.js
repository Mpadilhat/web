import React, { useState, useEffect } from "react";
import * as s from "./styled-register";
import { GrayInputIcon } from "../../components";
import { icons } from "../../assets";
import Compress from "compress.js";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { validaCNPJ, validaEmail } from "../../utils";

const RegisterUser = ({
  foto,
  setFoto,
  fantasia,
  setFantasia,
  dataFundacao,
  setDataFundacao,
  cnpj,
  setCnpj,
  contato,
  setContato,
  redes,
  setRedes,
  email,
  setEmail,
  senha,
  setSenha,
  confirmaSenha,
  setConfirmaSenha,
  atuacao,
  setAtuacao,
  precoMin,
  setPrecoMin,
  precoMax,
  setPrecoMax,
  setAvancar,
  setCadEndereco,
  history,
}) => {
  const compress = new Compress();
  const [invalidoCnpj, setInvalidoCnpj] = useState(false);
  const [invalidoEmail, setInvalidoEmail] = useState(false);
  const [invalidoTelefone, setInvalidoTelefone] = useState(false);
  const [invalidaSenha, setInvalidaSenha] = useState(false);
  const [invalidaConfirmaSenha, setInvalidaConfirmaSenha] = useState(false);

  const fileChange = (file) => {
    if (file) {
      compress
        .compress([file], {
          size: 0.5,
          quality: 0.5,
          resize: true,
        })
        .then((foto) => {
          let novaFoto = foto[0].prefix + foto[0].data;
          setFoto(novaFoto);
        })
        .catch(() => {
          ToastsStore.error(`Ocorreu um erro no upload de ${file.name}!`);
        });
    }
  };

  useEffect(() => {
    if (
      cnpj !== "" &&
      cnpj !== "__.___.___/____-__" &&
      validaCNPJ(cnpj) === false
    )
      setInvalidoCnpj(true);
    else if (invalidoCnpj) setInvalidoCnpj(false);
  }, [cnpj, invalidoCnpj, setInvalidoCnpj]);

  useEffect(() => {
    if (email !== "" && validaEmail(email) === false) setInvalidoEmail(true);
    else if (invalidoEmail) setInvalidoEmail(false);
  }, [email, invalidoEmail, setInvalidoEmail]);

  useEffect(() => {
    if (
      contato !== "" &&
      contato !== "(__) _ ____-____" &&
      contato.includes("_")
    )
      setInvalidoTelefone(true);
    else if (invalidoTelefone) setInvalidoTelefone(false);
  }, [contato, invalidoTelefone, setInvalidoTelefone]);

  useEffect(() => {
    if (senha !== "" && senha.length < 5) setInvalidaSenha(true);
    else if (invalidaSenha) setInvalidaSenha(false);
  }, [senha, invalidaSenha, setInvalidaSenha]);

  useEffect(() => {
    if (confirmaSenha !== "" && confirmaSenha.length < 5)
      setInvalidaConfirmaSenha(true);
    else if (invalidaConfirmaSenha) setInvalidaConfirmaSenha(false);
  }, [confirmaSenha, invalidaConfirmaSenha, setInvalidaConfirmaSenha]);

  return (
    <>
      <ToastsContainer store={ToastsStore} />
      <s.Title>Realizar Cadastro</s.Title>

      <s.DivLabel style={{ textAlign: "center", opacity: 0.75 }}>
        <s.Label>* Todos os campos deste cadastro são obrigatórios *</s.Label>
      </s.DivLabel>
      <s.DivFoto>
        <s.Foto src={foto ? foto : icons.perfil} alt="foto" />
        <s.Label htmlFor="foto" style={{ cursor: "pointer" }}>
          Adicione uma foto pública da empresa
        </s.Label>
      </s.DivFoto>

      <input
        type="file"
        accept=".jpg, .gif, .png, .jpeg"
        style={{ display: "none" }}
        id="foto"
        onChange={(e) => fileChange(e.target.files[0])}
      />

      <GrayInputIcon
        margin
        src={icons.empresa}
        value={fantasia}
        onChange={(e) => setFantasia(e.target.value)}
        placeholder="Nome fantasia"
      />

      <GrayInputIcon
        invalid={invalidoCnpj}
        mask={"99.999.999/9999-99"}
        margin
        src={icons.cnpj}
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
        placeholder="CNPJ"
      />
      <GrayInputIcon
        invalid={invalidoTelefone}
        mask={"(99) 9 9999-9999"}
        margin
        src={icons.fone}
        value={contato}
        onChange={(e) => setContato(e.target.value)}
        placeholder="Contato"
      />
      <GrayInputIcon
        margin
        src={icons.redes}
        value={redes}
        onChange={(e) => setRedes(e.target.value)}
        placeholder="Rede social favorita"
      />

      <s.DivLabel top>
        <s.Label>
          *As senhas devem ter no mímino 5 caracteres e ser iguais
        </s.Label>
      </s.DivLabel>
      <GrayInputIcon
        invalid={invalidoEmail}
        type="email"
        margin
        src={icons.mail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />

      <GrayInputIcon
        invalid={invalidaSenha}
        password
        type={"password"}
        margin
        src={icons.lock}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Criar senha"
      />
      <GrayInputIcon
        invalid={invalidaConfirmaSenha}
        password
        type={"password"}
        margin
        src={icons.lock}
        value={confirmaSenha}
        onChange={(e) => setConfirmaSenha(e.target.value)}
        placeholder="Confirmar senha"
      />

      <s.DivLabel top>
        <s.Label>Data de fundação:</s.Label>
      </s.DivLabel>

      <GrayInputIcon
        type="date"
        margin
        src={icons.empresa}
        value={dataFundacao}
        onChange={(e) => setDataFundacao(e.target.value)}
      />

      <s.DivLabel style={{ marginTop: 10 }}>
        <s.Label>Zonas de atuação:</s.Label>
      </s.DivLabel>
      <GrayInputIcon
        sizeWidth={"28px"}
        sizeHeight={"35px"}
        margin
        src={icons.localizacao}
        value={atuacao}
        onChange={(e) => setAtuacao(e.target.value)}
        placeholder="Ex.: Escolas, faculdades e turismo"
      />
      <s.DivFaixa>
        <s.DivLabel>
          <s.Label>Faixa de preço:</s.Label>
        </s.DivLabel>
        <s.DivPreco>
          <s.Label space left>
            De
          </s.Label>
          <s.Number
            placeholder={"R$"}
            value={precoMin}
            onChange={(e) => {
              let regEx = e.target.value.match(/[0-9]/g);
              if (regEx) regEx = regEx.join("");
              let temp = precoMin;
              if (regEx === null || regEx < 1) temp = "";
              else temp = regEx;
              setPrecoMin(temp);
            }}
          />
          <s.Label space>Até</s.Label>
          <s.Number
            placeholder={"R$"}
            value={precoMax}
            onChange={(e) => {
              let regEx = e.target.value.match(/[0-9]/g);
              if (regEx) regEx = regEx.join("");
              let temp = precoMax;
              if (regEx === null || regEx < 1) temp = "";
              else temp = regEx;
              setPrecoMax(temp);
            }}
          />
        </s.DivPreco>
      </s.DivFaixa>
      <s.DivButton>
        <s.Button onClick={() => history.push("/")}> Voltar</s.Button>
        <s.Button
          onClick={() => {
            setAvancar(false);
            setCadEndereco(true);
          }}
          disabled={
            !foto ||
            !fantasia ||
            !dataFundacao ||
            !cnpj ||
            invalidoCnpj ||
            !contato ||
            invalidoTelefone ||
            !redes ||
            !email ||
            invalidoEmail ||
            !senha ||
            invalidaSenha ||
            !confirmaSenha ||
            invalidaConfirmaSenha ||
            senha !== confirmaSenha ||
            !atuacao ||
            !precoMin ||
            !precoMax
          }
        >
          Avançar
        </s.Button>
      </s.DivButton>
    </>
  );
};

export default RegisterUser;
