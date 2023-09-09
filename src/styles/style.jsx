import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DivCrud = styled.div`
    max-width: 600px;
    min-height: 400px;
    border: 2px solid DodgerBlue;
    border-radius: 15px;
    padding: 30px;
    justify-content: center;
    font-size: 13px;
    color: #fff;
`;

export const Head = styled.header`
    font-size: 30px;
    font-weight: bold;
    font-family: sans-serif;
    color: #fff;
    display: flex;
    justify-content: center;
`;

export const DivInputAndButton = styled.div` 
    max-width: 600px;
    flex-direction: column;
    margin-top: 10px;

    input{
        height: 40px;
        background-color: #fff;
        border-radius: 10px;
        outline: none;
        border: none;
        padding: 10px;
        font-size: 15px;
        font-weight: bold;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: DodgerBlue;
    margin-left: 10px;
    height: 40px;
    width: 120px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    flex: 1;
    &:hover{
        transition: all 0.5s ease;
        background-color: #1981e9;
    }
`;

export const InputTask = styled.div`
    display: flex;
    padding: 8px;
    margin: 8px 0;
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    color: #000;
    background-color: #fff;
    width: 500px;
    font-size: 15px;    
`;