import styled from "styled-components";
import { theme } from "../../assets";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  border: solid 2px ${theme.secondary};
  border-radius: 5px;
`;
