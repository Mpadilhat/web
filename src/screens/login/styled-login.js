import styled from "styled-components";

export const Body = styled.div`
  background-color: #fad246;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #fad246;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Box = styled.div`
  max-width: 400px;
  height: 450px;
  padding: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: ${(props) => (props.width ? `${props.width}` : "130px")};
  height: ${(props) => (props.height ? `${props.height}` : "130px")};
`;

export const Div = styled.div`
  width: 100%;
  padding: 0 0 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Label = styled.label`
  color: black;
  font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
  font-family: "ABeeZee";
  margin: 5px 5px 0 0;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: ${(props) => (props.size ? `${props.size}px` : "12px")};
  font-family: "ABeeZee";
  margin-top: 5px;
  font-weight: bold;
  :hover {
    opacity: 0.8;
  }
`;

export const Checkbox = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;
