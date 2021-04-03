import React from "react";

import NumbersDisplay from "../numbers-display";

import "./styles.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <NumbersDisplay value={10} />
        <div className="Face">
          <span role="img" aria-label="face">
            icon
          </span>
        </div>
        <NumbersDisplay value={0} />
      </div>
      <div className="Body">Body</div>
    </div>
  );
};

export default App;
