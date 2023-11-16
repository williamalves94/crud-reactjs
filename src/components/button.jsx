import React from 'react';
import { ButtonTask } from '../styles/style'


export const Button = ({ children, onClick }) => {
    return (
        <ButtonTask onClick={onClick}>{children}</ButtonTask>
    );
}
 
