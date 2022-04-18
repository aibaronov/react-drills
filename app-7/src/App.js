import React, {useState} from 'react';
import NewTask from './components/NewTask';
import List from './components/List';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  const [counter, setCounter] = useState(0);

  function getTask(event){
      event.preventDefault();
      setTask(event.target.value);
  }
  function submitTask(event){
      event.preventDefault();
      setTaskArray([...taskArray, task]);
      updateCounter();
      console.log(taskArray);
  }
  function updateCounter(){
    setCounter(prevCounter => prevCounter +1);
    console.log(counter);
  }
  return (
    <div className="App">
      <NewTask getTaskFn={getTask} submitTaskFn={submitTask}/>
      <List tasks={taskArray} counter={counter}/>
    </div>
  );
}

export default App;
