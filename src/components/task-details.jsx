import React from 'react';
import { ButtonBack, TextInfo, AllTextDiv } from '../styles/style';
import { useParams, useHistory } from 'react-router-dom';

export const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <AllTextDiv>
            <ButtonBack onClick={ handleBackButtonClick }>
                Voltar
            </ButtonBack>
            <TextInfo>
                <p className='title-info'>{params.taskTitle}</p>
                <p className='text-into'>testing software deploying management upscale to the source code</p>
            </TextInfo>
        </AllTextDiv>
    );
}