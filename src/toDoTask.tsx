import {Task} from './Task';
import React from "react";
import Box from '@mui/material/Box';

interface Props {
    task: Task
}
  
const ToDoTask = ({ task }: Props) => {
    return (
    <Box component={'div'}>
        <Box component={'div'}>
        <Box component="div" sx={{ display: 'inline' }}>{task.taskName}</Box>
        </Box>
    </Box>
    )
}

export default ToDoTask;