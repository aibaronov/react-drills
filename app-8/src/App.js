import React, {Component} from 'react';
import './App.css'
import axios from 'axios';

class App extends Component{
  constructor(){
    super();

    this.state = {
      psyduckName: '',
      psyduckAbilities: []
    }
  }
  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon/psyduck').then((res) => {
      console.log(res.data);
      this.setState({
        psyduckName: res.data.name,
        psyduckAbilities: res.data.abilities,
      })
    })
  }

  render(){
    const abilities = this.state.psyduckAbilities;
    const allAbilities = abilities.map(ability => ability.ability.name);
    console.log(allAbilities);
    return (
      <div>
        <h1>Pokemon Name: {this.state.psyduckName}</h1>
        <h3>List of abilities:</h3>
        {allAbilities.map(ability => {
          return (
            <li>{ability}</li>
          )
        })}

      </div>
    )
  }
}

export default App;