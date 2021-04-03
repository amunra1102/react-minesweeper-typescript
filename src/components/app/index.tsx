import React, { useState } from "react";

import Button from "../button";
import NumbersDisplay from "../numbers-display";

import { generateCells } from "../../utils";

import "./styles.scss";

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) => <Button key={`${rowIndex}-${colIndex}`} />)
    );
  };

  return (
    <div className="App">
      <div className="Header">
        <NumbersDisplay value={0} />
        <div className="Face">
          <span role="img" aria-label="face">
            icon
          </span>
        </div>
        <NumbersDisplay value={23} />
      </div>
      <div className="Body">{renderCells()}</div>
    </div>
  );
};

export default App;
