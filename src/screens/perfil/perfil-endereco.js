import React, { useState, useEffect } from "react";
import * as s from "./styled-perfil";
import { GrayInput, ModalCoordenadas } from "../../components";
import { icons } from "../../assets";

const PerfilEndereco = ({
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
  setDisabled,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [invalidaRua, setInvalidaRua] = useState(false);
  const [invalidoBairro, setInvalidoBairro] = useState(false);
  const [invalidaCidade, setInvalidaCidade] = useState(false);
  const [invalidoEstado, setInvalidoEstado] = useState(false);

  useEffect(() => {
    if (
      invalidaRua ||
      ["", " "].includes(rua) ||
      !numero ||
      ["", " "].includes(numero) ||
      invalidoBairro ||
      ["", " "].includes(bairro) ||
      invalidaCidade ||
      ["", " "].includes(cidade) ||
      invalidoEstado ||
      ["", " "].includes(uf) ||
      !latitude ||
      ["", " "].includes(latitude) ||
      !longitude ||
      ["", " "].includes(longitude)
    )
      setDisabled(true);
    else setDisabled(false);
  }, [rua, numero, bairro, cidade, uf, latitude, longitude]);

  useEffect(() => {
    if (rua !== "" && rua.length < 7) setInvalidaRua(true);
    else if (invalidaRua) setInvalidaRua(false);
  }, [invalidaRua, rua]);

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
  }, [invalidoEstado, uf]);

  return (
    <>
      <s.DivLabel>
        <s.Label>Rua:</s.Label>
      </s.DivLabel>
      <GrayInput
        invalid={invalidaRua}
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
        invalid={invalidoBairro}
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
        invalid={invalidaCidade}
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
        invalid={invalidoEstado}
        height={"46"}
        margin
        value={uf}
        onChange={(e) => setUf(e.target.value)}
        placeholder="Estado"
      />

      <s.DivFaixa gray coord>
        <s.DivLabel
          style={{
            justifyContent: "space-between",
            paddingTop: 5,
            width: "100%",
          }}
        >
          <s.Label style={{ marginLeft: 0 }}>Coordenadas geográficas:</s.Label>
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
    </>
  );
};

export default PerfilEndereco;
