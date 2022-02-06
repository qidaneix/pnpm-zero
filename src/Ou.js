import React, { useRef } from "react";
import { Im } from "./Im";

export function Ou() {
  const changed = useRef(0);

  changed.current = changed.current + 1;
  return (
    <>
      <div>{changed.current}</div>
      <Im />
    </>
  );
}
