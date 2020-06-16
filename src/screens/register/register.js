import React, { useState } from "react";
import * as s from "./styled-register";
import { images, icons } from "../../assets";
import { GrayInput, YellowButtonLoader, GrayInputIcon } from "../../components";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fantasia, setFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato, setContato] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [loading, setLoading] = useState(false);
  const [verSenha, setVerSenha] = useState(false);
  const [verSenha2, setVerSenha2] = useState(false);

  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <s.Title>Cadastro de Endereço</s.Title>
          <>
            <GrayInputIcon
              margin
              src={icons.mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <GrayInputIcon
              margin
              src={icons.empresa}
              value={fantasia}
              onChange={(e) => setFantasia(e.target.value)}
              placeholder="Nome fantasia"
            />
            <GrayInputIcon
              margin
              src={icons.cnpj}
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              placeholder="CNPJ"
            />
            <GrayInputIcon
              margin
              src={icons.fone}
              value={contato}
              onChange={(e) => setContato(e.target.value)}
              placeholder="Contato"
            />
            <GrayInputIcon
              type={"password"}
              margin
              src={icons.lock}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Criar senha"
            />
            <GrayInputIcon
              type={"password"}
              margin
              src={icons.lock}
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              placeholder="Confirmar senha"
            />
            <GrayInput
              margin
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              placeholder="Rua"
            />
            <GrayInput
              margin
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Número"
            />
            <GrayInput
              margin
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Bairro"
            />
            <GrayInput
              margin
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Cidade"
            />
            <GrayInput
              margin
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="UF"
            />
            <YellowButtonLoader
              disabled={!rua || !numero || !bairro || !cidade || !uf}
              text={"Cadastrar Endereço"}
              isLoading={loading}
              onClick={() => setLoading(!loading)}
            />
            <s.Link href="/">Voltar</s.Link>
          </>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Register;
