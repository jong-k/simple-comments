import { useState } from "react";

interface CounterProps {
  isFancy?: boolean;
}

export default function Counter({ isFancy }: CounterProps) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) className += " hover";
  if (isFancy) className += " fancy";

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h2>{score}</h2>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
