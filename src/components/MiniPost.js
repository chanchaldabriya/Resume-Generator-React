import React from "react";

export default function MiniPost({ title, subtitle }) {
  return (
    <div className="MiniPost">
      {title && <div className="MiniPost-title">{title}</div>}
      {subtitle && <div className="MiniPost-subtitle">{subtitle}</div>}
    </div>
  );
}