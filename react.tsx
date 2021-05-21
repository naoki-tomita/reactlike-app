import React from "react";
import { renderToString } from "react-dom/server"

const html = renderToString(
  <div>
    <h1>This is title.</h1>
    <div data-foo="bar">
      hello<br/>world
    </div>
  </div>
);

console.log(html);
