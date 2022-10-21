import './App.css';
import React from 'react';
import ToDoItem from './toDoItem/toDoItem.js';
import toDoData from "./toDoData.js";


function App() {
  let changeEvent = (id) => {
    console.log('event changed');
  }
  let toDoItem = toDoData.map(item => {
    return (
      <ToDoItem
        key={item.id}
        description={item.desc}
        complete={item.complete}
        chanEvent = {()=>{changeEvent()}}  
      />
    )
  });
  return (
    <div className='App'>
      <h1 className='title'>Plans for the day</h1>
      <h2 className='titleBlock'>tasks</h2>
     {toDoItem}
    </div>
  )
}

export default App;
