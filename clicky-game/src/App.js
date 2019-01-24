import React, { Component } from 'react';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import './App.css';

class App extends Component {

  state = {
    randomId: 1,
    score: 0,
    tally: 0,
    characters: cards
  };

  componentDidMount() {
    this.setNewRandomId(this.state.characters);
  }
  
  render() {
    return (
     <div>

     </div>
    );
  }
}

export default App;
 