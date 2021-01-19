import * as React from "react";
import * as ReactDOM from "react-dom";
import { QrLink } from "~/components/QrLink.tsx";

const sender_url = process.env.SENDER_URL;

ReactDOM.render(
  <QrLink sender_url={sender_url} />,
  document.getElementById("root")
);
