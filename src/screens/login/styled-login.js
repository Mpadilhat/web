import styled from "styled-components";

export const Body = styled.div`
  background-color: #fad246;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fad246;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Box = styled.div`
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

export const Icon = styled.img`
  width: ${(props) => (props.width ? `${props.width}` : "20px")};
  height: ${(props) => (props.height ? `${props.height}` : "20px")};
  position: absolute;
  margin-left: 15px;
`;

export const DivInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 10px;
`;

export const Input = styled.input`
  height: 30px;
  width: 95%;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "ABeeZee";
  font-size: 20px;

  color: #d3d3d3;
  padding: 10px 10px 10px 50px;
  border: 0;
  ::placeholder {
    color: black;
    margin-left: 15px;
  }
`;

export const Div = styled.div`
  width: 100%;
  padding: 0 0 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
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
  padding: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.95;
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.95;
  }
`;

export const Label = styled.label`
  color: black;
  font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  font-family: "ABeeZee";
  margin: 5px 5px 0 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: ${(props) => (props.size ? `${props.size}px` : "12px")};
  font-family: "ABeeZee";
  margin-top: 5px;
  font-weight: bold;
  :hover {
    opacity: 0.8;
  }
`;
