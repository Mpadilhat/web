import React, { useState, useCallback } from "react";
import * as s from "./styled-perfil";
import { GrayInputIcon } from "../../components";
import { icons } from "../../assets";

const Veiculos = ({
  inputs,
  setInputs,
  busInputs,
  setBusInputs,
  setPageVeiculos,
  setModalExcluir,
}) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

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
          <s.Button onClick={() => setPageVeiculos(false)}>Voltar</s.Button>
          <s.Button
            style={{ background: "rgba(0, 0, 0, 0.97)", color: "white" }}
          >
            Salvar
          </s.Button>
          <s.Button
            style={{
              background: "rgba(155, 0, 0, 0.97)",
              color: "white",
            }}
            onClick={() => {
              setPageVeiculos(true);
              setModalExcluir(true);
            }}
          >
            Excluir conta
          </s.Button>
        </s.Line>
      </div>
    </s.Box>
  );
};

export default Veiculos;
