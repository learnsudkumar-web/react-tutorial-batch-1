import React from "react";
import { WithBorder } from "../Tutorial8";
import Tutorial8b from "./Tutorial8b";

const Tutorial8a = (props) => {
  const Tutorial8aChild = WithBorder(Tutorial8b);

  return (
    <div className="bg-primary">
      <h1>Tutorial 8a</h1>

      <Tutorial8aChild name={props.name} />
    </div>
  );
};

export default Tutorial8a;
