import React from "react";

import "./Score.css";

class Score extends React.Component {
  // state = { // moved to the main wraper of the program
  //   score: 0,
  //   gameOver: false,
  //   playerWon: false,
  // };

  // method to update the score on the screen
  // updateScore = () => {
  // console.log("entrou no update");
  // if (this.state.gameOver) {
  // if (this.state.playerWon) {
  // this.setState({ score: this.state.score + 1 });
  // } else {
  // this.setState({ score: this.state.score - 1 });
  // }
  // }
  // };

  render() {
    // console.log("score rendered");
    return (
      <div id="white-bg-score">
        <p id="score-title">SCORE</p>
        <p id="current-score-display">{this.props.score}</p>
      </div>
    );
  }
}

export default Score;
