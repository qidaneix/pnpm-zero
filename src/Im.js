import React, { useEffect, useState } from "react";

export function Im() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <div>{count}</div>;
}
