import React, { useState } from "react";
import * as s from "./styled-register";
import { icons } from "../../assets";
import { GrayInput, YellowButtonLoader, GrayInputIcon } from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
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
  const [avancar, setAvancar] = useState(false);
  const [cadEndereco, setCadEndereco] = useState(false);
  const [cadVeiculos, setCadVeiculos] = useState(true);
  const [van, setVan] = useState([""]);
  const [bus, setBus] = useState([]);
  const [cont, setCont] = useState(0);
  var veiculo = [];

  function addInput() {
    return (
      <GrayInputIcon
        sizeWidth={"30px"}
        sizeHeight={"30px"}
        margin
        src={icons.van}
        value={veiculo[1]}
        onChange={(e) => veiculo.push(e.target.value)}
        placeholder="Placa da van"
      />
    );
  }

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
                <s.DivButton>
                  <s.Button onClick={() => history.push("/")}> Voltar</s.Button>
                  <s.Button
                    onClick={() => {
                      setAvancar(false);
                      setCadEndereco(true);
                    }}
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
            ) : cadEndereco ? (
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
                  <s.Button
                    disabled={!rua || !numero || !bairro || !cidade || !uf}
                    onClick={() => {
                      setAvancar(false);
                      setCadEndereco(false);
                      setCadVeiculos(true);
                    }}
                  >
                    Avançar
                  </s.Button>
                </s.DivButton>
              </>
            ) : (
              cadVeiculos && (
                <>
                  <s.Title>Cadastro de Veículos</s.Title>
                  <GrayInputIcon
                    sizeWidth={"30px"}
                    sizeHeight={"30px"}
                    margin
                    src={icons.van}
                    value={veiculo[0]}
                    onChange={(e) => veiculo.push(e.target.value)}
                    placeholder="Placa da van"
                  />
                  {cont >= 1 && addInput()}
                  <s.DivButton style={{ marginTop: 5, marginBottom: 15 }}>
                    <s.AddRemoveButton> - </s.AddRemoveButton>
                    <s.AddRemoveButton
                      onClick={() => {
                        setCont(cont + 1);
                        // setNewInput(true);
                      }}
                    >
                      +
                    </s.AddRemoveButton>
                  </s.DivButton>
                  <GrayInputIcon
                    sizeWidth={"35px"}
                    sizeHeight={"35px"}
                    padding={"2px 10px 2px 65px"}
                    margin
                    src={icons.bus}
                    value={bus}
                    onChange={(e) => setBus(e.target.value)}
                    placeholder="Placa do ônibus"
                  />
                  <s.DivButton style={{ marginTop: 5 }}>
                    <s.AddRemoveButton>-</s.AddRemoveButton>
                    <s.AddRemoveButton>+ </s.AddRemoveButton>
                  </s.DivButton>
                  <s.DivButton>
                    <s.Button
                      onClick={() => {
                        setCadEndereco(true);
                        setCadVeiculos(false);
                      }}
                    >
                      Voltar
                    </s.Button>
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
              )
            )}
          </>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Register;
