import React, {Component} from "react";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Characters from "./src/Characters.json";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  state = {
    Characters,
    score: 0,
    topScore: 0,
    showAlert: 0,
    showSuccess: 0,
    clickedCharacters: []
  };

  clickedImage = id => {
    let clickedCharacters = this.state.clickedCharacters;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0
    });
    
    if (clickedCharacters.indexOf(id) === -1) {
      clickedCharacters.push(id);
      console.log(clickedCharacters);
      this.handleIncrement();
      this.makeShuffle();
    } else if (this.state.score === 12) {
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedCharacters: []
      });
    } else {
      this.setState({
        score: 0,
        clickedCharacters: []
      });
      console.log("duplicate")
      this.setState({
        showAlert: 1
      });
  
    }

    if (score > topScore) {
      this.setState({
        topScore: score
      })
    } 
  }

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  makeShuffle = () => {
    this.setState({ Characters: shuffle(Characters) })
  }


  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <div className="alert alert-danger" style={{opacity: this.state.showAlert}}>Sorry you clicked the same person twice, start over</div>
        <div className="alert alert-success" style={{opacity: this.state.showSuccess }}>You win, you clicked each character with out clicking doubles</div>
        <Wrapper>
          {this.state.characters.map(character => (
            <Characters 
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              clickedImage={this.clickedImage}
            />
          ))}
          
        </Wrapper>


        
      </div>
    )
  }
}

export default App;