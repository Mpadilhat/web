import React, { useState, useEffect } from "react";
import * as s from "./styled-perfil";
import { BlackInputIcon } from "../../components";
import { icons } from "../../assets";
import { validaCNPJ } from "../../utils";

const PerfilDados = ({
  fantasia,
  setFantasia,
  email,
  setEmail,
  dataFundacao,
  setDataFundacao,
  cnpj,
  setCnpj,
  contato,
  setContato,
  redeSocial,
  setRedeSocial,
  zonasAtuacao,
  setZonasAtuacao,
  precoMin,
  setPrecoMin,
  precoMax,
  setPrecoMax,
  senha,
  setSenha,
  confirmaSenha,
  setConfirmaSenha,
}) => {
  const [invalidoCnpj, setInvalidoCnpj] = useState(false);
  const [invalidoTelefone, setInvalidoTelefone] = useState(false);
  const [invalidaSenha, setInvalidaSenha] = useState(false);
  const [invalidaConfirmaSenha, setInvalidaConfirmaSenha] = useState(false);
  const [invalidaFantasia, setInvalidaFantasia] = useState(false);
  const [invalidaAtuacao, setInvalidaAtuacao] = useState(false);
  const [invalidaRede, setInvalidaRede] = useState(false);

  useEffect(() => {
    if (
      cnpj !== "" &&
      cnpj !== "__.___.___/____-__" &&
      validaCNPJ(cnpj) === false
    )
      setInvalidoCnpj(true);
    else if (invalidoCnpj) setInvalidoCnpj(false);
  }, [cnpj, invalidoCnpj]);

  useEffect(() => {
    if (
      contato !== "" &&
      contato !== "(__) _ ____-____" &&
      contato.includes("_")
    )
      setInvalidoTelefone(true);
    else if (invalidoTelefone) setInvalidoTelefone(false);
  }, [contato, invalidoTelefone]);

  useEffect(() => {
    if (senha !== "" && senha.length < 5) setInvalidaSenha(true);
    else if (invalidaSenha) setInvalidaSenha(false);
  }, [invalidaSenha, senha]);

  useEffect(() => {
    if (confirmaSenha !== "" && confirmaSenha.length < 5)
      setInvalidaConfirmaSenha(true);
    else if (invalidaConfirmaSenha) setInvalidaConfirmaSenha(false);
  }, [confirmaSenha, invalidaConfirmaSenha]);

  useEffect(() => {
    if (fantasia !== "" && fantasia.length < 3) setInvalidaFantasia(true);
    else if (invalidaFantasia) setInvalidaFantasia(false);
  }, [fantasia, invalidaFantasia]);

  useEffect(() => {
    if (zonasAtuacao !== "" && zonasAtuacao.length < 7)
      setInvalidaAtuacao(true);
    else if (invalidaAtuacao) setInvalidaAtuacao(false);
  }, [invalidaAtuacao, zonasAtuacao]);

  useEffect(() => {
    if (
      redeSocial !== "" &&
      (redeSocial.length < 10 ||
        (!redeSocial.includes("http://") && !redeSocial.includes("https://")))
    )
      setInvalidaRede(true);
    else if (invalidaRede) setInvalidaRede(false);
  }, [invalidaRede, redeSocial]);

  return (
    <>
      <s.DivLabel>
        <s.Label>Nome da empresa:</s.Label>
      </s.DivLabel>

      <BlackInputIcon
        invalid={invalidaFantasia}
        size={"88%"}
        margin
        src={icons.empresa}
        placeholder="Nome fantasia"
        value={fantasia}
        onChange={(e) => setFantasia(e.target.value)}
      />
      <s.DivLabel>
        <s.Label>E-mail:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        readOnly
        size={"88%"}
        margin
        src={icons.mail}
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <s.DivLabel>
        <s.Label>Senha atual:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        invalid={invalidaSenha}
        size={"88%"}
        margin
        type={"password"}
        src={icons.lock}
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <s.DivLabel>
        <s.Label>Nova senha:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        invalid={invalidaConfirmaSenha}
        size={"88%"}
        margin
        type={"password"}
        src={icons.lock}
        placeholder="Nova senha"
        value={confirmaSenha}
        onChange={(e) => setConfirmaSenha(e.target.value)}
      />
      <s.Hr />
      <s.DivLabel>
        <s.Label>Data de fundação:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        type="date"
        size={"88%"}
        margin
        src={icons.empresa}
        value={dataFundacao}
        onChange={(e) => setDataFundacao(e.target.value)}
      />
      <s.DivLabel>
        <s.Label>CNPJ:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        invalid={invalidoCnpj}
        mask={"99.999.999/9999-99"}
        size={"88%"}
        margin
        src={icons.cnpj}
        placeholder="CNPJ"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
      />
      <s.DivLabel>
        <s.Label>Celular:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        invalid={invalidoTelefone}
        mask={"(99) 9 9999-9999"}
        size={"88%"}
        margin
        src={icons.fone}
        placeholder="Contato"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
      />
      <s.DivLabel>
        <s.Label>Rede social favorita:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        invalid={invalidaRede}
        size={"88%"}
        margin
        src={icons.redes}
        placeholder="Ex.: facebook.com/minhavan"
        value={redeSocial}
        onChange={(e) => setRedeSocial(e.target.value)}
      />
      <s.DivLabel>
        <s.Label>Zonas de atuação:</s.Label>
      </s.DivLabel>
      <BlackInputIcon
        invalid={invalidaAtuacao}
        size={"88%"}
        margin
        src={icons.localizacao}
        placeholder="Ex.: Escolas, faculdades e turismo"
        value={zonasAtuacao}
        onChange={(e) => setZonasAtuacao(e.target.value)}
      />

      <s.DivFaixa>
        <s.DivLabel>
          <s.Label style={{ marginLeft: 0 }}>Faixa de preço (R$):</s.Label>
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
    </>
  );
};

export default PerfilDados;
