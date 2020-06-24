import React, { useState } from "react";
import * as s from "./styled-perfil";
import { images, icons } from "../../assets";
import { BlackInputIcon, GrayInput } from "../../components";

const Perfil = () => {
  const [fantasia, setFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato, setContato] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  return (
    <s.Body>
      <s.Container>
        <s.Box yellow>
          <s.Title>Meu Perfil</s.Title>
          <s.DivFoto>
            <s.Foto src={images.logo} />
          </s.DivFoto>
          <s.Title>Dados pessoais</s.Title>
          <BlackInputIcon
            margin
            src={icons.empresa}
            placeholder="Nome fantasia"
            value={fantasia}
            onChange={(e) => setFantasia(e.target.value)}
          />
          <BlackInputIcon
            margin
            src={icons.mail}
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BlackInputIcon
            margin
            src={icons.cnpj}
            placeholder="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
          <BlackInputIcon
            margin
            src={icons.fone}
            placeholder="Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
          />
          <BlackInputIcon
            margin
            type={"password"}
            src={icons.lock}
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <BlackInputIcon
            margin
            type={"password"}
            src={icons.lock}
            placeholder="Confirmar senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />
          <s.Title>Dados de Localização</s.Title>
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
        </s.Box>
        <s.Box gray>
          <s.Title>Meus Veículos</s.Title>
          <BlackInputIcon
            margin
            src={icons.cnpj}
            placeholder="Placa Van"
            value={""}
            // onChange={(e) => setConfirmaSenha(e.target.value)}
          />
          <BlackInputIcon
            margin
            src={icons.eye}
            placeholder="Placa Ônibus"
            value={""}
            // onChange={(e) => setConfirmaSenha(e.target.value)}
          />
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Perfil;
