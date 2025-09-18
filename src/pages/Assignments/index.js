import React from "react";

export default function Assignments() {
    const assignments = [
        {
            date: "16/09/2025",
            lecture: "Lecture 1: Introduction to React & Project Setup",
            assignmentId: "A1",
            assignmentList: [
                "Summarize the lecture.",
                "What is React and why is it used?",
                "Explain the concept of components.",
                "Difference between functional and class components.",
                "Coding: Create the homepage for your assigned Project."
            ]
        },
        {
            date: "17/09/2025",
            lecture: "Lecture 2: Using .map(), .filter(), Objects & Arrays",
            assignmentId: "A2",
            assignmentList: [
                "Summarize the lecture.",
                "Implement the .map(), .filter(), Objects & Arrays in your projects created to render content dynamically."
            ]
        },
        {
            date: "18/09/2025",
            lecture: "Lecture 3: Ternary Operator, Event Handling, Props, Props Desctructuring, Importance of key in mapped lists/elements, Higher Order Components",
            assignmentId: "A3",
            assignmentList: [
                "Summarize the lecture.",
                "Implement Ternary Operator for conditional rendering",
                "Implement Event handling to log a message on button click",
                "Use props to pass data to child components",
                "Explain why 'key' is important in mapped list & elements",
                "What are Higher Order Components? write an example."
            ]
        },

    ].sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split("/").map(Number);
        const [dayB, monthB, yearB] = b.date.split("/").map(Number);

        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);

        return dateB - dateA;
    });

    return (
        <div className="container my-5">
            <h2 className="mb-4">Assignments</h2>
            {assignments.map((assignment, index) => (
                <div key={assignment.assignmentId} className="card mb-3 shadow-sm">
                    <div className="card-body">
                        <h5 className="card-title">
                            {assignment.lecture}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Date: {assignment.date} | ID: {assignment.assignmentId}
                        </h6>
                        <ul className="list-group list-group-flush mt-3">
                            {assignment.assignmentList.map((q, i) => (
                                <li key={i} className="list-group-item">
                                    {i + 1}. {q}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
