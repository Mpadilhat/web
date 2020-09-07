import styled from "styled-components";
import { images } from "../../assets/";

export const Body = styled.div`
  background-color: #000000;
  /* height: 100vh; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 40px 20px;
`;

export const Box = styled.div`
  min-height: 80vh;
  border: solid 1px black;
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
      ? "rgba(250, 210, 70, 0.6)"
      : "none"};
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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
  background: url(${images.veiculo}) center;
  background-size: cover;
  padding: 3px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 1px;
  background: white;
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
  font-family: "Yellowtail", cursive;
  color: white;
  font-size: 58px;
  text-shadow: #000 2px 3px 2px;
  margin: 0 0 0 20px;
`;

export const Title = styled.label`
  font-family: "Yellowtail", cursive;
  color: white;
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
  color: black;
  font-size: 14px;
  margin: 10px 0 5px 10px;
  ${(props) => props.space && "margin: 10px"};
  ${(props) => props.left && "margin-left: 2px"};
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
  color: black;
  background: rgba(255, 255, 255, 0.97);

  :hover {
    background: rgba(0, 0, 0, 0.97);
    color: white;
    border: 1px solid white;
  }
`;

export const Hr = styled.hr`
  width: 88%;
  border: solid 0.5px rgba(255, 255, 255, 0.6);
  margin: 30px 0 20px 0;
`;

export const DivFaixa = styled.div`
  width: 410px;
  border: solid 1px
    ${(props) =>
      props.gray ? "rgba(255,255,255,0.35);" : "rgba(0, 0, 0, 0.65)"};
  border-radius: 2px;
  padding: 3px 7px 3px 3px;
  margin-top: 30px;
  background: ${(props) =>
    props.gray ? "rgba(255,255,255,0.35)" : "rgba(0, 0, 0, 0.6)"};
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
  background-color: rgba(0, 0, 0, 0.65);
  font-family: "ABeeZee";
  font-weight: normal;
  font-size: 14px;
  color: #fcf0f0;
  padding: 5px 10px;
  border: 0;
  ::placeholder {
    color: #fcf0f0;
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

  color: #fad246;
  :hover {
    font-weight: bold;
    opacity: 0.9;
    cursor: pointer;
  }
`;
