import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : "50px")};
  background: black;
  border: 0;
  font-family: "Yellowtail";
  font-size: 28px;
  margin-top: 10px;
  color: white;
  padding: 5px;
  :hover {
    opacity: 0.9;
  }
  :disabled {
    opacity: 0.9;
  }
`;
