import React, {useState} from 'react';
import ToDo from './components/ToDo';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);

  function getInput(event){
    setTask(event.target.value);
    // console.log(task);
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(task);
    setTaskArray([...taskArray, task]);
    console.log(taskArray);
  }
  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input onChange={getInput}></input>
      <button onClick={submitHandler}>Add</button>
      <ToDo list={taskArray}/>
      
    </div>
  );
}

export default App;
