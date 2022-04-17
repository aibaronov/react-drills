import React from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image';

function App() {
  const imageURL = 'https://www.kindpng.com/picc/m/605-6052820_transparent-anime-cat-girl-png-cute-funny-anime.png'
  return (
    <div className="App">
      <Image link={imageURL}/>
    </div>
  );
}

export default App;
