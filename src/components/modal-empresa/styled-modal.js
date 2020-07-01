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
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
`;

export const Foto = styled.img`
  width: 200px;
  height: 130px;
  border: solid 1px black;
  border-radius: 5px;
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
  font-size: 16px;
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
