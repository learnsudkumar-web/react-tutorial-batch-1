import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
const Lecture3 = () => {
  const codeExample = `

const Tutorial = ()=>{
    return(<Tutorial3 gyan={"Any Message"} size={10})
    }
//Props Desctructuring
const Tutorial3 = ({ gyan, size }) => {
  // 1. Ternary operator (short if-else)
  let x = 10;
  x > 5 ? console.log("Greater than 5") : console.log("Not greater");

  // 2. Event handler
  let btnText = "Click Me!";
  function handleClick() {
    console.log("Button clicked!");
    btnText = "Clicked!";
  }

  // 3. Destructuring
  const person = { name: "Abc", age: 12 };
  const { name, age } = person;
  console.log(\`Name: \${name}, Age: \${age}\`);

  // 4. Higher Order Component
  const ModifiedChild = MyHOC(Child);

  return (
    <div>
      <h4>Tutorial 3: React Topics</h4>
      <ul>
        <li style={{ fontSize: size }}>Ternary Condition</li>
        <li>Event Handling</li>
        <li>Props & Destructuring</li>
        <li>Higher Order Components</li>
      </ul>

      {/* Event Handling Example */}
      <button className="btn btn-primary" onClick={handleClick}>
        {btnText}
      </button>

      {/* Higher Order Component Example */}
      <ModifiedChild gyan={gyan} />
    </div>
  );
};

function Child({ gyan }) {
  return <h5>I’m Child! My parent says: {gyan}</h5>;
}

function MyHOC(Component) {
  return (props) => (
    <div style={{ border: "2px solid red", padding: "5px" }}>
      <Component {...props} />
    </div>
  );
}
`;
  return (
    <div>
      <h3>Summary</h3>
      <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers>
        {codeExample}
      </SyntaxHighlighter>
    </div>
  );
};

export default Lecture3;
