import React, { useState, useCallback, useEffect } from "react";
import * as s from "./styled-perfil";
import { GrayInputIcon, ModalExcluirConta } from "../../components";
import { icons, theme } from "../../assets";
import { useSelector } from "react-redux";
import { ToastsStore } from "react-toasts";
import Loader from "react-loader-spinner";
import { atualizarVeiculos } from "../../services";

const Veiculos = ({
  inputs,
  setInputs,
  busInputs,
  setBusInputs,
  setPageVeiculos,
  idUser,
  setAtualiza,
}) => {
  const { initVans, initOnibus } = useSelector(
    (state) => state.empresa.veiculos
  );
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [loading, setLoading] = useState(false);

  const editaVeiculos = () => {
    setLoading(true);

    if (
      (inputs.includes("") && inputs[0] !== "") ||
      (busInputs.includes("") && inputs[0] !== "")
    ) {
      setLoading(false);
      ToastsStore.error("Não podem haver campos vazios");
    } else {
      atualizarVeiculos(idUser, { vans: inputs, onibus: busInputs })
        .then((resp) => {
          ToastsStore.success(resp);
          setAtualiza(true);
        })
        .catch((e) => {
          ToastsStore.error(e);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <s.Box gray>
      <s.Title>Meus Veículos</s.Title>
      <div id="div-veiculos">
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

        <s.DivButton
          style={{ marginTop: 5, marginBottom: 15 }}
          className="button-input"
        >
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
        <s.DivButton style={{ marginTop: 5 }} className="button-input">
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
              if (busInputs.length < 5) setBusInputs([...busInputs, ""]);
            }}
          />
        </s.DivButton>

        <s.Line
          style={{
            justifyContent: "space-between",
            marginTop: 30,
            width: 475,
          }}
          id="buttons"
        >
          <s.Button onClick={() => setPageVeiculos(false)} disabled={loading}>
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
            disabled={loading}
            onClick={() => editaVeiculos()}
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
          <s.Button
            style={{
              background: "rgba(155, 0, 0, 0.97)",
              color: `${theme.light}`,
            }}
            onClick={() => {
              setPageVeiculos(true);
              setModalExcluir(true);
            }}
            disabled={loading}
          >
            Excluir conta
          </s.Button>
        </s.Line>
      </div>

      {modalExcluir && (
        <ModalExcluirConta
          isOpen={modalExcluir}
          closeModal={() => setModalExcluir(false)}
          id={idUser}
        />
      )}
    </s.Box>
  );
};

export default Veiculos;
