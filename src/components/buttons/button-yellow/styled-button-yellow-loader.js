import styled from "styled-components";
import { theme, font } from "../../../assets";

export const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "50px")};
  background: ${theme.primaryLight};
  border: 0;
  padding: ${(props) => (props.padding ? `${props.padding}` : "10px 0")};
  font-family: ${font.Yellowtail};
  font-size: ${(props) => (props.font ? `${props.font}` : "25px")};
  text-align: center;
  color: ${theme.light};

  :hover {
    opacity: 0.9;
  }
  :disabled {
    opacity: 0.8;
  }
`;
