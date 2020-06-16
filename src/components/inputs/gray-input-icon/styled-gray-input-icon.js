import styled from "styled-components";

export const Icon = styled.img`
  width: ${(props) => (props.width ? `${props.width}` : "20px")};
  height: ${(props) => (props.height ? `${props.height}` : "20px")};
  position: absolute;
  margin-left: 15px;
  ${(props) => props.password && "margin: 0 0 0 360px"};
  z-index: 2;
`;

export const DivInput = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.password ? "space-between" : "flex-start"};
  align-items: center;
  width: 100%;
  margin: 0 10px;
  ${(props) => props.margin && `margin-top: 5px`}
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? `${props.height}px` : "40px")};
  width: ${(props) => (props.width ? `${props.width}` : "95%")};
  background-color: rgba(255, 255, 255, 0.35);
  font-family: "ABeeZee";
  font-weight: normal;
  font-size: 14px;
  color: #fcf0f0;
  padding: ${(props) =>
    props.src ? "2px 10px 2px 50px" : "2px 10px 2px 10px"};
  border: 0;
  ::placeholder {
    color: #fcf0f0;
    margin: 15px;
    opacity: 0.67;
  }
  ${(props) => props.margin && `margin-top: 5px`}
`;
