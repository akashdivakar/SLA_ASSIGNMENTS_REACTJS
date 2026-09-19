// Assignment: Project 4 (React Event Handling - Day 40) - Task 3: Passing a Value to an Event
import { useState } from "react";

function PassValueEvent() {
  const [selected, setSelected] = useState("");

  const handleSelect = (category) => {
    setSelected(category);
  };

  return (
    <div>
      <h3>3. Passing a Value to an Event</h3>
      <button onClick={() => handleSelect("Electronics")}>
        {selected === "Electronics" ? "Electronics (Selected ✓)" : "Electronics"}
      </button>{" "}
      <button onClick={() => handleSelect("Clothing")}>
        {selected === "Clothing" ? "Clothing (Selected ✓)" : "Clothing"}
      </button>{" "}
      <button onClick={() => handleSelect("Books")}>
        {selected === "Books" ? "Books (Selected ✓)" : "Books"}
      </button>
      {selected && <p>You selected: <strong>{selected}</strong></p>}
    </div>
  );
}

export default PassValueEvent;
