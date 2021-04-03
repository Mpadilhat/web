import React, { useState, useEffect } from "react";
import * as s from "./styled-register";
import { GrayInput, ModalCoordenadas } from "../../components";
import { icons } from "../../assets";
import { ToastsContainer, ToastsStore } from "react-toasts";

const RegisterEndereco = ({
  rua,
  setRua,
  numero,
  setNumero,
  bairro,
  setBairro,
  cidade,
  setCidade,
  uf,
  setUf,
  latitude,
  setLatitude,
  longitude,
  setLongitude,
  setAvancar,
  setCadEndereco,
  setCadVeiculos,
  openModal,
  setOpenModal,
}) => {
  const [invalidaRua, setInvalidaRua] = useState(false);
  const [invalidoBairro, setInvalidoBairro] = useState(false);
  const [invalidaCidade, setInvalidaCidade] = useState(false);
  const [invalidoEstado, setInvalidoEstado] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        ToastsStore.info("Erro ao buscar coordenadas :(");
      },
      {
        timeout: 30000,
      }
    );
  }, [setLatitude, setLongitude]);

  useEffect(() => {
    if (rua !== "" && rua.length < 7) setInvalidaRua(true);
    else if (invalidaRua) setInvalidaRua(false);
  }, [rua, invalidaRua]);

  useEffect(() => {
    if (bairro !== "" && bairro.length < 5) setInvalidoBairro(true);
    else if (invalidoBairro) setInvalidoBairro(false);
  }, [bairro, invalidoBairro]);

  useEffect(() => {
    if (cidade !== "" && cidade.length < 3) setInvalidaCidade(true);
    else if (invalidaCidade) setInvalidaCidade(false);
  }, [cidade, invalidaCidade]);

  useEffect(() => {
    if (uf !== "" && uf.length < 2) setInvalidoEstado(true);
    else if (invalidoEstado) setInvalidoEstado(false);
  }, [uf, invalidoEstado]);

  return (
    <>
      <ToastsContainer store={ToastsStore} />
      <s.Title className="title-cad">Cadastro de Endereço</s.Title>
      <s.DivLabel style={{ textAlign: "center", opacity: 0.75 }}>
        <s.Label>* Todos os campos com número mínimo de caracteres *</s.Label>
      </s.DivLabel>
      <GrayInput
        invalid={invalidaRua}
        margin
        value={rua}
        onChange={(e) => setRua(e.target.value)}
        placeholder="Rua"
      />
      <GrayInput
        margin
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Número, S/N, complemento, etc."
      />
      <GrayInput
        invalid={invalidoBairro}
        margin
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        placeholder="Bairro"
      />
      <GrayInput
        invalid={invalidaCidade}
        margin
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Cidade"
      />
      <GrayInput
        invalid={invalidoEstado}
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
            <s.Link onClick={() => setOpenModal(true)}>Tutorial</s.Link>
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
          disabled={
            !rua ||
            invalidaRua ||
            !numero ||
            !bairro ||
            invalidoBairro ||
            !cidade ||
            invalidaCidade ||
            !uf ||
            invalidoEstado ||
            !latitude ||
            !longitude
          }
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
  );
};

export default RegisterEndereco;
