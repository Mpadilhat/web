import styled from "styled-components";
import { theme } from "../../assets";

export const Card = styled.div`
  ${(props) =>
    props.first && `border: solid 1px ${theme.secondary}; border-top: none;`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
  height: 200px;
  background: #fafafa;
  border-radius: 5px;
  box-shadow: 1px 2px 3px;
  margin: 0 0 25px 0;
  cursor: pointer;

  :hover {
    box-shadow: 0 4px 8px 0 ${theme.lightSecondary};
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
  background: ${theme.secondary};
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
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${(props) =>
    props.line &&
    `border-bottom: solid 1px ${theme.darkLight}; margin-bottom: 5px; padding-bottom: 2px; box-sizing: border-box;`};
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  max-width: 234px;
`;

export const Name = styled.h3`
  font-size: 16px;
  line-height: 0;
`;

export const Text = styled.label`
  font-size: 12px;
  line-height: 1;
  color: ${theme.lightSecondary};
  text-align: left;
`;

export const Title = styled.label`
  margin-right: 5px;
  font-size: 14px;
  line-height: 1.3;
  color: ${theme.darkMedium};
  font-weight: bold;
`;

export const P = styled.label`
  font-size: 12px;
  line-height: 0.9;
  color: ${theme.lightSecondary};
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 0.9;
  color: blue;

  :hover {
    font-weight: bold;
    opacity: 0.9;
    cursor: pointer;
  }
`;
