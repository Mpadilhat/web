import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "50px")};
  background: rgba(250, 210, 70, 0.6);
  border: 0;
  padding: ${(props) => (props.padding ? `${props.padding}` : "10px 0")};
  font-family: "Yellowtail";
  font-size: ${(props) => (props.font ? `${props.font}` : "25px")};
  text-align: center;
  color: white;

  :hover {
    opacity: 0.9;
  }
  :disabled {
    opacity: 0.8;
  }
`;
