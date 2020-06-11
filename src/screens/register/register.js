import React from "react";
import * as s from "./styled-register";
import { GrayInput } from "../../components";

const Register = () => {
  return (
    <s.Body>
      <s.Container>
        <s.Box>
          <s.Title>Cadastro de Endereço</s.Title>
          <>
            <GrayInput value={""} onChange={""} placeholder="Teste" />

            <s.Input value={""} onChange={""} placeholder="Rua" />
            <s.Input value={""} onChange={""} placeholder="Número" />
            <s.Input value={""} onChange={""} placeholder="Bairro" />
            <s.Input value={""} onChange={""} placeholder="Cidade" />
            <s.Input value={""} onChange={""} placeholder="UF" />
            <s.Button>Cadastrar Endereço</s.Button>
            <s.Link href="/">Voltar</s.Link>
          </>
        </s.Box>
      </s.Container>
    </s.Body>
  );
};

export default Register;
