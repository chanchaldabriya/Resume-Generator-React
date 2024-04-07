import React from "react";
import SocialItem from "./SocialItem";

export default function Social({ profiles }) {
  let profileArr = Object.entries(profiles),
    halfLength = Math.ceil(profileArr.length / 2);
  return (
    <div className="Social">
      <div className="Social-left-pane">
        <ul>
          {profileArr.slice(0, halfLength).map(item => (
            <li key={item[0]}>
              <SocialItem type={item[0]} text={item[1]} />
            </li>
          ))}
        </ul>
      </div>
      <div className="Social-right-pane">
        <ul>
          {profileArr.slice(halfLength).map(item => (
            <li key={item[0]}>
              <SocialItem type={item[0]} text={item[1]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
