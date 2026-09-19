function ChildComponent({ title, message, badge }) {
  return (
    <div className="child-card">
      <div className="child-header">
        <h4>🧒 Child Component: {title}</h4>
        {badge && <span className="child-badge">{badge}</span>}
      </div>
      <p>{message}</p>
    </div>
  );
}

function Nested() {
  return (
    <div className="card nested-card">
      <h2>🪆 Nested Component (Parent)</h2>
      <p className="description">
        This is a parent component demonstrating how child components are nested and composed in React.
      </p>

      <div className="nested-children">
        <ChildComponent
          title="Profile Summary"
          message="Child component rendered inside the Nested parent component receiving props."
          badge="Child 1"
        />
        <ChildComponent
          title="Performance Metrics"
          message="Reusable child component instance showcasing modular UI architecture."
          badge="Child 2"
        />
      </div>
    </div>
  );
}

export default Nested;
