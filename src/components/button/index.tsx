import React from "react";
import { Icon } from "@iconify/react";
import bombIcon from "@iconify-icons/mdi/bomb";
import flagInHole from "@iconify-icons/emojione/flag-in-hole";

import { CellState, CellValue } from "../../types";

import "./styles.scss";

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
}

const Button: React.FC<ButtonProps> = ({ state, value, row, col }) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.Visible) {
      if (value === CellValue.Bomb) {
        return <Icon icon={bombIcon} />;
      }

      if (value === CellValue.None) {
        return null;
      }

      return value;
    } else if (state === CellState.Flagged) {
      return <Icon icon={flagInHole} />;
    }

    return null;
  };

  return (
    <div
      className={`Button
      ${state === CellState.Visible ? "visible" : ""} value-${value}`}
    >
      {renderContent()}
    </div>
  );
};

export default Button;
