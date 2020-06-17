import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "50px")};
  background: rgba(250, 210, 70, 0.6);
  border: 0;
  padding: 10px 0;
  font-family: "Yellowtail";
  font-size: 25px;
  color: white;
  margin-top: 40px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;
