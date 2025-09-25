import React from "react";
import { WithBorder } from "../Tutorial8";
import Tutorial8c from "./Tutorial8c";

const Tutorial8b = (props) => {
  const Tutorial8bChild = WithBorder(Tutorial8c);

  return (
    <div className="bg-secondary">
      <h1>Tutorial 8b</h1>

      <Tutorial8bChild name={props.name} />
    </div>
  );
};

export default Tutorial8b;
