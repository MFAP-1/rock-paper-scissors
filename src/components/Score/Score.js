import React from "react";
import "./Score.css";

class Score extends React.Component {
  state = {
    score: 0,
  };

  render() {
    return (
      <div id="white-bg-score">
        <p id="score-title">SCORE</p>
        <p id="current-score-display">{this.state.score}</p>
      </div>
    );
  }
}

export default Score;
