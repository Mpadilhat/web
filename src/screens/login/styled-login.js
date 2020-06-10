import styled from "styled-components";

export const Body = styled.body`
  background-color: #fad246;
  height: 100vh;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  border: solid 1px black;
  width: 400px;
  height: 450px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: ${(props) => (props.width ? `${props.width}` : "130px")};
  height: ${(props) => (props.height ? `${props.height}` : "130px")};
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  background: black;
  opacity: 0.6;
  font-family: "ABeeZee";
  font-size: 24px;
  margin-top: 10px;
  border-radius: 4px;
  color: white;
  border: 0;
  padding: 10px 0;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  background: black;
  border: 0;
  font-family: "ABeeZee";
  font-weight: bold;
  font-size: 24px;
  margin-top: 10px;
  color: white;
  border-radius: 4px;
  padding: 10px;
`;
