import React from "react";

import "./Score.css";

function Score(props) {
  return (
    <div id="white-bg-score">
      <p id="score-title">SCORE</p>
      <p id="current-score-display">{props.score}</p>
    </div>
  );
}

export default Score;
