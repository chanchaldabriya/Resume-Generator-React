import React from 'react';
import data from '../data/data.json';

export default function Intro() {
  return (
      <div className="Intro">
          <div className="Intro-name">{data.name}</div>
          <div className="Intro-designation">{data.designation}</div>
          <div className="Intro-summary">{data.intro_summary}</div>
          <div className="Intro-experience">{data.intro_experience}</div>
      </div>
  );
}