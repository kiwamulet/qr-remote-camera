import * as React from "react";
import * as ReactDOM from "react-dom";
import "./global.css";
import { Receiver } from "~/pages/Receiver";
import { Layout } from "./components/Layout";

const BASE_ROOM_ID = process.env.BASE_ROOM_ID;
const SIGNALING_KEY = process.env.SIGNALING_KEY;
const BASE_SENDER_URL = process.env.BASE_SENDER_URL;

let jsx: JSX.Element;
if (BASE_ROOM_ID && BASE_SENDER_URL) {
  jsx = (
    <Layout>
      <Receiver
        baseRoomId={BASE_ROOM_ID}
        signalingKey={SIGNALING_KEY}
        baseSenderUrl={BASE_SENDER_URL}
      />
    </Layout>
  );
} else {
  jsx = <div>not configured yet</div>;
}

ReactDOM.render(jsx, document.getElementById("root"));
