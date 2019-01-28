import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json';
import Score from './component/Score';
import Dogs from './component/Dogs';

class App extends Component {
state = {
  result: "Begin Game!",
  score: 0,
  topScore: 0,
  dogs: dogs,
  numberOfDogs: dogs.length,
  guessArray:[]
}


componentDidMount(){
const newDogs = this.shuffleArray(dogs);
this.setState({dogs: newDogs})
console.log(this.state)
}

shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

clickHandle = id => {
  // is this picture is clicked before
  const guessedBefore = this.state.guessArray.includes(id);
  if(guessedBefore){
    // check if user hit new top score
    if(this.state.score > this.state.topScore){
      this.setState({
        topScore: this.state.score,
        score : 0,
        result : "You have already clicked this one!"
      })
      this.shuffleArray(this.state.dogs)
    } else {
      this.setState({
        score : 0,
        result : "You have already clicked this one!"
      })
      this.shuffleArray(this.state.dogs)
    }
   } // continue 
  else {
    if(this.state.score === (this.state.numberOfDogs-1)){
      this.setState({
        score: 0,
        topScore: 0,
        guessArray: [],
        result: "Welcome back"
      })
      alert("You have hit the highest score! To play again close this window!")
    }
    this.setState({
      score: this.state.score+1,
      guessArray: [...this.state.guessArray, id],
      result: "You guessed correctly!"
    })
    this.shuffleArray(this.state.dogs)
  } 
}

  render() {
    return (
      <>
      <Score result={this.state.result} 
      score={this.state.score}
      topScore={this.state.topScore}/>
      <div className="container">
      <div className="row">
      {this.state.dogs.map(dogs => (
        <Dogs 
        key={dogs.id}
        id={dogs.id}
        image={dogs.image}
        clickHandle={this.clickHandle}
        />
      ))}
      </div>
      </div>
   
      </>
    );
  }
}

export default App;