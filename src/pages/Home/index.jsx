import React, { useState } from "react";
import "./_home.scss";
import homeNavs from "./homeStaticNav";
import HomePageContent from "../../components/HomePageContent";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(<HomePageContent />);

  function handleNavClicks(e, navId) {
    e.preventDefault();
    if (homeNavs.length > 0) {
      let currPage = homeNavs.find((page) => page.id === navId).comp;
      setCurrentPage(currPage);
    }
  }
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">React Tutorials</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => handleNavClicks(e, "home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => handleNavClicks(e, "lectures")}
                >
                  Lectures
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => handleNavClicks(e, "assignments")}
                >
                  Assignments
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => handleNavClicks(e, "projects")}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={(e) => handleNavClicks(e, "interview-questions")}
                >
                  Interview Questions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="rendered-component-container">{currentPage}</div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} React Tutorials. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
