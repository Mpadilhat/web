import React, { useState, useCallback, useEffect } from "react";
import * as s from "./styled-register";
import { icons } from "../../assets";
import {
  GrayInput,
  YellowButtonLoader,
  GrayInputIcon,
  ModalCoordenadas,
} from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [fantasia, setFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato, setContato] = useState("");
  const [redes, setRedes] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [atuacao, setAtuacao] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(false);
  const [avancar, setAvancar] = useState(true);
  const [cadEndereco, setCadEndereco] = useState(false);
  const [cadVeiculos, setCadVeiculos] = useState(false);
  const [inputs, setInputs] = useState([""]);
  const [busInputs, setBusInputs] = useState([""]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const body = {
    user: {
      email,
      senha,
    },
    empresa: fantasia,
    cnpj,
    contato,
    redeSocial: redes,
    email,
    endereco: [rua, numero, bairro, cidade, uf],
    coordenadas: {
      latitude,
      longitude,
    },
    zonasAtuacao: atuacao,
    faixaPreco: [precoMin, precoMax],
    vans: inputs,
    onibus: busInputs,
  };
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <>
            {avancar ? (
              <>
                <s.Title>Realizar Cadastro</s.Title>

                <s.DivLabel style={{ textAlign: "center", opacity: 0.75 }}>
                  <s.Label>
                    * Todos os campos deste cadastro são obrigatórios *
                  </s.Label>
                </s.DivLabel>

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
                  margin
                  src={icons.redes}
                  value={redes}
                  onChange={(e) => setRedes(e.target.value)}
                  placeholder="Rede social favorita"
                />
                <GrayInputIcon
                  margin
                  src={icons.mail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
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

                <s.DivLabel top>
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
                      type={"number"}
                      placeholder={"R$"}
                      value={precoMin}
                      onChange={(e) => setPrecoMin(e.target.value)}
                    />
                    <s.Label space>Até</s.Label>
                    <s.Number
                      type={"number"}
                      placeholder={"R$"}
                      value={precoMax}
                      onChange={(e) => setPrecoMax(e.target.value)}
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
                      !fantasia ||
                      !cnpj ||
                      !contato ||
                      !redes ||
                      !email ||
                      !senha ||
                      !confirmaSenha ||
                      !atuacao ||
                      !precoMin ||
                      !precoMax
                    }
                  >
                    Avançar
                  </s.Button>
                </s.DivButton>
              </>
            ) : cadEndereco ? (
              <>
                <s.Title className="title-cad">Cadastro de Endereço</s.Title>
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
                  placeholder="Estado"
                />

                <s.DivFaixa style={{ width: "100%" }}>
                  <s.DivLabel
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: 10,
                    }}
                  >
                    <s.Label>Coordenadas geográficas:</s.Label>
                    <s.DivAjuda>
                      <s.Link onClick={() => setOpenModal(true)}>
                        Tutorial
                      </s.Link>
                      <s.Icon src={icons.localizacao} />
                    </s.DivAjuda>
                  </s.DivLabel>
                  <s.DivPreco>
                    <s.Label space left>
                      Latitude
                    </s.Label>
                    <s.Number
                      type={"number"}
                      placeholder={"Latitude"}
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                    />
                    <s.Label space>Longitude</s.Label>
                    <s.Number
                      type={"number"}
                      placeholder={"Longitude"}
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                    />
                  </s.DivPreco>
                  {openModal && (
                    <ModalCoordenadas
                      isOpen={openModal}
                      closeModal={() => setOpenModal(false)}
                    />
                  )}
                </s.DivFaixa>

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
                  <s.Title className="title-cad">Cadastro de Veículos</s.Title>
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
                        if (inputs.length < 5) setInputs([...inputs, ""]);
                      }}
                    />
                  </s.DivButton>
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
                        if (busInputs.length < 5)
                          setBusInputs([...busInputs, ""]);
                      }}
                    />
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
