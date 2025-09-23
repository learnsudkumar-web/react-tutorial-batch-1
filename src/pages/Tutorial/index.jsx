import React from "react";
import Tutorial2 from "./Tutorial2";
import Tutorial3 from "./Tutorial3";
import Tutorial4 from "./Tutorial4";
import Tutorial5 from "./Tutorial5";

const Tutorial = () => {
  const papaKaGyan = "Assignment kr lo!";
  const anotherGyan = "Paise bachao!";

  return (
    <div className="tutorial-homepage">
      {/* <Tutorial3 size={17} gyan={papaKaGyan} />
      <hr></hr>
      <Tutorial2 /> */}
      <Tutorial5 />
    </div>
  );
};

export default Tutorial;

// Level 1: Tutorial - index
//  \_> Level 2: Tutorial3.jsx
//            \_> Level 3: ChotaTutorial3.jsx
