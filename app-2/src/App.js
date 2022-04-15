import React from 'react';
import ShowArray from './components/ShowArray';
import './App.css';

function App() {
  const values = ["Bananas", "Turtles", "Tacos", "Dinosaurs"]
  return (
    <div className="App">
      <ShowArray list={values}/>
    </div>
  );
}

export default App;
