// Lecture2.jsx
import React from "react";

const Lecture2 = () => {
  return (
    <div className="p-3">
      <h2>Using .map(), .filter(), Objects & Arrays</h2>

      {/* Map Example */}
      <h3>Using map()</h3>
      <pre>
        <code>{`
<ul>
  {["Apple", "Banana", "Cherry"].map((fruit, i) => (
    <li key={i}>{fruit}</li>
  ))}
</ul>
        `}</code>
      </pre>

      {/* Filter Example */}
      <h3>Using filter()</h3>
      <pre>
        <code>{`
<ul>
  {[1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0).map((even, i) => (
    <li key={i}>{even}</li>
  ))}
</ul>
        `}</code>
      </pre>

      {/* Objects + Arrays Example */}
      <h3>Using Objects & Arrays</h3>
      <pre>
        <code>{`
<div>
  {[
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 30 },
  ].map(user => (
    <p key={user.id}>
      {user.name} — {user.age} years old
    </p>
  ))}
</div>
        `}</code>
      </pre>
    </div>
  );
};

export default Lecture2;
