import React from 'react';
import { InputTask } from '../styles/style';
 
export const GeneralTask = ({ normaltasks }) => {
    
    return <InputTask>{normaltasks.title}</InputTask>
}