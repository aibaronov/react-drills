import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <MainHeader />
      </header>
      <h1>Cheeky Breeky</h1>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
