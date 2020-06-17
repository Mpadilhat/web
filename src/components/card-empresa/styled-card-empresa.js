import styled from "styled-components";

export const Card = styled.div`
  ${(props) => props.first && "border: solid 1px black; border-top: none;"};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 200px;
  background: #fafafa;
  border-radius: 5px;
  box-shadow: 1px 2px 3px;
  margin: 0 0 10px 0;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
    p {
      font-weight: bold;
      transition: 0.15s ease-in-out;
    }
  }
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-top: -30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15px;
  background-color: #000;
  opacity: 0.9;
  border-radius: ${(props) => (props.first ? "5px 5px 0 0" : "0")};
`;

export const Content = styled.div`
  width: 90%;
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
`;

export const Foto = styled.img`
  width: 60px;
  height: 50px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 10px;
`;

export const Name = styled.h3`
  font-size: 16px;
  line-height: 0;
`;

export const Text = styled.label`
  font-size: 12px;
  line-height: 0.8;
  color: rgba(0, 0, 0, 0.7);
`;
