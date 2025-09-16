import React from "react";

const HomePageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to React Tutorials</h1>
          <p className="lead">
            Learn React step by step with simple examples and projects.
          </p>
          <a href="#" className="btn btn-light btn-lg mt-3">
            Get Started
          </a>
        </div>
      </header>

      {/* Features */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h3>Beginner Friendly</h3>
                <p>Start from scratch and understand React basics easily.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h3>Hands-On Projects</h3>
                <p>Build real-world apps while learning step by step.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h3>Live Lectures</h3>
                <p>Enjoy learning live with live coding examples.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageContent;
