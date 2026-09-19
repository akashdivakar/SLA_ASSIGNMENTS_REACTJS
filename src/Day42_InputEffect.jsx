// Assignment: Project 6 (React useEffect Hook - Day 42) - Task 5: useEffect on Input Change
import { useState, useEffect } from "react";

function InputEffect() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Runs every time user changes the input
    if (inputText.trim() !== "") {
      setMessage(`useEffect executed! You typed: "${inputText}"`);
    } else {
      setMessage("useEffect executed! Input is currently empty.");
    }
  }, [inputText]); // Dependency array with inputText

  return (
    <div>
      <h3>5. useEffect on Input Change</h3>
      <input
        type="text"
        placeholder="Type here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>{message}</p>
    </div>
  );
}

export default InputEffect;
