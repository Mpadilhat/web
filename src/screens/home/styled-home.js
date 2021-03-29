import styled from "styled-components";
import { theme, font } from "../../assets";

export const Body = styled.div`
  background: ${theme.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background: ${theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const Box = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  min-height: 300px;

  ${(props) =>
    props.empty &&
    "height: 350px; flex-direction: column; justify-content: center; margin-top: -50px "}

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${theme.light};
  text-shadow: ${theme.secondary} 2px 3px 2px;
  font-size: 50px;
  font-family: ${font.Yellowtail};
`;
