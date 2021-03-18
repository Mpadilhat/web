import React, { useEffect } from "react";
import * as s from "./styled-register";
import { GrayInput, ModalCoordenadas } from "../../components";
import { icons } from "../../assets";

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
  }, [setLatitude, setLongitude]);

  return (
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
  );
};

export default RegisterEndereco;
