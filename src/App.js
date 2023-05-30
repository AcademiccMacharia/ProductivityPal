import React, { useState } from 'react';
import data from "./components/data.json";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      
      <TodoForm addTask={addTask}/>
      <TodoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
    </div>
  );
}

export default App;
