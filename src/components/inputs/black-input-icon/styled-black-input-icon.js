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
  width: ${(props) => (props.size ? `${props.size}` : "100%")};
  margin: 0 10px;
  ${(props) => props.margin && `margin-top: 5px`}
`;

export const Input = styled.input`
  height: 30px;
  width: ${(props) => (props.width ? `${props.width}` : "95%")};
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "ABeeZee";
  font-size: 17px;
  color: #d3d3d3;
  padding: 10px 10px 10px 50px;
  border: 0;
  ::placeholder {
    color: black;
    margin-left: 15px;
  }
`;
