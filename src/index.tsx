import * as React from "react";
import * as ReactDOM from "react-dom";
import { QrLink } from "~/components/QrLink.tsx";
import { constructAppUrl } from "~/common/constructAppUrl.ts";

const ROOM_ID = process.env.ROOM_ID;
const SIGNALING_KEY = process.env.SIGNALING_KEY;
const BASE_SENDER_URL = process.env.BASE_SENDER_URL;

let jsx: JSX.Element;
if (ROOM_ID && SIGNALING_KEY && BASE_SENDER_URL) {
  const senderUrl = constructAppUrl(BASE_SENDER_URL, ROOM_ID, SIGNALING_KEY);
  jsx = <QrLink sender_url={senderUrl.href} />;
} else {
  jsx = <div>not configured yet</div>;
}

ReactDOM.render(jsx, document.getElementById("root"));
