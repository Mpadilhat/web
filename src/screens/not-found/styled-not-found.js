import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #dcdc78;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
    img {
      margin: 0 0 5px 0;
      width: 200px;
      height: 200px;
    }
    h1 {
      font-size: 32px;
    }
    label {
      font-size: 16px;
    }
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  margin-right: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  line-height: 1px;
  font-size: 50px;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Link = styled.a`
  font-size: 18px;
`;
