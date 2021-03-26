import styled from "styled-components";

export const DivCarousel = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border: solid 1.5px black;
  border-radius: 8px;
  width: 700px;
  height: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background: ${(props) =>
    props.background &&
    `url(${props.background}) center no-repeat; transition: 0.95s ease`};

  @media (min-width: 700px) and (max-width: 825px) {
    width: 600px;
    height: 350px;
  }

  @media (min-width: 575px) and (max-width: 699px) {
    width: 500px;
    height: 300px;
  }

  @media (max-width: 574px) {
    width: 330px;
    height: 200px;
  }
`;

export const DivButtonPrev = styled.div`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
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
  background: rgba(0, 0, 0, 0.7);
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
