import { useState, useEffect } from "react";

function DocumentTitleCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Updates browser tab title whenever count changes
    document.title = `Count: ${count}`;
  }, [count]); // Runs whenever count changes

  return (
    <div>
      <h3>2. Update Browser Tab Title on Count Change</h3>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default DocumentTitleCount;
