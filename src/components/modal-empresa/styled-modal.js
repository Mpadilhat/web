import styled from "styled-components";
import { theme } from "../../assets";

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
  justify-content: ${(props) => (props.justify ? "center" : "flex-start")};
  align-items: center;
  padding-bottom: 5px;

  ${(props) =>
    props.line &&
    `border-bottom: solid 1px ${theme.darkLight}; margin-bottom: 5px; padding-bottom: 10px;
    @media(max-width: 500px){
      flex-direction: column;
      text-align: center;

      img{
        margin-bottom: 3px;
      }

      h3{
        font-size: 32px;
        line-height: 1;
      }
    }
    `};

  ${(props) => props.cover && "height: 100%; align-items: flex-end"};
`;

export const Column = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  align-items: ${(props) => (props.center ? "center" : "flex-start")};
  margin-top: 10px;
`;

export const Foto = styled.img`
  width: 200px;
  height: 120px;
  border: solid 1px ${theme.secondary};
  border-radius: 5px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 10px;

  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

export const Name = styled.h3`
  font-size: 36px;
  line-height: 0;
  font-style: italic;
  ${(props) => props.margin && "margin: 10px 0"};

  ${({ coord }) =>
    coord &&
    `text-align: center; font-size: 30px; line-height: 30px;
    @media (max-width: 524px){
      font-size: 20px !important;
    }
    `};

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

export const Question = styled.label`
  margin: 10px 0 15px 0;
  font-size: 16px;
  line-height: 0.9;
  color: ${theme.lightSecondary};
  font-weight: bold;
  font-style: italic;
  ${(props) => props.center && "text-align: center; line-height: 1.5"};
`;

export const Subtitle = styled.p`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  text-align: justify;
`;

export const Text = styled.label`
  font-size: 15px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 4)};
  color: ${theme.lightSecondary};
`;

export const Title = styled.label`
  font-size: 16px;
  line-height: 1.3;
  color: ${theme.darkMedium};
  font-weight: bold;
`;

export const P = styled.label`
  margin-left: 5px;
  font-size: 14px;
  line-height: 0.9;
  color: ${theme.lightSecondary};
  font-weight: normal;
`;

export const Link = styled.a`
  text-decoration: none;
  margin-left: 5px;
  font-size: 14px;
  line-height: 0.9;
  font-weight: normal;
  color: ${(props) => (props.yellow ? `${theme.primary} !important` : "blue")};

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

  ${(props) =>
    props.text &&
    `background: ${theme.dark}; border-radius: 5px; padding: 5px 15px; a, label, p {color: ${theme.light}; font-size: 13px};

    @media (max-width: 625px) {
    margin-bottom: -18px;
    padding: 0 10px;

    a, p{
      font-size: 11px;
    }
  }
    `}
`;

export const Position = styled.label`
  font-size: 18px;
  line-height: 1.3;
  font-weight: bold;
  color: ${theme.primary} !important;
`;
