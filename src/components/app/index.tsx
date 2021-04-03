import React, { useState } from "react";
import { Icon } from "@iconify/react";
import smiletongueIcon from "@iconify-icons/fxemoji/smiletongue";

import Button from "../button";
import NumbersDisplay from "../numbers-display";

import { generateCells } from "../../utils";

import "./styles.scss";

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());
  console.log(cells);

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((cell, colIndex) => (
        <Button
          key={`${rowIndex}-${colIndex}`}
          state={cell.state}
          value={cell.value}
          row={rowIndex}
          col={colIndex}
        />
      ))
    );
  };

  return (
    <div className="App">
      <div className="Header">
        <NumbersDisplay value={0} />
        <div className="Face">
          <Icon icon={smiletongueIcon} />
        </div>
        <NumbersDisplay value={23} />
      </div>
      <div className="Body">{renderCells()}</div>
    </div>
  );
};

export default App;
