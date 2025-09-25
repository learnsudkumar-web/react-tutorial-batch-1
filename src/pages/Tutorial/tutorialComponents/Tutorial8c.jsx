import React, { useContext } from "react";
import { TutorialContext } from "..";

const Tutorial8c = (props) => {
  const commonData = useContext(TutorialContext);
  return (
    <div className="bg-info">
      Tutorial8c <p>{props.name}</p>
      <h1>{props.name}</h1>
      <h2>The Common data passed was: {commonData}</h2>
    </div>
  );
};

export default Tutorial8c;
