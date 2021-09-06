import Title from "./components/Title/Title";
import Options from "./components/Options/Options";
import RulesBtn from "./components/Rules/RulesBtn";
import Game from "./components/Game/Game";

import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

class App extends React.Component {
  state = {
    score: 0,
    gameOver: false,
    playerWon: false,
  };

  updateScore = () => {
    console.log("entrou no update");
    // if (this.state.gameOver) {
    // if (this.state.playerWon) {
    this.setState({ score: this.state.score + 1 });
    // } else {
    // this.setState({ score: this.state.score - 1 });
    // }
    // }
  };

  render() {
    return (
      <div id="main-app-container">
        <Title score={this.state.score} />
        <BrowserRouter>
          <Route exact path="/" component={Options} />
          <Route
            path="/game/:pickedType"
            component={Game}
            // update={this.updateScore}
            // render={() => <Game {...props} update={this.updateScore} />}
          />
          <Route path="/result" />
        </BrowserRouter>

        <RulesBtn />
      </div>
    );
  }
}

export default App;

// export const updateScore = () => {
//   console.log("entrou no update");
//   // if (this.state.gameOver) {
//   // if (this.state.playerWon) {
//   this.setState({ score: this.state.score + 1 });
//   // } else {
//   // this.setState({ score: this.state.score - 1 });
//   // }
//   // }
// };
