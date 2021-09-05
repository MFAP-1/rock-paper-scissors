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
    }
  };

  const defineShadowColor = () => {
    if (props.name === "papper") {
      return "rgb(42, 69, 195)";
    } else if (props.name === "scissors") {
      return "rgb(195, 108, 27)";
    } else if (props.name === "rock") {
      return "rgb(158, 22, 49)";
    }
  };

  return (
    <Link to={"/game/" + props.name} name={props.name} type={props.type}>
      {console.log("renderizou um ", props.type)}
      <button
        style={{
          border: `${defineBorderColor()} 1rem solid`,
          boxShadow: `0px 0.8vh ${defineShadowColor()}`,
        }}
      >
        <img src={props.type} alt={props.alt} />
      </button>
    </Link>
  );
}
export default Btn;
