import styled from "styled-components";

export const Sair = styled.img`
  width: 25px;
  cursor: pointer;
`;

export const DivSair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

export const Line = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${(props) =>
    props.line &&
    "border-bottom: solid 1px rgba(0, 0, 0, 0.2); margin-bottom: 5px; padding-bottom: 2px;"};
`;

export const Column = styled.div`
  ${(props) => props.center && "text-align: justify"};
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.center ? "row" : "column")};
  justify-content: ${(props) => (props.center ? "flex-start" : "flex-start")};
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  margin-top: 10px;
  ${(props) => props.space && "margin-right: 15px"};
`;

export const Foto = styled.img`
  width: ${(props) => (props.right ? "220px" : "200px")};
  height: ${(props) => (props.right ? "150px" : "120px")};
  border: solid 1px black;
  border-radius: 5px;
  ${(props) => props.space && "margin-bottom: 10px"};
  ${(props) => props.right && "margin-right: 10px"};
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 10px;
`;

export const Name = styled.h3`
  font-size: 36px;
  line-height: 0;
  font-style: italic;
`;

export const Question = styled.label`
  margin: 10px 0;
  font-size: 16px;
  line-height: 0.9;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  font-style: italic;
  ${(props) => props.center && "text-align: center; line-height: 1.5"};
`;

export const Subtitle = styled.label`
  font-size: 22px;
  line-height: 0;
  color: rgba(0, 0, 0, 0.8);
`;

export const Text = styled.label`
  font-size: 15px;
  line-height: 4;
  color: rgba(0, 0, 0, 0.7);
`;

export const Title = styled.label`
  font-size: ${(props) => (props.small ? "13.5px" : "16px")};
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;
`;

export const P = styled.label`
  margin-left: 5px;
  font-size: 14px;
  line-height: 0.9;
  color: rgba(0, 0, 0, 0.7);
`;

export const Link = styled.a`
  text-decoration: none;
  margin-left: 5px;
  font-size: 16px;
  line-height: 0.9;
  color: blue;
  :hover {
    font-weight: bold;
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Position = styled.label`
  font-size: 14px;
  line-height: 1.3;
  font-weight: bold;
  color: black;
`;
