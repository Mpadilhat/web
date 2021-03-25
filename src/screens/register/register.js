import React, { useState, useCallback } from "react";
import * as s from "./styled-register";
import { icons } from "../../assets";
import { YellowButtonLoader, GrayInputIcon } from "../../components";
import { useHistory } from "react-router-dom";
import {
  cadastrarUsuario,
  cadastrarEmpresa,
  logar,
  deletarUsuario,
} from "../../services";
import { ToastsContainer, ToastsStore } from "react-toasts";
import RegisterEndereco from "./register-endereco";
import RegisterUser from "./register-user";
import { useDispatch } from "react-redux";
import moment from "moment";
import { capitalizeFirstLetter } from "../../utils";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [foto, setFoto] = useState(icons.user);
  const [fantasia, setFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [dataFundacao, setDataFundacao] = useState("");
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
      email: email.toLowerCase(),
      senha,
      foto,
    },

    emp: {
      foto,
      empresa: capitalizeFirstLetter(fantasia),
      dataFundacao: moment(dataFundacao).format("DD/MM/YYYY"),
      cnpj,
      contato,
      redeSocial: redes,
      email: email.toLowerCase(),
      endereco: [
        capitalizeFirstLetter(rua),
        numero,
        capitalizeFirstLetter(bairro),
        capitalizeFirstLetter(cidade),
        capitalizeFirstLetter(uf),
      ],
      latitude,
      longitude,
      zonasAtuacao: capitalizeFirstLetter(atuacao),
      faixaPreco: [precoMin, precoMax],
      vans: inputs,
      onibus: busInputs,
    },
  };
  const [openModal, setOpenModal] = useState(false);

  const cadastroPlataforma = () => {
    let bodyUser = body.user;
    let bodyEmpresa = body.emp;

    setLoading(true);

    cadastrarUsuario(bodyUser)
      .then((resp) => {
        cadastrarEmpresa({ id: resp._id, ...bodyEmpresa })
          .then(() => {
            setLoading(false);
            logar(bodyUser.email, bodyUser.senha)
              .then((resp) => {
                setLoading(false);
                dispatch({ type: "USUARIO/SET_USUARIO", usuario: resp });
                history.push("/");
              })
              .catch(() => {
                setLoading(false);
                history.push("/login");
              });
          })
          .catch((e) => {
            deletarUsuario(resp._id)
              .then(() => {
                ToastsStore.error("Erro ao cadastrar empresa, tente novamente");
                setLoading(false);
              })
              .catch(() => deletarUsuario(resp._id));
          });
      })
      .catch((e) => {
        setLoading(false);
        ToastsStore.error(e);
      });
  };

  return (
    <s.Body>
      <ToastsContainer store={ToastsStore} />
      <s.Container>
        <s.Box>
          <>
            {avancar ? (
              <RegisterUser
                foto={foto}
                setFoto={setFoto}
                fantasia={fantasia}
                setFantasia={setFantasia}
                dataFundacao={dataFundacao}
                setDataFundacao={setDataFundacao}
                cnpj={cnpj}
                setCnpj={setCnpj}
                contato={contato}
                setContato={setContato}
                redes={redes}
                setRedes={setRedes}
                email={email}
                setEmail={setEmail}
                senha={senha}
                setSenha={setSenha}
                confirmaSenha={confirmaSenha}
                setConfirmaSenha={setConfirmaSenha}
                atuacao={atuacao}
                setAtuacao={setAtuacao}
                precoMin={precoMin}
                setPrecoMin={setPrecoMin}
                precoMax={precoMax}
                setPrecoMax={setPrecoMax}
                setAvancar={setAvancar}
                setCadEndereco={setCadEndereco}
                history={history}
              />
            ) : cadEndereco ? (
              <RegisterEndereco
                rua={rua}
                setRua={setRua}
                numero={numero}
                setNumero={setNumero}
                bairro={bairro}
                setBairro={setBairro}
                cidade={cidade}
                setCidade={setCidade}
                uf={uf}
                setUf={setUf}
                latitude={latitude}
                setLatitude={setLatitude}
                longitude={longitude}
                setLongitude={setLongitude}
                setAvancar={setAvancar}
                setCadEndereco={setCadEndereco}
                setCadVeiculos={setCadVeiculos}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
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
                      disabled={loading}
                      src={icons.menos}
                      onClick={(e) => {
                        let newInputs = inputs;
                        if (inputs.length !== 1 && !loading) {
                          newInputs.splice(inputs.length - 1, 1);
                        }
                        setInputs(newInputs);
                        forceUpdate();
                      }}
                    />

                    <s.IconButton
                      disabled={loading}
                      src={icons.mais}
                      onClick={() => {
                        if (inputs.length < 5 && !loading)
                          setInputs([...inputs, ""]);
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
                      disabled={loading}
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
                      disabled={
                        !rua ||
                        !numero ||
                        !bairro ||
                        !cidade ||
                        !uf ||
                        (inputs.length < 1 && busInputs.length < 1) ||
                        (inputs.includes("") && busInputs.includes(""))
                      }
                      text={"Confirmar Cadastro"}
                      isLoading={loading}
                      onClick={() => cadastroPlataforma()}
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
