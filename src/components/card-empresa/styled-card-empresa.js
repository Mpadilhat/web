import styled from "styled-components";

export const Card = styled.div`
  ${(props) => props.first && "border: solid 2px black"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 200px;
  background: #fafafa;
  border-radius: 5px;
  padding: 0 15px 15px 15px;
  box-shadow: 1px 2px 3px;
  margin: 0 0 10px 0;
  :hover {
    p {
      font-weight: bold;
    }
  }
`;

export const Header = styled.div`
  width: 330px;
  height: 15px;
  background-color: #000;
  margin: 0 0 5px 0;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1px black;
`;
