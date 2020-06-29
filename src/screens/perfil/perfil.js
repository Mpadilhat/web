import React, { useState, useCallback } from "react";
import * as s from "./styled-perfil";
import { images, icons } from "../../assets";
import { BlackInputIcon, GrayInput, GrayInputIcon } from "../../components";

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
  const [inputs, setInputs] = useState([""]);
  const [busInputs, setBusInputs] = useState([""]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <s.Body>
      <s.Container>
        <s.Box yellow style={{ marginRight: 20 }}>
          <s.Line>
            <s.DivFoto>
              <s.Foto src={images.logo} />
              <s.DivEdit>
                <s.Icon src={icons.edit} />
              </s.DivEdit>
            </s.DivFoto>
            <s.PrincipalTitle>Meu Perfil</s.PrincipalTitle>
          </s.Line>
          <div>
            <s.Label>Nome fantasia:</s.Label>
            <BlackInputIcon
              margin
              src={icons.empresa}
              placeholder="Nome fantasia"
              value={fantasia}
              onChange={(e) => setFantasia(e.target.value)}
            />
            <s.Label>E-mail:</s.Label>
            <BlackInputIcon
              margin
              src={icons.mail}
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <s.Label>CNPJ:</s.Label>
            <BlackInputIcon
              margin
              src={icons.cnpj}
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <s.Label>Contato:</s.Label>
            <BlackInputIcon
              margin
              src={icons.fone}
              placeholder="Contato"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
            />
            <s.Label>Senha atual:</s.Label>
            <BlackInputIcon
              margin
              type={"password"}
              src={icons.lock}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <s.Label>Confirmar senha:</s.Label>
            <BlackInputIcon
              margin
              type={"password"}
              src={icons.lock}
              placeholder="Confirmar senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
          </div>
          <s.Title style={{ margin: "20px 0 15px 0" }}>
            Dados de Localização
          </s.Title>
          <div>
            <s.Label>Rua:</s.Label>
            <GrayInput
              margin
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              placeholder="Rua"
            />
            <s.Label>Número:</s.Label>
            <GrayInput
              margin
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Número"
            />
            <s.Label>Bairro:</s.Label>
            <GrayInput
              margin
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Bairro"
            />
            <s.Label>Cidade:</s.Label>
            <GrayInput
              margin
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              placeholder="Cidade"
            />
            <s.Label>UF:</s.Label>
            <GrayInput
              margin
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              placeholder="UF"
            />
          </div>
        </s.Box>
        <s.Box gray>
          <s.Title>Meus Veículos</s.Title>
          <div>
            <s.Label>Placa da van:</s.Label>
            {inputs.map((campo, i) => (
              <GrayInputIcon
                key={"input" + i}
                sizeWidth={"30px"}
                sizeHeight={"30px"}
                margin
                src={icons.van}
                value={campo}
                onChange={(e) => {
                  let newInputs = inputs;
                  newInputs[i] = e.target.value;
                  setInputs(newInputs);
                  forceUpdate();
                }}
                placeholder="Placa da van"
              />
            ))}

            <s.DivButton style={{ marginTop: 5, marginBottom: 15 }}>
              <s.IconButton
                src={icons.menos}
                onClick={(e) => {
                  let newInputs = inputs;
                  if (inputs.length !== 1) {
                    newInputs.splice(inputs.length - 1, 1);
                  }
                  setInputs(newInputs);
                  forceUpdate();
                }}
              />

              <s.IconButton
                src={icons.mais}
                onClick={() => {
                  setInputs([...inputs, ""]);
                }}
              />
            </s.DivButton>
            <s.Label>Placa do ônibus:</s.Label>
            {busInputs.map((field, i) => (
              <GrayInputIcon
                key={"bus" + i}
                sizeWidth={"35px"}
                sizeHeight={"35px"}
                padding={"2px 10px 2px 65px"}
                margin
                src={icons.bus}
                value={field}
                onChange={(e) => {
                  let newInputs = busInputs;
                  newInputs[i] = e.target.value;
                  setBusInputs(newInputs);
                  forceUpdate();
                }}
                placeholder="Placa do ônibus"
              />
            ))}
            <s.DivButton style={{ marginTop: 5 }}>
              <s.IconButton
                src={icons.menos}
                onClick={(e) => {
                  let newInputs = busInputs;
                  if (busInputs.length !== 1) {
                    newInputs.splice(busInputs.length - 1, 1);
                  }
                  setBusInputs(newInputs);
                  forceUpdate();
                }}
              />

              <s.IconButton
                src={icons.mais}
                onClick={() => {
                  setBusInputs([...busInputs, ""]);
                }}
              />
            </s.DivButton>
          </div>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Perfil;
