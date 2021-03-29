import styled from "styled-components";
import { theme, font } from "../../assets";

export const Footer = styled.div`
  background: ${theme.primary};
  margin-top: -30px;
  height: 25px;
  text-align: center;
  color: ${theme.secondary};
  font-size: 12px;
  font-family: ${font.AbeeZee};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${theme.secondary};

  :hover {
    font-weight: bold;
    font-size: 12.5px;
  }
`;
