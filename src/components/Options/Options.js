import papper from "../../images/icon-paper.svg";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";

import Btn from "./Btn";

import "./Options.css";

function Options(props) {
  return (
    <div id="btn-options-container">
      <div>
        <Btn type={papper} name="papper" alt="papper-icon" />
        <Btn type={scissors} name="scissors" alt="scissors-icon" />
      </div>
      <div>
        <Btn type={rock} name="rock" alt="rock-icon" />
      </div>
    </div>
  );
}

export default Options;
