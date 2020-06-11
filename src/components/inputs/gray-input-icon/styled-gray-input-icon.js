import styled from "styled-components";

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
  width: ${(props) => (props.width ? `${props.width}` : "95%")};
  background-color: rgba(255, 255, 255, 0.35);
  font-family: "ABeeZee";
  font-size: 17px;
  color: white;
  padding: 10px 10px 10px 50px;
  border: 0;
  ::placeholder {
    color: white;
    margin-left: 15px;
  }
`;
