import Score from "../Score/Score";
import "./Title.css";

function Title(props) {
  return (
    <div id="main-title-div">
      <div>
        <h1>
          ROCK
          <br />
          PAPPER
          <br />
          SCISSORS
        </h1>
      </div>
      <Score score={props.score} />
    </div>
  );
}
export default Title;
