function ProfileCard({ name, age, role, children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
      {children}
    </div>
  );
}

export default ProfileCard;
