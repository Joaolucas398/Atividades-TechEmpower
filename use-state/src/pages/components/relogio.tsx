import { useEffect, useState } from "react";

export default function Relogio() {
  const INTERVALO_MS: number = 1000;
  const [state, setState] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setState(new Date());
      }, INTERVALO_MS);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  return (
    <>
      <div>{state.toLocaleTimeString()}</div>
      <button style={{ backgroundColor: "gray" }} onClick={toggleRunning}>
        {isRunning ? "Desligar" : "Ligar"}
      </button>
    </>
  );
}
