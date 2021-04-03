import React, { useState, useEffect } from "react";
import * as s from "./styled-perfil";
import { icons, theme } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Veiculos from "./veiculos";
import { ToastsContainer, ToastsStore } from "react-toasts";
import {
  editarFoto,
  buscarUsuario,
  buscarEmpresa,
  atualizarEmpresa,
} from "../../services";
import PerfilEndereco from "./perfil-endereco";
import PerfilDados from "./perfil-dados";
import Compress from "compress.js";
import moment from "moment";
import { capitalizeFirstLetter } from "../../utils";
import Loader from "react-loader-spinner";

const Perfil = () => {
  const compress = new Compress();
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, foto } = useSelector((state) => state.usuario.usuario);
  const {
    initFantasia,
    initEmail,
    initData,
    initCnpj,
    initContato,
    initRede,
    initFaixa,
    initEndereco,
    initLocalizacao,
  } = useSelector((state) => state.empresa.empresa);
  const empresa = useSelector((state) => state.empresa.empresa);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

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
  const [atualiza, setAtualiza] = useState(false);

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
                  setPhoto(resp.foto);
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

  const buscaDadosEmpresa = () => {
    buscarEmpresa(id)
      .then((resp) => {
        if (resp) {
          dispatch({ type: "EMPRESA/SET_EMPRESA", empresa: resp });
          dispatch({ type: "EMPRESA/SET_VEICULOS", empresa: resp });
          setPhoto(resp.foto);
          setFantasia(resp.empresa);
          let data = resp.dataFundacao.split("/");
          data = `${data[2]}-${data[1]}-${data[0]}`;
          setDataFundacao(data);
          setEmail(resp.email);
          setRedeSocial(resp.redeSocial);
          setCnpj(resp.cnpj);
          setContato(resp.contato);
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
      .catch(() => ToastsStore.info("Erro buscar informações da empresa"))
      .finally(() => {
        if (atualiza) setAtualiza(false);
        if (loading) setLoading(false);
      });
  };

  const updateEmpresa = () => {
    let localizacao = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    let body = {
      dataFundacao: moment(dataFundacao).format("DD/MM/YYYY"),
      empresa: fantasia,
      cnpj,
      contato,
      redeSocial,
      email,
      endereco: [
        capitalizeFirstLetter(rua),
        numero,
        capitalizeFirstLetter(bairro),
        capitalizeFirstLetter(cidade),
        capitalizeFirstLetter(uf),
      ],
      localizacao,
      zonasAtuacao,
      faixaPreco: [precoMin, precoMax],
      vans: inputs,
      onibus: busInputs,
    };

    setLoading(true);
    atualizarEmpresa(id, body)
      .then((resp) => {
        setAtualiza(true);
        ToastsStore.success(resp);
      })
      .catch((e) => ToastsStore.error(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    buscaDadosEmpresa();
  }, []);

  useEffect(() => {
    if (atualiza) {
      setLoading(true);
      buscaDadosEmpresa();
    }
  }, [atualiza]);

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
              <PerfilDados
                fantasia={fantasia}
                setFantasia={setFantasia}
                email={email}
                setEmail={setEmail}
                dataFundacao={dataFundacao}
                setDataFundacao={setDataFundacao}
                cnpj={cnpj}
                setCnpj={setCnpj}
                contato={contato}
                setContato={setContato}
                redeSocial={redeSocial}
                setRedeSocial={setRedeSocial}
                zonasAtuacao={zonasAtuacao}
                setZonasAtuacao={setZonasAtuacao}
                precoMin={precoMin}
                setPrecoMin={setPrecoMin}
                precoMax={precoMax}
                setPrecoMax={setPrecoMax}
                id={id}
                setDisabled={setDisabled}
              />

              <s.Title style={{ margin: "30px 0 15px 0" }} id="local">
                Dados de Localização
              </s.Title>

              <PerfilEndereco
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
                setDisabled={setDisabled}
              />
            </s.DivInputs>

            <s.Label important>
              * Lembre-se que nenhum campo pode ficar vazio *
            </s.Label>

            <s.Line buttons>
              <s.Button onClick={() => history.push("/")} disabled={loading}>
                Voltar
              </s.Button>
              <s.Button
                style={{
                  background: `${theme.darkUncomplete}`,
                  color: `${theme.light}`,
                  display: "flex",
                  width: "auto",
                  padding: "3px 10px",
                }}
                onClick={() => updateEmpresa()}
                disabled={disabled}
              >
                {loading && (
                  <Loader
                    type="TailSpin"
                    color="white"
                    height={20}
                    width={20}
                    style={{ marginRight: "5px" }}
                  />
                )}
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
            idUser={id}
            setAtualiza={setAtualiza}
          />
        )}
      </s.Container>
    </s.Body>
  );
};

export default Perfil;
