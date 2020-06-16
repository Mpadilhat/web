import styled from "styled-components";

export const Body = styled.div`
  background-color: #000000;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Box = styled.div`
  width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.label`
  font-family: "Yellowtail", cursive;
  color: white;
  font-size: 50px;
  margin-bottom: 30px;
`;

export const DivLabel = styled.div`
  width: 100%;
  text-align: left;
  padding: 0px 0 5px 15px;
`;

export const Label = styled.label`
  color: white;
  font-size: 12px;
  margin-bottom: 5px;
  align-items: left;
`;

export const Link = styled.a`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
