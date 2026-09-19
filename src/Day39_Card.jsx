// Assignment: Project 3 (Prop Children - Day 39) - Task 1: Reusable Card Component
function Card({ title, footer, children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <div>{children}</div>
      <h4>{footer}</h4>
    </div>
  );
}

export default Card;
