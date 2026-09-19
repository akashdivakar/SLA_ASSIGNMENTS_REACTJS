function Student({ student }) {
  const defaultStudent = {
    id: "STU101",
    name: "Akash",
    age: 22,
    course: "MERN Stack Development",
    email: "akash@example.com",
    city: "Chennai"
  };

  const data = student || defaultStudent;

  return (
    <div className="card student-card">
      <h2>🎓 Student Details</h2>
      <div className="details">
        <p><strong>Student ID:</strong> {data.id}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Course:</strong> {data.course}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>City:</strong> {data.city}</p>
      </div>
    </div>
  );
}

export default Student;