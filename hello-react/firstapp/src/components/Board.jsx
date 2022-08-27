import React from "react";
import { data } from "../constant/data";

export default function Board({category}) {

  return (
    <div>
      {data.filter((item)=> item.category === category).map((item) => (
        <>
          <h1>{item.title}</h1>
          <span>{item.content}</span>
          <span>{item.category}</span>
        </>
      ))}
    </div>
  );
}
