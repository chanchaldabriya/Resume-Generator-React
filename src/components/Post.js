import React from "react";

export default function Post({ title, subtitle, dateRange, location, children }) {
  return (
    <div className="Post">
      {title && <div className="Post-title">{title}</div>}
      {subtitle && <div className="Post-subtitle">{subtitle}</div>}
      <div className="Post-date-location">
        {dateRange && <span className="Post-date-range">{dateRange}</span>}
        {location && <span className="Post-location">{location}</span>}
      </div>
      { children }
    </div>
  );
}