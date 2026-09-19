import { useState } from "react";

function LostFocusInput() {
  const [displayText, setDisplayText] = useState("");

  const handleBlur = (e) => {
    setDisplayText(e.target.value);
  };

  return (
    <div>
      <h3>5. Display Input on Lost Focus (onBlur)</h3>
      <input
        type="text"
        placeholder="Type here and click outside..."
        onBlur={handleBlur}
      />
      <p>Output (when focus is lost): {displayText}</p>
    </div>
  );
}

export default LostFocusInput;
