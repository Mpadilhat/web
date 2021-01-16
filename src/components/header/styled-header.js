import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  background-color: black;
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
  color: white;
  font-size: 40px;
  font-family: "Yellowtail";
  @media (max-width: 500px) {
    font-size: 25px !important;
  }
`;

export const Image = styled.img`
  height: 60px;
  width: 65px;
`;

export const P = styled.p`
  font-family: "AbeeZee";
  font-size: 16px;
  color: white;
  margin-right: 15px;
`;

export const Link = styled.a`
  font-family: "AbeeZee";
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    font-size: 16.5px;
  }
  margin-right: 25px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Button = styled.button`
  padding: 0 5px;
  width: 100px;
  border-radius: 5px;
  border: solid 1px #fad246;
  font-size: 25px;
  color: white;
  background: transparent;

  :hover {
    background: rgba(255, 255, 255, 0.97);
    color: black;
    border: 1px solid white;
  }
`;

export const PerfilButton = styled.button`
  text-align: center;
  padding: 0 5px 0 0;
  width: 100px;
  border-radius: 5px;
  border: solid 1px #fad246;
  font-size: 25px;
  color: white;
  background: transparent;

  :hover {
    background: rgba(255, 255, 255, 0.97);
    color: black;
    border: 1px solid white;
  }
`;

export const Sair = styled.button`
  width: 70px;
  border: none;
  font-size: 25px;
  color: white;
  background: transparent;

  :hover {
    font-weight: bold;
  }
`;

export const User = styled.img`
  height: 40px;
  width: 40px;
  border: solid 1.5px white;
  border-radius: 50%;
  margin-left: 30px;
`;
