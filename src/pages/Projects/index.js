import React from 'react'

const Projects = () => {
    const students = [
        { name: "Abhishek Kumar", project: "College Website" },
        { name: "Adarsh", project: "Library Website" },
        { name: "Arti Thorve", project: "Travel Website" },
        { name: "Ashvini", project: "Cafe Website" },
        { name: "Krushna", project: "Restaurant Website" },
        { name: "Kunal C", project: "College Website" },
        { name: "Maithili", project: "Library Website" },
        { name: "Mayuri", project: "Travel Website" },
        { name: "Mohini P", project: "Cafe Website" },
        { name: "Poorva", project: "Restaurant Website" },
        { name: "Pritam H", project: "College Website" },
        { name: "Rutika", project: "Library Website" },
        { name: "Rutuja", project: "Travel Website" },
        { name: "Sakshi", project: "Cafe Website" },
        { name: "Sanjana", project: "Restaurant Website" },
        { name: "Shraddha B", project: "College Website" },
        { name: "Snehal", project: "Library Website" },
        { name: "Vidya", project: "Travel Website" },
        { name: "Vishal", project: "Cafe Website" },
        { name: "Yash", project: "Restaurant Website" },
        { name: "Shreya", project: "College Website" },
        { name: "Nikita", project: "Library Website" },
        { name: "Madhuri", project: "Travel Website" },
        { name: "Kaveri", project: "Cafe Website" },
    ];
    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">Student Project Assignments</h2>
            <table className="table table-bordered table-striped text-center">
                <thead className="table-dark">
                    <tr>
                        <th>Sr. No.</th>
                        <th>Student Name</th>
                        <th>Assigned Project</th>
                        <th>Status</th>
                        <td>Score (0 - 100)</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.project}</td>
                            <td>
                                <span className="badge bg-warning text-dark">InProgress</span>
                            </td>
                            <td>To be scored...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Projects;