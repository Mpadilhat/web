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
    cursor: not-allowed;
  }
`;

export const AddRemoveButton = styled.button`
  font-weight: bold;
  font-size: 25px;
  line-height: 0;
  padding: 5px 5px 5px 2px;
  border-radius: 50%;
  background: #fad246;
  border: 0;
  width: 17.5px;
  height: 17.5px;
  text-align: center;
  :hover {
    background: rgba(250, 210, 70, 0.6);
    color: white;
  }
`;
