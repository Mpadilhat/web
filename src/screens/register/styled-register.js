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
  margin: ${(props) => (props.top ? "30px 0 2px 5px" : "0 0 2px 2px")};
`;

export const Label = styled.label`
  color: white;
  font-size: 12px;
  ${(props) => props.space && "margin: 10px"};
  ${(props) => props.left && "margin-left: 2px"};
`;

export const DivFaixa = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  padding: 3px 7px 3px 3px;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.35);
`;

export const DivPreco = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Number = styled.input`
  width: 45%;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.35);
  font-family: "ABeeZee";
  font-weight: normal;
  font-size: 14px;
  color: #fcf0f0;
  padding: 5px 10px;
  border: 0;
  ::placeholder {
    color: #fcf0f0;
    margin: 15px;
    opacity: 0.67;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 0 10px 0 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  border: 0;
  width: 100px;
  padding: 5px;
  color: black;
  background: white;
  :hover {
    background: rgba(250, 210, 70, 0.6);
    color: white;
  }
  :disabled {
    opacity: 0.8;
  }
`;

export const IconButton = styled.img`
  text-align: center;
  width: 19px;
  height: 19px;
  :hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 1px;
  background: white;
  border-radius: 4px;
`;

export const DivAjuda = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -3px;
`;

export const Link = styled.label`
  height: 22.5px;
  width: 70px;
  text-align: center;
  line-height: 1.85;
  background: black;
  border-radius: 4px;
  text-decoration: none;
  margin-right: 5px;
  font-size: 12px;
  color: #fad246;
  :hover {
    font-weight: bold;
    opacity: 0.9;
    cursor: pointer;
  }
`;
