import React from "react";

export default function List({ title, subtitle, items, style }) {
  return (
    <div className="List" style={style}>
      {title && <div className="List-title">{title}</div>}
      {subtitle && <div className="List-subtitle">{subtitle}</div>}
      { items && <ul className="List-items">
        {items.map(listItem => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul> }
    </div>
  );
}
