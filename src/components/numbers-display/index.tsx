import React from "react";

import "./styles.scss";

interface NumbersDisplayProps {
  value: number;
}

const NumbersDisplay: React.FC<NumbersDisplayProps> = ({ value }) => {
  return (
    <div className="NumbersDisplay">{value.toString().padStart(3, "0")}</div>
  );
};

export default NumbersDisplay;
