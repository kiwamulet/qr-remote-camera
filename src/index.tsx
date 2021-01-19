import * as React from "react";
import * as ReactDOM from "react-dom";

const sender_url = process.env.SENDER_URL;

ReactDOM.render(
  <div>
    <h1>Sender URL:</h1>
    <div>{sender_url}</div>
  </div>,
  document.getElementById("root")
);
