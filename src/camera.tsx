import * as React from "react";
import * as ReactDOM from "react-dom";
import "./global.css";
import { Sender } from "~/pages/Sender";
import { parseAppUrl } from "~/common/appUrlUtils";
import { Layout } from "./components/Layout";

const { roomId, signalingKey } = parseAppUrl(new URL(window.location.href));

let jsx: JSX.Element;
if (roomId) {
  jsx = (
    <Layout>
      <Sender roomId={roomId} signalingKey={signalingKey || undefined} />
    </Layout>
  );
} else {
  jsx = <div>not configured yet</div>;
}

ReactDOM.render(jsx, document.getElementById("root"));
