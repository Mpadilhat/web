import styled from "styled-components";

export const Body = styled.body`
    background-color: #FAD246;
    width: 100%;
    height: 900px;
    padding: 0;
    margin: 0;
`;

export const Container = styled.div`
    width: 94.5vw;
    height: 100vh;
    display: flex; 
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    border: solid 1px black;
    width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
`;

export const Line = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
    align-items: center;
    margin-left: 60px;

`;

export const Image = styled.img`
    width: ${props => props.width ? `${props.width}` : "170px"};
    height: ${props => props.height ? `${props.height}` : "150px"};
`;

export const Input = styled.input`
    height: 30px;
    width: 400px;
    background: black;
    opacity: 0.6;
    padding: 15px;
    font-family: "ABeeZee";
    font-size: 24px;
    margin-top: 10px;
    border-radius: 4px;

`;

export const Button = styled.button`
    height: 60px;
    width: 430px;
    background: black;
    padding: 15px;
    font-family: "ABeeZee";
    font-weight: bold;
    font-size: 24px;
    margin-top: 10px;
    color: white;
    border-radius: 4px;
`;

