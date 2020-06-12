import React, { useState } from "react";
import * as s from "./styled-register";
import { GrayInput, YellowButtonLoader } from "../../components";

const Register = () => {
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <s.Title>Cadastro de Endereço</s.Title>
          <>
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
              placeholder="UF"
            />
            <YellowButtonLoader
              disabled={!rua || !numero || !bairro || !cidade || !uf}
              text={"Cadastrar Endereço"}
              isLoading={loading}
              onClick={() => setLoading(!loading)}
            />
            <s.Link href="/">Voltar</s.Link>
          </>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Register;
