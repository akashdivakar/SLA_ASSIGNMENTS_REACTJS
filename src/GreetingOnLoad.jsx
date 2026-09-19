import { useState, useEffect } from "react";

function GreetingOnLoad() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    // Runs only one time when component loads
    setGreeting("Hello! Welcome to React Learning.");
  }, []); // Empty dependency array means runs once on mount

  return (
    <div>
      <h3>1. Greeting Message on Load</h3>
      <p>{greeting}</p>
    </div>
  );
}

export default GreetingOnLoad;
