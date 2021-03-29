import styled from "styled-components";
import { theme, font } from "../../../assets";

export const Button = styled.button`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : "50px")};
  background: ${theme.secondary};
  border: 0;
  font-family: ${font.Yellowtail};
  font-size: 28px;
  margin-top: 10px;
  color: ${theme.light};
  padding: 5px;

  :hover {
    opacity: 0.9;
  }
  :disabled {
    opacity: 0.9;
  }
`;
