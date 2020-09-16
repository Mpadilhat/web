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

export const DivContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1 {
      color: white;
      font-size: 115px;
      font-family: Yellowtail, sans-serif;
      font-weight: normal;
      line-height: 1px;
    }
    h1:nth-child(even) {
      font-family: ABeeZee;
      margin-left: 30px;
    }
  }

  label {
    color: white;
    font-size: 35px;
    font-family: ABeeZee;
  }
  a {
    margin-top: 50px;
    color: #fad246;
    font-size: 20px;
    font-family: ABeeZee;
    cursor: pointer;

    :hover {
      opacity: 0.9;
    }
  }
`;
