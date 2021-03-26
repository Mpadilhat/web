import styled from "styled-components";
import { theme, font } from "../../assets/";

export const Body = styled.div`
  background: ${theme.secondary};
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${theme.secondary};
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 40px 20px;

  @media (max-width: 650px) {
    margin: 30px 0;

    #div-veiculos {
      width: 100%;
      box-sizing: border-box;

      div {
        width: 96%;
      }
    }

    .button-input {
      width: 86% !important;
    }
  }
`;

export const Box = styled.div`
  min-height: 80vh;
  border: solid 1px ${theme.secondary};
  width: 70%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) =>
    props.gray
      ? "rgba(255, 255, 255, 0.2)"
      : props.yellow
      ? `${theme.primaryLight}`
      : "none"};

  #buttons {
    button:nth-child(1) {
      margin-left: 10px;
    }
  }

  @media (max-width: 650px) {
    width: 85%;

    #local {
      font-size: 35px;
    }
    #buttons {
      width: 100% !important;
      justify-content: space-evenly;
      button {
        font-size: 17px !important;
        width: auto;
        padding: 5px 10px;
      }
    }
  }
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    div {
      width: 100%;
    }
  }
`;

export const Line = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  ${(props) => props.head && "flex-wrap: wrap"};

  ${(props) =>
    props.buttons &&
    `
   justify-content: space-between;
   margin-top: 30px;
   width: 420px;
  `};

  @media (max-width: 650px) {
    ${(props) =>
      props.head &&
      `flex-direction: column;
      width: 100%;
    label{
      font-size: 45px;
    }
    `};

    ${(props) =>
      props.buttons &&
      `
   width: 100%;
   button ~button{
     margin-left: 15px;
   }
  `};
  }
`;

export const DivFoto = styled.div`
  width: 160px;
  height: 120px;
  border: solid 1px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background: ${({ foto }) => `url(${foto}) center`};
  background-size: cover;
  padding: 3px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 1px;
  background: ${theme.light};
  border-radius: 4px;
  ${(props) =>
    props.foto &&
    `:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  `}
`;

export const PrincipalTitle = styled.label`
  font-family: ${font.Yellowtail}, cursive;
  color: ${theme.light};
  font-size: 58px;
  text-shadow: #000 2px 3px 2px;
  margin: 0 0 0 20px;
`;

export const Title = styled.label`
  font-family: ${font.Yellowtail}, cursive;
  color: ${theme.light};
  font-size: 50px;
  margin-bottom: 30px;
`;

export const DivLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 92%;
`;

export const Label = styled.label`
  color: ${theme.secondary};
  font-size: 14px;
  margin: 10px 0 5px 10px;
  ${(props) => props.space && "margin: 10px"};
  ${(props) => props.left && "margin-left: 2px"};
  ${({ important }) =>
    important && `font-size: 12px; color: ${theme.light}; margin-top: 25px`};
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 20px 0 0 23px;
`;

export const IconButton = styled.img`
  text-align: center;
  width: 19px;
  height: 19px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  padding: 2.5px;
  width: 100px;
  border-radius: 5px;
  border: solid 1px #000;
  font-size: 20px;
  color: ${theme.secondary};
  background: rgba(255, 255, 255, 0.97);

  :hover {
    background: rgba(0, 0, 0, 0.97);
    color: ${theme.light};
    border: 1px solid ${theme.light};
  }
`;

export const Hr = styled.hr`
  width: 88%;
  border: solid 0.5px rgba(255, 255, 255, 0.6);
  margin: 30px 0 20px 0;
`;

export const DivFaixa = styled.div`
  width: 86%;
  border: solid 1px
    ${(props) => (props.gray ? `${theme.gray}` : "rgba(0, 0, 0, 0.65)")};
  border-radius: 2px;
  padding: 3px 7px 3px 3px;
  margin-top: 30px;
  background: ${(props) =>
    props.gray ? `${theme.gray}` : "rgba(0, 0, 0, 0.6)"};

  ${(props) =>
    props.coord &&
    `
  width: 410px;
`};

  @media (max-width: 600px) {
    width: 95% !important;

    #coords {
      flex-direction: column;

      input {
        width: 85%;
      }
    }

    ${(props) =>
      props.coord &&
      `
    width: 100%;
`};
  }

  @media (max-width: 450px) {
    #coordenadas {
      display: none;
    }

    #longitude {
      margin-top: 20px;
    }
  }
`;

export const DivPreco = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Number = styled.input`
  width: 45%;
  height: 30px;
  background: rgba(0, 0, 0, 0.65);
  font-family: "ABeeZee";
  font-weight: normal;
  font-size: 14px;
  color: ${theme.lightText};
  padding: 5px 10px;
  border: 0;

  ::placeholder {
    color: ${theme.lightText};
    margin: 15px;
    opacity: 0.67;
  }
`;

export const DivAjuda = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -3px;

  @media (min-width: 451px) and (max-width: 650px) {
    max-width: 100px;
  }

  @media (max-width: 450px) {
    max-width: 30px;
  }
`;

export const Link = styled.label`
  height: 22px;
  width: 70px;
  text-align: center;
  line-height: 1.85;
  background: black;
  border-radius: 4px;
  text-decoration: none;
  margin-right: 5px;
  font-size: 12px;

  color: ${theme.primary};

  :hover {
    font-weight: bold;
    opacity: 0.9;
    cursor: pointer;
  }
`;
