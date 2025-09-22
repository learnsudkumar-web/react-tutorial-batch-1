import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Lecture4 = () => {
  const codeExample = `

// 1. Higher Order Component (HOC)
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
const Lecture2WithBorder = ModifyComponent(Tutorial2);

// 2. useRef and DOM Access
const emailRef = useRef();
const anotherRef = useRef();

console.log(emailRef.current); 
console.log("using js: ", document.getElementById("exampleInputPassword1"));

function getEmailValue() {
  console.log("Email id is: ", emailRef.current.id);
}

// 3. useState for Form Handling
const [email, setEmail] = useState("abc@gmail.com");

<input
  ref={emailRef}
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="form-control"
  id="exampleInputEmail1"
/>
<p>My Email is: {email}</p>

// 4. Destructuring Function Return
function returnsSomething() {
  let x, y;
  x = 5;
  y = 10;
  return [x, y];
}
const [a, b] = returnsSomething();

// 5. Form Example
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      ref={emailRef}
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="form-control"
      id="exampleInputEmail1"
    />
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

// 6. Props Passing Example
let lectureName = "Trial Lecture";
<Tutorial2 lectureName={lectureName} />
<Lecture2WithBorder lectureName={lectureName} />
`;

  return (
    <div>
      <h3>Summary: Tutorial 4 Topics</h3>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
};

export default Lecture4;
