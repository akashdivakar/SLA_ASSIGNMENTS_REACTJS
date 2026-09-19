// Assignment: Project 3 (Prop Children - Day 39) - Task 2: Student Result (Conditional Rendering)
import { useState } from "react";

function StudentResult() {
  const [marks, setMarks] = useState(75);

  let result = "";

  if (marks >= 90 && marks <= 100) {
    result = "Excellent";
  } else if (marks >= 60 && marks <= 89) {
    result = "Passed";
  } else if (marks >= 40 && marks <= 59) {
    result = "Needs Improvement";
  } else {
    result = "Failed";
  }

  return (
    <div>
      <h3>Student Result</h3>
      <p>Marks: {marks}</p>
      <p>Status: {result}</p>
      <div style={{ marginTop: "8px" }}>
        <button onClick={() => setMarks(95)}>
          {marks === 95 ? "Set 95 (Active ✓)" : "Set 95 (Excellent)"}
        </button>{" "}
        <button onClick={() => setMarks(75)}>
          {marks === 75 ? "Set 75 (Active ✓)" : "Set 75 (Passed)"}
        </button>{" "}
        <button onClick={() => setMarks(50)}>
          {marks === 50 ? "Set 50 (Active ✓)" : "Set 50 (Improvement)"}
        </button>{" "}
        <button onClick={() => setMarks(30)}>
          {marks === 30 ? "Set 30 (Active ✓)" : "Set 30 (Failed)"}
        </button>
      </div>
    </div>
  );
}

export default StudentResult;
