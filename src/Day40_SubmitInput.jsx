// Assignment: Project 4 (React Event Handling - Day 40) - Task 1: Display Input on Submit Button Click
import { useState } from "react";

function SubmitInput() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(inputText);
    setIsSubmitted(true);
  };

  return (
    <div>
      <h3>1. Display Input on Submit</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            setIsSubmitted(false);
          }}
        />
        <button type="submit">
          {isSubmitted ? "Submitted! ✓" : "Submit"}
        </button>
      </form>
      <p>Submitted Output: {displayText}</p>
    </div>
  );
}

export default SubmitInput;
