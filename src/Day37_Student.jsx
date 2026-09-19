// Assignment: Project 1 (Basic Components) - Task 1: Student Details
function Student() {
  const student = {
    name: "Akash",
    age: 22,
    course: "React JS",
    city: "Chennai"
  };

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
    </div>
  );
}

export default Student;