import React from "react";

const Tutorial2 = () => {
  const people = [
    { name: "Rob", age: 30 },
    { name: "Alice", age: 24 },
    { name: "Bob", age: 30 },
  ];
  const fruits = ["Apple", "Banana", "Pineapple", "Papaya"];

  return (
    <div className="tutorial-2">
      <h1>React Tutorial - 2</h1>
      <div>
        {people.map((user, ind) => (
          <p key={user.name + ind + user.age}>
            {user.name} — {user.age} years old
          </p>
        ))}
      </div>
      <hr></hr>
      <div>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
      <hr></hr>
      <p>Fruits Names: {fruits.join()}</p>
    </div>
  );
};

export default Tutorial2;
