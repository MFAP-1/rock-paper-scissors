import { Link } from "react-router-dom";

import "./Btn.css";

function Btn(props) {
  const defineBorderColor = () => {
    if (props.name === "papper") {
      return "rgb(86, 113, 245)";
    } else if (props.name === "scissors") {
      return "rgb(237, 166, 30)";
    } else if (props.name === "rock") {
      return "rgb(222, 63, 91)";
    } else {
      return "";
    }
  };

  const defineShadowColor = () => {
    if (props.name === "papper") {
      return "rgb(42, 69, 195)";
    } else if (props.name === "scissors") {
      return "rgb(195, 108, 27)";
    } else if (props.name === "rock") {
      return "rgb(158, 22, 49)";
    } else {
      return "";
    }
  };

  const renderBtn = () => {
    return (
      <span className={props.winner ? "winner-gradient" : ""}>
        <Link to={"/game/" + props.name} name={props.name} type={props.type}>
          <button
            style={{
              border: `${defineBorderColor()} 1rem solid`,
              boxShadow: `0px 0.8vh ${defineShadowColor()}`,
            }}
          >
            <img src={props.type} alt={props.alt} />
          </button>
        </Link>
      </span>
    );
  };

  const renderBlankBtn = () => {
    return (
      <button
        className="blank-btn"
        style={{ backgroundColor: "rgb(22, 31, 62)" }}
      ></button>
    );
  };

  return <>{props.type !== "blank" ? renderBtn() : renderBlankBtn()}</>;
}
export default Btn;
