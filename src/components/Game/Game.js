import papper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";

import Btn from "../Options/Btn";

import "./Game.css";

function Game(props) {
  // Setting the Based on what the player picked
  const defineTypePicked = () => {
    if (props.match.params.pickedType === "papper") {
      return papper;
    } else if (props.match.params.pickedType === "scissors") {
      return scissors;
    } else if (props.match.params.pickedType === "rock") {
      return rock;
    }
  };

  // to randomize the play for the 'House'.
  let HouseName = "";
  const randomHousePicking = () => {
    let HousePicked = Math.floor(Math.random() * 3); // 0 is papper, 1 is scissors and 2 is rock
    console.log(HousePicked); // -------------------------------DEBUGGER
    if (HousePicked === 0) {
      HouseName = "papper";
      console.log("house pegou", HouseName); // -------------------------------DEBUGGER
      return papper;
    } else if (HousePicked === 1) {
      HouseName = "scissors";
      console.log("house pegou", HouseName); // -------------------------------DEBUGGER
      return scissors;
    } else if (HousePicked === 2) {
      HouseName = "rock";
      console.log("house pegou", HouseName); // -------------------------------DEBUGGER
      return rock;
    }
  };

  // Checking if the player has won (return true) or lost (return false)
  const playerWon = () => {
    console.log("Player:", props.match.params.pickedType, "House:", HouseName); // -------------------------------DEBUGGER
    if (props.match.params.pickedType === "papper") {
      if (HouseName === "rock") {
        return true;
      } else if (HouseName === "scissors") {
        return false;
      } else {
        console.log("tie"); // -------------------------------DEBUGGER
        return false;
      }
    } else if (props.match.params.pickedType === "rock") {
      if (HouseName === "papper") {
        return false;
      } else if (HouseName === "scissors") {
        return true;
      } else {
        console.log("tie"); // -------------------------------DEBUGGER
        return false;
      }
    } else if (props.match.params.pickedType === "scissors") {
      if (HouseName === "papper") {
        return true;
      } else if (HouseName === "rock") {
        return false;
      } else {
        console.log("tie"); // -------------------------------DEBUGGER
        return false;
      }
    }
  };

  return (
    <div id="game-main-container">
      <div>
        <h3>YOU PICKED</h3>
        <Btn
          type={defineTypePicked()}
          name={props.match.params.pickedType}
          alt={`${props.match.params.pickedType}-icon`}
        />
      </div>
      <div>
        <h3>THE HOUSE PICKED</h3>
        <Btn
          type={randomHousePicking()}
          name={HouseName}
          alt={`${HouseName}-icon`}
        />
      </div>
      {console.log(playerWon() ? "player ganhou" : "player perdeu")}
    </div>
  );
}

export default Game;
