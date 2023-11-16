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
    margin-bottom: 20px;
`;

export const AddTaskInput = styled.div` 
    width: 100%;
    display: flex;
    margin-top: 10px;

    input{
        height: 40px;
        background-color: #fff;
        border-radius: 10px;
        outline: none;
        border: none;
        padding: 10px;
        font-size: 15px;
        font-weight: 600;        
        flex: 2;
    }
`;

export const ButtonTask = styled.button`
    border: none;
    border-radius: 8px;
    background-color: DodgerBlue;
    margin-left: 10px;
    height: 40px;
    width: 100%;
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

    .input-task{
        display: flex;
        padding: 8px;
        margin: 8px 0;
        border-radius: 6px;
        justify-content: space-between;
        align-items: center;
        color: #000;
        background-color: #fff;
        width: 500px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
    }

    .title-task{
        background-color: #fff;
    }

    .remove-task-button{
        background-color: #fff;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #1981e9;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .see-task-details{
        background-color: #fff;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #1981e9;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .icon-close {
        background-color: #fff;
        margin-right: 5px;
        
    }

    .icon-see-details{
        background-color: #fff;
        font-size: 18px;
        margin-right: 10px;
    }

    .buttons-div{
        display: flex;
    }
`;

export const TextInfo = styled.div`
    margin-top: 20px;
    color: #fff;
    display: flex;
    flex-direction: column;
    border: 2px solid #1981e9;
    border-radius: 6px;
    background-color: #1981e9;
    padding: 20px;
    height: auto;
    .title-info{
        font-size: 30px;
        background-color: #1981e9;
        margin-bottom: 10px;
    }
    .text-into{
        background-color: #1981e9;
        font-size: 16px;
    }
`;

export const ButtonBack = styled.button`
    border: none;
    border-radius: 8px;
    background-color: DodgerBlue;
    height: 40px;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: all 0.5s ease;
        background-color: #1981e9;
    }
`;

export const AllTextDiv = styled.div`

`;