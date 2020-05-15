import React from "react";

export default function Chips({ chipStyle, list }) {
  return (
    <div className="Chips">
      {list.map(item => (
        <span
          key={item}
          className="Chips-item"
          style={{
            color: chipStyle.fgColor,
            backgroundColor: chipStyle.bgColor,
            borderColor: chipStyle.borderColor,
            borderWidth: chipStyle.borderWidth,
            borderStyle: chipStyle.borderStyle
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

Chips.defaultProps = {
  chipStyle: {
    fgColor: "white",
    bgColor: "var(--main-color)",
    borderColor: "transparent",
    borderStyle: "solid",
    borderWidth: 1
  }
};
