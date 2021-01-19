import * as React from "react";
import * as ReactDOM from "react-dom";
import { QRious } from "react-qrious";

const sender_url = process.env.SENDER_URL;

ReactDOM.render(
  <div>
    <h1>Sender URL:</h1>
    <div>{sender_url}</div>
    <QRious value={sender_url} />
  </div>,
  document.getElementById("root")
);
