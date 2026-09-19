import { useState } from "react";

function ClickDoubleClick() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [buttonLabel, setButtonLabel] = useState("Click or Double Click Me");

  const handleClick = () => {
    setDisplayText(inputText);
    setButtonLabel("Single Clicked! (Click again or Double click)");
  };

  const handleDoubleClick = () => {
    setDisplayText(inputText);
    setButtonLabel("Double Clicked! ⚡");
  };

  return (
    <div>
      <h3>2. Display Input on Click / Double Click</h3>
      <input
        type="text"
        placeholder="Enter text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        {buttonLabel}
      </button>
      <p>Output: {displayText}</p>
    </div>
  );
}

export default ClickDoubleClick;
