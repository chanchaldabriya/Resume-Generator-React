import React from 'react';

export default function Section({title, children}) {
  return (
      <div className="Section">
          <div className="Section-title">{title || "Section"}</div>
          {children}
      </div>
  );
}