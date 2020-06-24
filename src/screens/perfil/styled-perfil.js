import styled from "styled-components";

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
  border: solid 1px green;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 20px;
`;

export const Box = styled.div`
  border: solid 1px black;
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.gray
      ? "rgba(255, 255, 255, 0.2)"
      : props.yellow
      ? "rgba(250, 210, 70, 0.6)"
      : "none"};
`;

export const DivFoto = styled.div`
  width: 120px;
  height: 120px;
  border: solid 1px white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
`;

export const Foto = styled.img`
  width: 100px;
  height: 100px;
`;

export const Title = styled.label`
  font-family: "Yellowtail", cursive;
  color: white;
  font-size: 50px;
  margin-bottom: 30px;
`;
