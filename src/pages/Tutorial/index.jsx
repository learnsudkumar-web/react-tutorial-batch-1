import React, { createContext, useContext, useState } from "react";
import Tutorial2 from "./Tutorial2";
import Tutorial3 from "./Tutorial3";
import Tutorial4 from "./Tutorial4";
import Tutorial5 from "./Tutorial5";
import Tutorial6 from "./Tutorial6";
import Tutorial7 from "./Tutorial7";
import Tutorial8 from "./Tutorial8";
import { Outlet } from "react-router-dom";
import Tutorial9 from "./Tutorial9";

export const TutorialContext = createContext();

const Tutorial = () => {
  const [commonTutorialData, setCommonTutorialData] =
    useState("React Tutorial");

  return (
    <div className="tutorial-homepage bg-warning p-5">
      {/* <Tutorial3 size={17} gyan={papaKaGyan} />
      <hr></hr>
      <Tutorial2 /> */}
      <Outlet />
      <TutorialContext.Provider value="Some common data">
        {/* <Tutorial8 name="React Tutorial 8" /> */}
        <Tutorial9 />
      </TutorialContext.Provider>
    </div>
  );
};

export default Tutorial;

// Level 1: Tutorial - index
//  \_> Level 2: Tutorial3.jsx
//            \_> Level 3: ChotaTutorial3.jsx
