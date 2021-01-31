import * as React from "react";
import * as ReactDOM from "react-dom";
import { Sender } from "~/pages/Sender";
import { parseAppUrl } from "~/common/appUrlUtils";

const { roomId, signalingKey, baseSenderUrl } = parseAppUrl(
  new URL(window.location.href)
);

let jsx: JSX.Element;
if (roomId) {
  jsx = <Sender roomId={roomId} signalingKey={signalingKey || undefined} />;
} else {
  jsx = <div>not configured yet</div>;
}

ReactDOM.render(jsx, document.getElementById("root"));
