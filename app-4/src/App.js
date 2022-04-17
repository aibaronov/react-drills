import React, {useState} from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function userNameHandler(event){
    setUserName(event.target.value);
  }

  function passwordHandler(event){
    setPassword(event.target.value);
  }

  function submitHandler(event){

    event.preventDefault();
    alert(`Username: ${userName} and Password: ${password}`)

  }
  return (
    <div className="App">
      <input onChange={userNameHandler}></input>
      <input onChange={passwordHandler}></input>
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default App;
