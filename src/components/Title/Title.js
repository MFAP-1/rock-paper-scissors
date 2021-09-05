import Score from "../Score/Score";
import "./Title.css";

function Title() {
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
      <Score />
    </div>
  );
}
export default Title;
