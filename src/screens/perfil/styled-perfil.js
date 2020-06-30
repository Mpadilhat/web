import styled from "styled-components";
import { images } from "../../assets/";

export const Body = styled.div`
  border: solid 3px black;
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
  border: solid 1px black;
  width: 47%;
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
  justify-content: flex-start;
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
  cursor: pointer;
  background: white;
  border-radius: 4px;
  :hover {
    opacity: 0.8;
  }
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
