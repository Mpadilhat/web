import styled from "styled-components";

export const Body = styled.body`
  background-color: #000000;
  height: 100vh;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.label`
  font-family: "Yellowtail", cursive;
  color: white;
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 20px;
  width: 95%;
  font-size: 8px;
  background: rgba(255, 255, 255, 0.35);
  padding: 2px 5px 2px 8px;
  margin-top: 5px;
  border: 0;
  font-weight: normal;
  ::placeholder {
    color: #fcf0f0;
    opacity: 0.67;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: rgba(250, 210, 70, 0.6);
  border: 0;
  padding: 3px 0;
  font-family: "Yellowtail";
  font-size: 20px;
  color: white;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Link = styled.a`
  font-size: 8px;
  color: white;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
