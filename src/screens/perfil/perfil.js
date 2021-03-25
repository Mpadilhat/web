import React, { useState, useEffect, useCallback } from "react";
import * as s from "./styled-perfil";
import { icons } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { BlackInputIcon, GrayInput, ModalCoordenadas } from "../../components";
import { useHistory } from "react-router-dom";
import Veiculos from "./veiculos";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { editarFoto, buscarUsuario, buscarEmpresa } from "../../services";
import { validaCNPJ } from "../../utils";
import Compress from "compress.js";
import moment from "moment";

const Perfil = () => {
  const compress = new Compress();
  const history = useHistory();

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const dispatch = useDispatch();
  const { id, foto } = useSelector((state) => state.usuario.usuario);

  const [initDados, setInitDados] = useState("");

  const [photo, setPhoto] = useState(foto);
  const [fantasia, setFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [dataFundacao, setDataFundacao] = useState("");
  const [redeSocial, setRedeSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato, setContato] = useState("");
  const [zonasAtuacao, setZonasAtuacao] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [inputs, setInputs] = useState([""]);
  const [busInputs, setBusInputs] = useState([""]);

  const [pageVeiculos, setPageVeiculos] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [invalidoCnpj, setInvalidoCnpj] = useState(false);
  const [invalidoTelefone, setInvalidoTelefone] = useState(false);
  const [invalidaSenha, setInvalidaSenha] = useState(false);
  const [invalidaConfirmaSenha, setInvalidaConfirmaSenha] = useState(false);
  const [invalidaFantasia, setInvalidaFantasia] = useState(false);
  const [invalidaAtuacao, setInvalidaAtuacao] = useState(false);
  const [invalidaRede, setInvalidaRede] = useState(false);

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
          editarFoto(id, novaFoto)
            .then(() => {
              buscarUsuario(id)
                .then((resp) => {
                  dispatch({ type: "USUARIO/SET_USUARIO", usuario: resp });
                  ToastsStore.success(`Foto atualizada!`);
                })
                .catch(() =>
                  ToastsStore.error("Erro ao atualizar informações do usuário")
                );
            })
            .catch((e) => {
              ToastsStore.error(e);
            });
        })
        .catch(() => {
          ToastsStore.error(`Ocorreu um erro no upload de ${file.name}!`);
        });
    }
  };

  useEffect(() => {
    buscarEmpresa(id)
      .then((resp) => {
        if (resp) {
          //dataFundacao: moment(dataFundacao).format("DD/MM/YYYY"),
          console.log(resp);
          setInitDados(resp);
          setPhoto(resp.foto);
          setFantasia(resp.empresa);
          let data = resp.dataFundacao.split("/");
          data = `${data[2]}-${data[1]}-${data[0]}`;
          setDataFundacao(data);
          setEmail(resp.email);
          setRedeSocial(resp.redeSocial);
          setCnpj(resp.cnpj);
          setContato(resp.contato);
          setCnpj(resp.cnpj);
          setCnpj(resp.cnpj);
          setRua(resp.endereco[0]);
          setNumero(resp.endereco[1]);
          setBairro(resp.endereco[2]);
          setCidade(resp.endereco[3]);
          setUf(resp.endereco[4]);
          setLatitude(resp.localizacao.coordinates[1]);
          setLongitude(resp.localizacao.coordinates[0]);
          setZonasAtuacao(resp.zonasAtuacao);
          setPrecoMin(resp.faixaPreco[0]);
          setPrecoMax(resp.faixaPreco[1]);
          setInputs(resp.vans);
          setBusInputs(resp.onibus);
        }
      })
      .catch(() => ToastsStore.info("Erro buscar informações da empresa"));
  }, [id]);

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
  }, [senha, invalidaSenha]);

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
      redeSocial.length < 10 &&
      (!redeSocial.includes("http://") || !redeSocial.includes("https://"))
    )
      setInvalidaRede(true);
    else if (invalidaRede) setInvalidaRede(false);
  }, [invalidaRede, redeSocial]);

  return (
    <s.Body>
      <ToastsContainer store={ToastsStore} />
      <s.Container>
        {!pageVeiculos ? (
          <s.Box yellow>
            <s.Line head>
              <s.DivFoto foto={photo}>
                <label htmlFor="foto">
                  <s.Icon src={icons.edit} className="foto" foto />
                </label>
                <input
                  type="file"
                  accept=".jpg, .gif, .png, .jpeg"
                  style={{ display: "none" }}
                  id="foto"
                  onChange={(e) => fileChange(e.target.files[0])}
                />
              </s.DivFoto>
              <s.PrincipalTitle>Meu Perfil</s.PrincipalTitle>
            </s.Line>

            <s.DivInputs>
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
                  <s.Label style={{ marginLeft: 0 }}>
                    Faixa de preço (R$):
                  </s.Label>
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
                      let temp = numero;
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
                      let temp = numero;
                      if (regEx === null || regEx < 1) temp = "";
                      else temp = regEx;
                      setPrecoMax(temp);
                    }}
                  />
                </s.DivPreco>
              </s.DivFaixa>

              <s.Title style={{ margin: "30px 0 15px 0" }} id="local">
                Dados de Localização
              </s.Title>

              <s.DivLabel>
                <s.Label>Rua:</s.Label>
              </s.DivLabel>
              <GrayInput
                height={"46"}
                margin
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                placeholder="Ex.: Rua são João"
              />
              <s.DivLabel>
                <s.Label>Número:</s.Label>
              </s.DivLabel>
              <GrayInput
                height={"46"}
                margin
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ex.: 112, S/N"
              />
              <s.DivLabel>
                <s.Label>Bairro:</s.Label>
              </s.DivLabel>
              <GrayInput
                height={"46"}
                margin
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                placeholder="Bairro"
              />
              <s.DivLabel>
                <s.Label>Cidade:</s.Label>
              </s.DivLabel>
              <GrayInput
                height={"46"}
                margin
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Cidade"
              />
              <s.DivLabel>
                <s.Label>Estado:</s.Label>
              </s.DivLabel>
              <GrayInput
                height={"46"}
                margin
                value={uf}
                onChange={(e) => setUf(e.target.value)}
                placeholder="Estado"
              />
            </s.DivInputs>

            <s.DivFaixa gray coord>
              <s.DivLabel
                style={{
                  justifyContent: "space-between",
                  paddingTop: 5,
                  width: "100%",
                }}
              >
                <s.Label style={{ marginLeft: 0 }}>
                  Coordenadas geográficas:
                </s.Label>
                <s.DivAjuda onClick={() => setOpenModal(true)}>
                  <s.Link id="coordenadas" title="ajuda">
                    Tutorial
                  </s.Link>
                  <s.Icon
                    title="ajuda"
                    src={icons.localizacao}
                    style={{ cursor: "pointer" }}
                  />
                </s.DivAjuda>
              </s.DivLabel>
              <s.DivPreco id="coords">
                <s.Label space left>
                  Latitude
                </s.Label>
                <s.Number
                  gray
                  type={"number"}
                  placeholder={"Latitude"}
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
                <s.Label space id="longitude">
                  Longitude
                </s.Label>
                <s.Number
                  gray
                  type={"number"}
                  placeholder={"Longitude"}
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </s.DivPreco>
            </s.DivFaixa>

            {openModal && (
              <ModalCoordenadas
                isOpen={openModal}
                closeModal={() => setOpenModal(false)}
              />
            )}

            <s.Line buttons>
              <s.Button onClick={() => history.push("/")}>Voltar</s.Button>
              <s.Button
                style={{ background: "rgba(0, 0, 0, 0.97)", color: "white" }}
              >
                Salvar
              </s.Button>
              <s.Button onClick={() => setPageVeiculos(true)}>Outros</s.Button>
            </s.Line>
          </s.Box>
        ) : (
          <Veiculos
            inputs={inputs}
            setInputs={setInputs}
            busInputs={busInputs}
            setBusInputs={setBusInputs}
            setPageVeiculos={setPageVeiculos}
          />
        )}
      </s.Container>
    </s.Body>
  );
};

export default Perfil;
