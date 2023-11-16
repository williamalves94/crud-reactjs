import { useState } from 'react';
import { AddTaskInput } from '../styles/style';
import { Button } from './button'

export const AddTask = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = useState('');

    const handleInputChanged = (e) => {
        console.log(e.target.value)
        setInputData(e.target.value);
    }

    const handleTaskAdd = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return(
        <AddTaskInput>
            <input  onChange={handleInputChanged} value={inputData} type="text" />
            <Button onClick={handleTaskAdd}>Adicionar</Button>          
        </AddTaskInput>
    )
}