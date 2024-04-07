import React from "react";

export default function List({ title, subtitle, items, style, titleDesc }) {
  return (
    <div className="List" style={style}>
      <div className="List-title-wrapper">
        {title && <div className="List-title">{title}</div>}
        {title && <div className="List-title-desc">{titleDesc}</div>}
      </div>
      {subtitle && <div className="List-subtitle">{subtitle}</div>}
      { items && <ul className="List-items">
        {items.map(listItem => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul> }
    </div>
  );
}
