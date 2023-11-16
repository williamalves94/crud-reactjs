import React from "react";
import { GeneralTask } from './general-task';

export const DailyTask = ({ normaltasks, handleTaskClick, handleTaskRemove }) => {
    return (
        <>
            {normaltasks.map(
                (normaltasks) => <GeneralTask 
                normaltasks={ normaltasks } handleTaskClick={ handleTaskClick } handleTaskRemove={ handleTaskRemove }/>
            )}
        </>
    )

}

