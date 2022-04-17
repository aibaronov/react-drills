import React, {useState} from 'react';
import './App.css';

function App() {
  const arrayOfStuff = ["Banana", "Drain Cleaner", "Squid", "Apathy", "Lego Star wars"]
  const [filteredArray, setFilteredArray] = useState(arrayOfStuff);

  function inputHandler(event){
    console.log(event.target.value);

    let returnArray = arrayOfStuff.filter((item) =>{
      if(item.toLowerCase().includes(event.target.value.toLowerCase())){
        return item;
      }
    })
    console.log(returnArray);
    setFilteredArray(returnArray);
  }
  return (
    <div className="App">
        <input onChange={inputHandler}></input>
        {filteredArray.map((item) => {
          return (
            <h4 key={item}>{item}</h4>      
          )
        })}
      
    </div>
  );
}

export default App;
