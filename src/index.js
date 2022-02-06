import React from "react";
import reactDom from "react-dom";
import { App } from "pnpm-zero-yarn-pkg";

reactDom.render(
  <>
    <h1>Hello World</h1>
    <App arr={[1, 2, 3, 4, 5]} />
  </>,
  document.getElementById("app")
);
