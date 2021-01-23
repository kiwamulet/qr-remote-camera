import * as React from "react";
import * as ReactDOM from "react-dom";
import { Receiver } from "~/pages/Receiver";

const ROOM_ID = process.env.ROOM_ID;
const SIGNALING_KEY = process.env.SIGNALING_KEY;
const BASE_SENDER_URL = process.env.BASE_SENDER_URL;

let jsx: JSX.Element;
if (ROOM_ID && SIGNALING_KEY && BASE_SENDER_URL) {
  jsx = (
    <Receiver
      roomId={ROOM_ID}
      signalingKey={SIGNALING_KEY}
      baseSenderUrl={BASE_SENDER_URL}
    />
  );
} else {
  jsx = <div>not configured yet</div>;
}

ReactDOM.render(jsx, document.getElementById("root"));
