import './App.scss';
import React, {FC, useState, ChangeEvent} from 'react';

import ToDoTask from './toDoTask';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from "uuid";
import { ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField'
import { Task } from './Interface';


const App: React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [todoName, setTodoList] = useState<Task[]>([]);


  function handleChange (event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
  };

  function addTask  (): void {
    const newTask = { taskName: task, id:uuidv4() };
    setTodoList([...todoName, newTask]);
    console.log(newTask);

  }

  function removeTask(id: any): void{
    const removedArr = [...todoName].filter(todo => todo.id !== id);
    setTodoList(removedArr);
  }

  return (

    <div className='App'>
       <h1 className='title'>Plans for the day</h1>
       <h2 className='titleBlock'>tasks</h2>
      <div className='inputContainer'>
        <TextField id="outlined-basic" defaultValue="Small" size="small" label="Outlined" variant="outlined" type="text" name='task' onChange={handleChange} value={task} />
      </div> 
      <Button className='Addtask' variant="contained" color="success" onClick={addTask}>
      Add task
      </Button>
      <div className='toDotask'>
        {todoName.map((task: Task) => {
          return (
            <><ToDoTask task={task} />
              <Button variant="contained"  startIcon={<DeleteIcon />} onClick={() => removeTask(task.id)}>Delete</Button></>)
      })}
      </div>
    </div>

  )
}

export default App;





