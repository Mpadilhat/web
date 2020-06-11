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

export const Input = styled.input`
  height: 40px;
  width: 95%;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.35);
  padding: 2px 10px 2px 13px;
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
  padding: 10px 0;
  font-family: "Yellowtail";
  font-size: 25px;
  color: white;
  margin-top: 40px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
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
