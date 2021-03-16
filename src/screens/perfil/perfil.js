import React, { useState, useCallback } from "react";
import * as s from "./styled-perfil";
import { images, icons } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import {
  BlackInputIcon,
  GrayInput,
  GrayInputIcon,
  ModalCoordenadas,
  ModalExcluirConta,
} from "../../components";
import { useHistory } from "react-router-dom";
import Veiculos from "./veiculos";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { editarFoto, buscarUsuario } from "../../services";
import Compress from "compress.js";

const Perfil = () => {
  const compress = new Compress();
  const history = useHistory();

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const dispatch = useDispatch();
  const { id, foto } = useSelector((state) => state.usuario.usuario);

  const [fantasia, setFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [redeSocial, setRedeSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato, setContato] = useState("");
  const [zonaAtuacao, setZonaAtuacao] = useState("");
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
  const [modalExcluir, setModalExcluir] = useState(false);

  const fileChange = (file) => {
    if (file) {
      compress
        .compress([file], {
          size: 1,
          quality: 1,
          resize: true,
        })
        .then((foto) => {
          let novaFoto = foto[0].prefix + foto[0].data;
          editarFoto(id, novaFoto)
            .then(() => {
              buscarUsuario(id)
                .then((resp) => {
                  dispatch({ type: "USUARIO/SET_USUARIO", usuario: resp });
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

  return (
    <s.Body>
      <ToastsContainer store={ToastsStore} />
      <s.Container>
        {!pageVeiculos ? (
          <s.Box yellow>
            <s.Line head>
              <s.DivFoto foto={foto}>
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
                <s.Label>CNPJ:</s.Label>
              </s.DivLabel>
              <BlackInputIcon
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
                size={"88%"}
                margin
                src={icons.localizacao}
                placeholder="Ex.: Escolas, faculdades e turismo"
                value={zonaAtuacao}
                onChange={(e) => setZonaAtuacao(e.target.value)}
              />

              <s.DivFaixa>
                <s.DivLabel>
                  <s.Label style={{ marginLeft: 0 }}>Faixa de preço:</s.Label>
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
              <s.Button onClick={() => setPageVeiculos(true)}>
                Veículos
              </s.Button>
            </s.Line>
          </s.Box>
        ) : (
          <Veiculos
            inputs={inputs}
            setInputs={setInputs}
            busInputs={busInputs}
            setBusInputs={setBusInputs}
            setPageVeiculos={setPageVeiculos}
            setModalExcluir={setModalExcluir}
          />
        )}

        {modalExcluir && (
          <ModalExcluirConta
            isOpen={modalExcluir}
            closeModal={() => setModalExcluir(false)}
            id={"1"}
          />
        )}
      </s.Container>
    </s.Body>
  );
};

export default Perfil;
