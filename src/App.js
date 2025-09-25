import React, { useEffect, useState, createContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from './pages/Home';
import Cookies from "js-cookie";
import Tutorial from './pages/Tutorial';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Tutorial4 from './pages/Tutorial/Tutorial4';
import Tutorial3 from './pages/Tutorial/Tutorial3';
import { create } from 'react-test-renderer';
import Assignments from './pages/Assignments';
import InterviewQuestions from './pages/InterviewQuestions';
// import { BrowserRouter as Router, Routes } from 'react-router-dom';

export const AppContext = createContext();

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

      <AppContext.Provider value={{ isLoggedIn: true, username: "Sudhanshu" }}>
        <div className={`dev-mode d-flex justify-content-center border ${isTutorialModeOn && "bg-warning"}`} >
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onChange={handleTutorialMode} checked={isTutorialModeOn} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">{isTutorialModeOn ? "Tutorial Mode" : "Student Mode"}</label>
          </div>
        </div>

        <Router>
          <nav>
            <button className='btn btn-default'><Link to="/">Homepage</Link></button>
            <button className='btn btn-default'><Link to="/tutorial">Tutorial</Link></button>
            <button className='btn btn-default'><Link to="/tutorial/tutorial3">Tutorial3</Link></button>
            <button className='btn btn-default'><Link to="/tutorial/tutorial4">Tutorial4</Link></button>
            <button className='btn btn-default'><Link to="/assignments">Assignments</Link></button>
            <button className='btn btn-default'><Link to="/interview">Interview Questions</Link></button>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tutorial" element={<Tutorial />}>
              <Route path='tutorial3' element={<Tutorial3 />} />
              <Route path='tutorial4' element={<Tutorial4 />} />
            </Route>
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/interview" element={<InterviewQuestions />} />
          </Routes>
        </Router>

        {/* {isTutorialModeOn ? <Tutorial /> : <HomePage />} */}
      </AppContext.Provider>
    </div>

  )
}

export default App;