import React, { useState } from "react";
import * as s from "./styled-register";
import { icons } from "../../assets";
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
  const [avancar, setAvancar] = useState(true);

  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <>
            {avancar ? (
              <>
                <s.Title>Realizar Cadastro</s.Title>
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
                  password
                  type={"password"}
                  margin
                  src={icons.lock}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Criar senha"
                />
                <GrayInputIcon
                  password
                  type={"password"}
                  margin
                  src={icons.lock}
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  placeholder="Confirmar senha"
                />
                <s.DivButton style={{ justifyContent: "flex-end" }}>
                  <s.Button
                    onClick={() => setAvancar(false)}
                    disabled={
                      !email ||
                      !fantasia ||
                      !cnpj ||
                      !contato ||
                      !senha ||
                      !confirmaSenha
                    }
                  >
                    Avançar
                  </s.Button>
                </s.DivButton>
              </>
            ) : (
              <>
                <s.Title>Cadastro de Endereço</s.Title>
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
                <s.DivButton>
                  <s.Button onClick={() => setAvancar(true)}> Voltar</s.Button>
                  <YellowButtonLoader
                    font={"13.3px"}
                    padding={"5px"}
                    width={"200px"}
                    height={"auto"}
                    disabled={!rua || !numero || !bairro || !cidade || !uf}
                    text={"Confirmar Cadastro"}
                    isLoading={loading}
                    onClick={() => setLoading(!loading)}
                  />
                </s.DivButton>
              </>
            )}
          </>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Register;
