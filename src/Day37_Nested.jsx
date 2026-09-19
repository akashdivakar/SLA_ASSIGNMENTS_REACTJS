// Assignment: Project 1 (Basic Components) - Task 3: Nested Components
function Child() {
  return (
    <div>
      <h3>This is a Child Component</h3>
      <p>I am nested inside the parent component.</p>
    </div>
  );
}

function Nested() {
  return (
    <div>
      <h2>Nested Component</h2>
      <Child />
    </div>
  );
}

export default Nested;
