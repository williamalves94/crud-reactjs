import React from "react";
import { GeneralTask } from './general-task';

export const DailyTask = ({ normaltasks }) => {
    return (
        <>
            {normaltasks.map((normaltasks) => <GeneralTask normaltasks={ normaltasks }/>)}
        </>
    )

}

