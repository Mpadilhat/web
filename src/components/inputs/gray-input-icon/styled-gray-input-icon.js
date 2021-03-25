import styled from "styled-components";
import InputMask from "react-input-mask";
import { theme, font } from "../../../assets";

export const Icon = styled.img`
  width: ${(props) => (props.sizeWidth ? `${props.sizeWidth}` : "20px")};
  height: ${(props) => (props.sizeHeight ? `${props.sizeHeight}` : "20px")};
  position: absolute;
  margin-left: 15px;
  ${(props) => props.password && "margin: 0 0 0 360px"};
`;

export const DivInput = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.password ? "space-between" : "flex-start"};
  align-items: center;
  width: 100%;
  margin: 0 10px;
  ${(props) => props.margin && `margin-top: 5px`};

  ${({ invalid }) =>
    invalid && `border: solid 1.5px ${theme.error}; border-radius: 2px`};
`;

export const InputMasked = styled(InputMask)`
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  width: ${(props) => (props.width ? `${props.width}` : "95%")};
  background: ${theme.gray};
  font-family: ${font.AbeeZee};
  font-weight: normal;
  font-size: 14px;
  color: #fcf0f0;
  padding: ${(props) =>
    props.src
      ? "2px 10px 2px 50px"
      : props.padding
      ? `${props.padding}`
      : "2px 10px 2px 10px"};
  border: 0;

  ::placeholder {
    color: #fcf0f0;
    margin: 15px;
    opacity: 0.67;
  }

  ${(props) => props.margin && `margin-top: 5px`};
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  width: ${(props) => (props.width ? `${props.width}` : "95%")};
  background: ${theme.gray};
  font-family: ${font.AbeeZee};
  font-weight: normal;
  font-size: 14px;
  color: #fcf0f0;
  padding: ${(props) =>
    props.src
      ? "2px 10px 2px 50px"
      : props.padding
      ? `${props.padding}`
      : "2px 10px 2px 10px"};
  border: 0;

  ::placeholder {
    color: #fcf0f0;
    margin: 15px;
    opacity: 0.67;
  }

  ${(props) => props.margin && `margin-top: 5px`};

  ${({ invalid }) =>
    invalid && `border: solid 1.5px ${theme.error}; border-radius: 2px`};
`;
