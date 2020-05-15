import React from "react";
import MiniPost from "./MiniPost";

export default function TwoMiniPost({ list }) {
  return (
    <div className="TwoMiniPost">
        {list.map(item => <MiniPost title={item.name} subtitle={item.proficiency} key={item.name}/>)}
    </div>
  );
}