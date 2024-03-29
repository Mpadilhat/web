import styled from "styled-components";
import { theme } from "../../assets";

export const DivCarousel = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border: solid 1.5px ${theme.secondary};
  border-radius: 8px;
  width: 700px;
  height: 400px;
  box-shadow: 0 4px 8px 0 ${theme.lightSecondary};
  background: ${(props) =>
    props.background &&
    `url(${props.background}) center no-repeat; transition: 0.95s ease`};

  @media (min-width: 700px) and (max-width: 825px) {
    width: 600px;
    height: 350px;
    background-size: 100% 100%;
  }

  @media (min-width: 575px) and (max-width: 699px) {
    width: 500px;
    height: 300px;
    background-size: 100% 100%;
  }

  @media (max-width: 574px) {
    width: 330px;
    height: 200px;
    background-size: 100% 100%;
  }
`;

export const DivButtonPrev = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.lightSecondary};
  width: 40px;

  @media (max-width: 524px) {
    width: 30px;
  }
`;

export const DivButtonNext = styled.div`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.lightSecondary};
  width: 40px;

  @media (max-width: 524px) {
    width: 30px;
  }
`;

export const PrevButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transform: rotate(180deg);

  :hover {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 524px) {
    width: 35px;
    height: 35px;

    :hover {
      width: 40px;
      height: 40px;
    }
  }
`;

export const NextButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;

  :hover {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 524px) {
    width: 35px;
    height: 35px;

    :hover {
      width: 40px;
      height: 40px;
    }
  }
`;
