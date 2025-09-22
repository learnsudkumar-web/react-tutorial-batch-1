import React, { useRef, useState } from "react";
import Tutorial2 from "./Tutorial2";

const Tutorial4 = ({ gyan, size }) => {
  const Lecture2WithBorder = ModifyComponent(Tutorial2);

  let lectureName = "Trial Lecture";

  const emailRef = useRef();
  const anotherRef = useRef();
  console.log(emailRef.current);
  // console.log("using ref: ", emailRef.current.value);
  console.log("using js: ", document.getElementById("exampleInputPassword1"));

  const [email, setEmail] = useState("abc@gmail.com");

  function returnsSomething() {
    let x, y;
    x = 5;
    y = 10;
    return [x, y];
  }

  const [a, b] = returnsSomething();
  function getEmailValue() {
    console.log("Email id is: ", emailRef.current.id);
  }

  return (
    <div>
      <div>
        <h4>Tutorial 4: React Topics</h4>
        <ul className="list-group">
          <li ref={anotherRef} className="list-group-item">
            <p>Props and HOC Revision</p>
          </li>
          <li className="list-group-item">
            Passing data from child Component to Parent component
          </li>
          <li className="list-group-item">Dealing with Forms</li>
          <li className="list-group-item">Lazy Loading...</li>
        </ul>
      </div>
      <button onClick={getEmailValue}>Change Email</button>
      {/* <Tutorial2 lectureName={lectureName} /> */}
      {/* <Lecture2WithBorder lectureName={lectureName} /> */}
      <h1>Forms </h1>
      <div className="p-5">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              ref={emailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>

            <input
              // ref={}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <p>My Email is: {email}</p>
        </form>
      </div>
    </div>
  );
};

export default Tutorial4;

function ModifyComponent(Comp) {
  return function (props) {
    const isLoading = false;

    if (isLoading) {
      return "Loading...";
    }
    return (
      <div style={{ border: "4px solid red", padding: "10px", margin: "10px" }}>
        <Comp {...props} />
      </div>
    );
  };
}
