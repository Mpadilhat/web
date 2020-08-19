import styled from "styled-components";

export const Body = styled.div`
  background-color: #fad246;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: #fad246;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

export const Title = styled.h1`
  color: white;
  text-shadow: #000 2px 3px 2px;
  font-size: 50px;
  font-family: "Yellowtail";
`;
