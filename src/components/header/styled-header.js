import styled from "styled-components";
import { theme, font } from "../../assets";

export const Header = styled.header`
  height: 80px;
  background: ${theme.secondary};
  padding: 10px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Title = styled.h1`
  color: ${theme.light};
  font-size: 40px;
  font-family: ${font.Yellowtail};

  @media (max-width: 500px) {
    font-size: 25px !important;
  }
`;

export const Image = styled.img`
  height: 60px;
  width: 65px;
  object-fit: cover;

  @media (max-width: 800px) {
    height: 45px;
    width: 50px;
  }
`;

export const P = styled.p`
  font-family: ${font.AbeeZee};
  font-size: 16px;
  color: ${theme.light};
  margin-right: 15px;
`;

export const Link = styled.a`
  font-family: ${font.AbeeZee};
  font-size: 16px;
  font-weight: bold;
  color: ${theme.light};
  text-decoration: underline;
  margin-right: 25px;
  cursor: pointer;

  :hover {
    font-size: 16.5px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 0 5px;
  width: 100px;
  border-radius: 5px;
  border: solid 1px ${theme.primary};
  font-size: 25px;
  color: ${theme.light};
  background: transparent;

  :hover {
    background: ${theme.lightBackground};
    color: ${theme.secondary};
    border: 1px solid ${theme.light};
  }
`;

export const PerfilButton = styled.button`
  text-align: center;
  padding: 0 5px 0 0;
  width: 100px;
  border-radius: 5px;
  border: solid 1px ${theme.primary};
  font-size: 25px;
  color: ${theme.light};
  background: transparent;

  :hover {
    background: ${theme.lightBackground};
    color: ${theme.secondary};
    border: 1px solid ${theme.light};
  }
`;

export const Sair = styled.button`
  width: 70px;
  border: none;
  font-size: 25px;
  color: ${theme.light};
  background: transparent;

  :hover {
    font-weight: bold;
  }

  @media (max-width: 600px) {
    width: auto !important;
  }
`;

export const User = styled.img`
  height: 40px;
  width: 40px;
  border: solid 1.5px ${theme.light};
  border-radius: 50%;
  margin-left: 30px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 40px !important;
    height: 40px !important;
    margin: 0;
  }
`;
