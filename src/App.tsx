import './App.css';
import React, {FC, useState, ChangeEvent} from 'react';
import { Task } from './Interface';
import ToDoTask from './toDoTask';

const App: React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [todoName, setTodoList] = useState<Task[]>([]);
  

  function handleChange (event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } 
  };

  function addTask  (): void {
    const newTask = { taskName: task };
    setTodoList ( [...todoName, newTask] );
    console.log(todoName);
  }

  function removeTask(task:any): void{
    const taskDelete = todoName;
    taskDelete.splice(task);
    setTodoList([...taskDelete])
  }

  return (

    <div className='App'>
       <h1 className='title'>Plans for the day</h1>
       <h2 className='titleBlock'>tasks</h2>
      <div className='inputContainer'>
        <input type = "text" name = 'task' onChange = {handleChange} value = {task} />
      </div> 
      <button onClick={addTask}> Add task </button>
      <button onClick={removeTask}> Delete task </button>
      <div className='toDotask'>
      {todoName.map((task: Task) => {
        return <ToDoTask task={task}/>;
        })}
      </div>
    </div>

  )
}

export default App;




