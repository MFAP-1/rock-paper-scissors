import React from "react";
import { Link } from "react-router-dom";

import papper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";

import Btn from "../Options/Btn";

import "./Game.css";

class Game extends React.Component {
  state = {
    player: {
      wins: null,
    },
    house: {
      name: "",
      type: "",
    },
  };

  // Setting the Based on what the player picked
  definePickedType = () => {
    if (this.props.match.params.pickedType === "papper") {
      return papper;
    } else if (this.props.match.params.pickedType === "scissors") {
      return scissors;
    } else if (this.props.match.params.pickedType === "rock") {
      return rock;
    }
  };

  // to randomize the play for the 'House'.
  randomHousePicking = () => {
    do {
      let HousePicked = Math.floor(Math.random() * 3); // 0 is papper, 1 is scissors and 2 is rock
      if (HousePicked === 0) {
        this.setState({ house: { name: "papper", type: papper } });
      } else if (HousePicked === 1) {
        this.setState({ house: { name: "scissors", type: scissors } });
      } else if (HousePicked === 2) {
        this.setState({ house: { name: "rock", type: rock } });
      }
    } while (this.state.house.name === this.props.match.params.pickedType); // avoiding the tie scenario
  };

  // Checking if the player has won (return true) or lost (return false)
  setResult = () => {
    if (this.props.match.params.pickedType === "papper") {
      if (this.state.house.name === "rock") {
        this.setState({ player: { wins: true } });
      } else if (this.state.house.name === "scissors") {
        this.setState({ player: { wins: false } });
      }
    } else if (this.props.match.params.pickedType === "rock") {
      if (this.state.house.name === "papper") {
        this.setState({ player: { wins: false } });
      } else if (this.state.house.name === "scissors") {
        this.setState({ player: { wins: true } });
      }
    } else if (this.props.match.params.pickedType === "scissors") {
      if (this.state.house.name === "papper") {
        this.setState({ player: { wins: true } });
      } else if (this.state.house.name === "rock") {
        this.setState({ player: { wins: false } });
      }
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.randomHousePicking();
    }, 1500);
  };

  // render House's Pick (blank render pick included)
  renderHousePick = () => {
    if (this.state.house.name !== "") {
      return (
        <div>
          <h3>THE HOUSE PICKED</h3>
          <Btn
            type={this.state.house.type}
            name={this.state.house.name}
            alt={`${this.state.house.name}-icon`}
            winner={!this.state.player.wins}
          />
        </div>
      );
    } else {
      // when the house hasn't pick yet, print blank
      return (
        <div>
          <h3>THE HOUSE PICKED</h3>
          <Btn type="blank" />
        </div>
      );
    }
  };

  // render the final result
  evaluateResult = () => {
    if (this.state.player.wins !== null) {
      return (
        <div>
          {this.state.player.wins ? <h2>YOU WIN</h2> : <h2>YOU LOSE</h2>}
          <Link to={"/"}>
            <button id="result-btn">PLAY AGAIN</button>
          </Link>
        </div>
      );
    }
  };

  // method to update the Score
  componentWillUnmount = () => {
    this.props.updateScore(this.state.player.wins);
  };

  render() {
    // Checking the conditions to set the result
    if (this.state.player.wins === null) {
      this.setResult();
    }
    return (
      <div id="game-main-container">
        <div>
          <h3>YOU PICKED</h3>
          <Btn
            type={this.definePickedType()}
            name={this.props.match.params.pickedType}
            alt={`${this.props.match.params.pickedType}-icon`}
            winner={this.state.player.wins}
          />
        </div>
        {this.evaluateResult()}
        {this.renderHousePick()}
      </div>
    );
  }
}

export default Game;
