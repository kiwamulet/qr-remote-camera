import * as React from "react";
import { QrLink } from "~/components/QrLink";
import { constructAppUrl } from "~/common/constructAppUrl";
import { ReceivingVideo } from "~/components/ReceivingVideo";

const signalingUrl = "wss://ayame-labo.shiguredo.jp/signaling";

function getUniqueStr() {
  return (
    new Date().getTime().toString(16) +
    Math.floor(Math.random() * 1000).toString(16)
  );
}

type Props = {
  baseSenderUrl: string;
  baseRoomId: string;
  signalingKey: string;
};

const Receiver = (props: Props) => {
  const roomId = `${props.baseRoomId}@${getUniqueStr()}`;
  const senderUrl = constructAppUrl(
    props.baseSenderUrl,
    roomId,
    props.signalingKey
  );
  return (
    <div>
      <QrLink sender_url={senderUrl.href} />
      <br />
      <ReceivingVideo
        signalingKey={props.signalingKey}
        roomId={roomId}
        signalingUrl={signalingUrl}
      />
    </div>
  );
};

export { Receiver };
