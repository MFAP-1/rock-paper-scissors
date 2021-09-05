import Title from "./components/Title/Title";
import Options from "./components/Options/Options";
import RulesBtn from "./components/Rules/RulesBtn";
import Game from "./components/Game/Game";

import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div id="main-app-container">
      <Title />
      <BrowserRouter>
        <Route exact path="/" component={Options} />
        <Route path="/game/:pickedType" component={Game} />
      </BrowserRouter>

      <RulesBtn />
    </div>
  );
}

export default App;
