import React from "react";

import "./styles.scss";

interface NumbersDisplayProps {
  value: number;
}

const NumbersDisplay: React.FC<NumbersDisplayProps> = ({ value }) => {
  return (
    <div className="NumbersDisplay">
      {value < 0
        ? `-${Math.abs(value).toString().padStart(2, "0")}`
        : value.toString().padStart(3, "0")}
    </div>
  );
};

export default NumbersDisplay;
