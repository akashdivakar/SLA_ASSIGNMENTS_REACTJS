// Assignment: Project 4 (React Event Handling - Day 40) - Task 4: Handle Multiple Events
import { useState } from "react";

function MultipleEvents() {
  const [eventLog, setEventLog] = useState("No event yet");
  const [buttonState, setButtonState] = useState("Hover / Click Me");

  return (
    <div>
      <h3>4. Handle Multiple Events</h3>
      <input
        type="text"
        placeholder="Type, focus, or click here..."
        onFocus={() => setEventLog("Focus Event (onFocus)")}
        onBlur={() => setEventLog("Blur Event (onBlur)")}
        onChange={(e) => setEventLog(`Change Event: ${e.target.value}`)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEventLog("Enter Key Pressed (onKeyDown)");
          }
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          setEventLog("Click Event (onClick)");
          setButtonState("Clicked! 🎯");
        }}
        onMouseEnter={() => {
          setEventLog("Mouse Entered Button (onMouseEnter)");
          setButtonState("Hovered! 👋");
        }}
        onMouseLeave={() => {
          setEventLog("Mouse Left Button (onMouseLeave)");
          setButtonState("Hover / Click Me");
        }}
      >
        {buttonState}
      </button>
      <p>
        <strong>Last Triggered Event:</strong> {eventLog}
      </p>
    </div>
  );
}

export default MultipleEvents;
