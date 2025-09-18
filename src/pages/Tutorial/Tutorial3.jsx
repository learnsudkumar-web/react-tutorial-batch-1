import React from "react";

const Tutorial3 = ({ gyan, size }) => {
  let x = 10;
  if (x > 5) {
    console.log("Greater than 5");
  } else {
    console.log("Not greater than 5");
  }

  // Ternary Operator / Ternary if..else
  x > 5 ? console.log("Greater than 6") : console.log("Not greater than 6");

  // Example of event handler
  let y = "Click Me!";
  function handleClickMe() {
    console.log("Let's start the Food service!");

    y = "Clicked!";
    console.log("Value of Y: ", y);
    // return "Clicked!";
    // console.log("Won't be executed!");
  }

  // Props -> Properties -> Gun/Visheshta

  // Props is an object
  //   console.log("Gyan: ", gyan);

  const person = {
    name: "Abc",
    age: 12,
  };

  const { name, age } = person;
  console.log("Name: ", name, " Age: ", age);

  //   <html>
  //     <head>

  //     </head>
  //     <body>
  //         <body>
  //             <h1>x</h1>
  //         </body>
  //     </body>
  //   </html>
  const myDocuments = {
    tagName: "html",
    children: [{ tagName: "head" }, { tagName: "body" }],
  };

  const ModifiedChildComponent = MyHigherOrderComponent(ChotaTutorial3);

  return (
    <div>
      <div>
        <h4>Tutorial 3: React Topics</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <p style={{ fontSize: size }}>Ternary Condition (operator)</p>
          </li>
          <li className="list-group-item">Event Handling in React</li>
          <li className="list-group-item">Props</li>
          <li className="list-group-item">Props Descructuring</li>
          <li className="list-group-item">
            Why "key" is important in mapped render?
          </li>
          <li className="list-group-item">Higher Order Components</li>
          <li className="list-group-item">How to use bootstrap css?</li>
        </ul>
      </div>
      <h6>Example of Event Handling</h6>
      <div className="d-flex justify-content-center py-3 align-items-center">
        <div>
          <button className="btn btn-lg btn-primary" onClick={handleClickMe}>
            {y}
          </button>
        </div>
      </div>
      {/* Child componentn */}
      {/* <ChotaTutorial3 gyan={gyan} /> */}
      <ModifiedChildComponent gyan={gyan} />
    </div>
  );
};

export default Tutorial3;

function ChotaTutorial3(props) {
  return <h1>Hi! I'm a Chotu! and my Dadaji said: {props.gyan}</h1>;
}

function MyHigherOrderComponent(ChildComp) {
  return function (props) {
    return (
      <div style={{ border: "5px solid red" }}>
        <ChildComp {...props} />
      </div>
    );
  };
}
