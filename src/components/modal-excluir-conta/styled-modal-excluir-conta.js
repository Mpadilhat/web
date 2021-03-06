import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const Question = styled.label`
  margin: 10px 0 10px -20px;
  font-size: 16px;
  line-height: 0.9;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  font-style: italic;
  ${(props) => props.center && "text-align: center; line-height: 1.5"};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin-left: -20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  max-width: 150px;
  font-size: 20px;
  color: white;
  ${(props) =>
    props.red
      ? "background: rgba(155, 0, 0, 0.97)"
      : "background: rgba(0, 0, 0, 0.97)"};

  :hover {
    opacity: 0.9;
  }
`;
