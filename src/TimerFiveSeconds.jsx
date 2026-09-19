import { useState, useEffect } from "react";

function TimerFiveSeconds() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    // Increases timer by 5 every 5000 milliseconds (5 seconds)
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 5);
    }, 5000);

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>3. Timer (Increases Every 5 Seconds)</h3>
      <p>Timer: {timer} seconds</p>
    </div>
  );
}

export default TimerFiveSeconds;
