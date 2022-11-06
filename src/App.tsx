import './App.css';
import React, {FC, useState, ChangeEvent} from 'react';
import ToDoItem from './toDoItem/toDoItem';
import  toDoData  from "./toDoData";
import {Task} from './Interface';

const App: React.FC = () => {

  const [task, setTask] = useState<string>('');
  const [todoName, setTodoList] = useState<Task[]>([]);
  
  // const arr1 = [1, 3, 4];
  // const arr2 = [...arr1, 6, 9, 12]
  // ...arr1;//в даному значенні знаходятся 1,3,4

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

  let toDoItem = toDoData.map(item => {
    return (
      <ToDoItem
        key = { item.id }
        description = { item.desc }
        complete = { item.complete }
        chanEvent = { () => { console.log('task', item.id)}}
      />
    )
  });

  return (

    <div className='App'>
       <h1 className='title'>Plans for the day</h1>
       <h2 className='titleBlock'>tasks</h2>
      <div className='inputContainer'>
          <input type="text" name='task' onChange={ handleChange }/>
      </div> 
      { toDoItem }
      <div className='todotask'>
        {/* ... */}
      </div>
      <button onClick = { addTask }> Add task </button>
    </div>

  )
}

export default App;
