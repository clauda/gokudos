import React from "react";
import ReactDOM from "react-dom";

import Kudo from "./components/Kudo";

import "./styles.scss";

function App() {
  return (
    <div className="base">
      <div className="jumbotron bg-success text-white">
        <div className="container">
          <h1>
            Go.<span className="text-dark font-weight-bolder">Kudos</span>
          </h1>
          <p>Share a Kudo on the Wall!</p>
        </div>
      </div>

      <div className="container">
        <Kudo />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
