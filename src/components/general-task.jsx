import React from 'react';
import { InputTask } from '../styles/style';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
 
export const GeneralTask = ({ normaltasks, handleTaskClick, handleTaskRemove }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${normaltasks.title}`)
    }

    return (
        <InputTask>
            <div 
                className='input-task'
                style={normaltasks.completed ? { borderLeft: '6px solid #1981e9'} : {} }>
            <div 
                className='title-task'
                onClick={ () => handleTaskClick(normaltasks.id) }>
                { normaltasks.title }
            </div>
            <div className='buttons-div'>
                <button onClick={ handleTaskDetailsClick } className='see-task-details' ><CgInfo onClick={ handleTaskDetailsClick } className='icon-see-details'/></button>
                <button onClick={ () => handleTaskRemove(normaltasks.id) } className='remove-task-button'><CgClose className='icon-close'/></button>
            </div>
            </div>
        </InputTask>
    )
            

        
}


