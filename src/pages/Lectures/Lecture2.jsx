// Lecture2.jsx
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Lecture2 = () => {
  return (
    <div className="p-3">
      {/* Map Example */}
      <h3>Using map()</h3>

      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {`
  <ul>
    {["Apple", "Banana", "Cherry"].map((fruit, i) => (
      <li key={i}>{fruit}</li>
    ))}
  </ul>
        `}
      </SyntaxHighlighter>

      {/* Filter Example */}
      <h3>Using filter()</h3>

      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {`
  <ul>
    {[1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0).map((even, i) => (
      <li key={i}>{even}</li>
    ))}
  </ul>
        `}
      </SyntaxHighlighter>

      {/* Objects + Arrays Example */}
      <h3>Using Objects & Arrays</h3>

      <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {`
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
        `}
      </SyntaxHighlighter>
    </div>
  );
};

export default Lecture2;
