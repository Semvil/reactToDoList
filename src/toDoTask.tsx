import {Task} from './Interface';
import React from "react"



interface Props {
    task: Task;
}
  
const ToDoTask = ({ task }: Props) => {
    return (
        <div className="task">
        <div className="content">
          <span>{task.taskName}</span>
        </div>
        </div>
    )
}

export default ToDoTask;