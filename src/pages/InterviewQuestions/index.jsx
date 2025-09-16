import React, { useState } from "react";
import "./_interviewQuestions.scss";
export default function InterviewQuestions() {
  const questions = [
    "What is the Virtual DOM?",
    "Explain the difference between state and props.",
    "What are React hooks?",
    "What is useEffect and when to use it?",
    "Explain React’s reconciliation process.",
    "What is Context API?",
    "Difference between functional and class components?",
    "Explain lazy loading in React.",
    "What are React keys and why are they important?",
    "How does React handle forms?",
  ];

  // Track ratings and checkbox states
  const [ratings, setRatings] = useState(Array(questions.length).fill(0));
  const [studied, setStudied] = useState(Array(questions.length).fill(false));

  const handleRating = (qIndex, star) => {
    const newRatings = [...ratings];
    newRatings[qIndex] = star;
    setRatings(newRatings);
  };

  const toggleStudied = (qIndex) => {
    const newStudied = [...studied];
    newStudied[qIndex] = !newStudied[qIndex];
    setStudied(newStudied);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">React Interview Questions</h2>
      <table className="table table-bordered table-striped align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>Sr. No.</th>
            <th>React Interview Questions</th>
            <th>Studied / Revised</th>
            <th>Rate Yourself (out of 5)</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="text-start">{q}</td>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={studied[index]}
                  onChange={() => toggleStudied(index)}
                />
              </td>
              <td>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    role="button"
                    onClick={() => handleRating(index, star)}
                    style={{
                      cursor: "pointer",
                      fontSize: "1.2rem",
                      color: ratings[index] >= star ? "gold" : "#ccc",
                      marginRight: "2px",
                    }}
                  >
                    ★
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
