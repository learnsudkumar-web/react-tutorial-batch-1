import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from './pages/Home';
import Cookies from "js-cookie";


function App() {
  const [isTutorialModeOn, setIsTutorialModeOn] = useState(false);

  const handleTutorialMode = () => {
    const newValue = !isTutorialModeOn;
    setIsTutorialModeOn(newValue);
    Cookies.set("tutorialMode", newValue.toString(), { expires: 7 });
  };

  useEffect(() => {
    const savedTutorialMode = Cookies.get("tutorialMode");
    if (savedTutorialMode !== undefined) {
      setIsTutorialModeOn(savedTutorialMode === "true");
    }
  }, []);


  return (
    <div className='' id=''>
      <div className={`dev-mode d-flex justify-content-center border ${isTutorialModeOn && "bg-warning"}`} >
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onChange={handleTutorialMode} checked={isTutorialModeOn} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" for="flexSwitchCheckDefault">{isTutorialModeOn ? "Tutorial Mode" : "Student Mode"}</label>
        </div>
      </div>
      {isTutorialModeOn ? <h1>Tutorial Mode</h1> : <HomePage />}

    </div>
  )
}

export default App;