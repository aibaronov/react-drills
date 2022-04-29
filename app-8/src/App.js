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
    // const abilities = this.state.psyduckAbilities;
    const abilities = undefined;
    // const allAbilities = abilities.map(ability => ability.ability.name);
    // const psyduckStuff = {"ability":{"name":"damp","url":"https://pokeapi.co/api/v2/ability/6/"},"is_hidden":false,"slot":1};
    // console.log('abilities', typeof(abilities));
    return (
      <div>
        <h1>Pokemon Name: {this.state.psyduckName}</h1>
        <h3>List of abilities:</h3>
        {/* {allAbilities.map(ability => {
          return (
            <li>{ability}</li>
          ) */}
        {/* })} */}
        <h3>{JSON.stringify(abilities)}</h3>
        {/* {(abilities[0] && <h3>{JSON.stringify(abilities[0].ability)}</h3>)} */}
        {/* {(abilities && <h3>{abilities[0].ability.name}</h3>)} */}
        {/* {psyduckStuff.ability.name} */}

      </div>
    )
  }
}

export default App;