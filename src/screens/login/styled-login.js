import styled from "styled-components";

export const Body = styled.body`
  background-color: #fad246;
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
  height: 450px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: ${(props) => (props.width ? `${props.width}` : "130px")};
  height: ${(props) => (props.height ? `${props.height}` : "130px")};
`;

export const Input = styled.input`
  height: 30px;
  width: 95%;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.6);
  font-family: "ABeeZee";
  font-size: 20px;
  margin-top: 10px;
  color: #d3d3d3;
  padding: 10px 10px;
  border: 0;
  ::placeholder{
    color: black;
  }
`;

export const Div = styled.div`
  width: 100%;
  padding: 0 0 15px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Button = styled.button`
  width: 100%;
  background: black;
  border: 0;
  font-family: "ABeeZee";
  font-weight: bold;
  font-size: 24px;
  margin-top: 10px;
  color: white;
  padding: 10px;
  cursor: pointer;
  :hover{
    opacity: 0.95;
  }
  :disabled{
    cursor: not-allowed;
    opacity: 0.95;
  }
`;

export const Label = styled.label`
  color: black;
  font-size: ${props=> props.size?`${props.size}px`:"16px"};
  font-family: "ABeeZee";
  margin: 5px 5px 0 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: ${props=> props.size?`${props.size}px`:"12px"};
  font-family: "ABeeZee";
  margin-top: 5px;
  font-weight: bold;
  :hover{
    opacity: 0.8;
  }
`;

