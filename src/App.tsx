import './App.css';
import React, {FC, useState, ChangeEvent} from 'react';
import ToDoItem from './toDoItem/toDoItem';
import  toDoData  from "./toDoData";
import { Task } from './Interface';

const App: React.FC = () => {
  // let changeEvent = (id: number) => {
  //   console.log(id);
  // }

  const [task, setTask] = useState<string>('');
  const [todo, setTodoList] = useState<Task[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } 
  };
  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todo, newTask]);
    console.log(todo)
  }
  let toDoItem = toDoData.map(item => {
    return (
      <ToDoItem
        key={item.id}
        description={item.desc}
        complete={item.complete}
        chanEvent = {(str)=>{console.log (str, item.id)}}
      />
    )
  });
  return (
    <div className='App'>
      <h1 className='title'>Plans for the day</h1>
      <h2 className='titleBlock'>tasks</h2>
      <div className='inputContainer'>
          <input type="text" name='task' onChange={handleChange}/>
       </div> 
      {toDoItem}
      <div className='todotask'>
        
      </div>
      <button onClick={addTask}>Add task</button>
    </div>
  )
}

export default App;
