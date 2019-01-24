import React, { Component } from 'react';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import './App.css';

class App extends Component {

  state = {
    result: 1,
    score: 0,
    topScore: 0,
    characters: cards
  };

  componentDidMount() {
    this.setNewRandomId(this.state.characters);
  }

  handleClicked = id => {
    this.setState({
      topScore: this.state.topScore + 1
    });
    if (this.state.result === id) {
      this.setState({
        score: this.state.score + 1
      });
      this.setNewRandomId(this.state.characters);
    }
  }

  setNewRandomId = (array) => {
    const result = array[Math.floor(Math.random() * array.length)].id;
    this.setState({
      result: result
    });
  }

  render() {
    return (
      <div className="container">
        <Scoreboard
          title="Clicky Game Woot-Woot"
          score={this.state.score}
          topScore={this.state.topScore}
          result={this.state.result}
        />
        <div className="row">
          {this.state.characters.map(characters => (
            <Card
              key={characters.id}
              id={characters.id}
              name={characters.name}
              image={characters.image}
              handleClicked={this.handleClicked}
            />
          ))}
     </div>
     </div>
        );
      }
    }
    
    export default App;
 