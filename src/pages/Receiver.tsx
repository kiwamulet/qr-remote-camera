import * as React from "react";
import { QrLink } from "~/components/QrLink";
import { constructAppUrl } from "~/common/constructAppUrl";
import { ReceivingVideo } from "~/components/ReceivingVideo";

const signalingUrl = "wss://ayame-labo.shiguredo.jp/signaling";

type Props = {
  baseSenderUrl: string;
  roomId: string;
  signalingKey: string;
};

const Receiver = (props: Props) => {
  const senderUrl = constructAppUrl(
    props.baseSenderUrl,
    props.roomId,
    props.signalingKey
  );
  return (
    <div>
      <QrLink sender_url={senderUrl.href} />
      <br />
      <ReceivingVideo
        signalingKey={props.signalingKey}
        roomId={props.roomId}
        signalingUrl={signalingUrl}
      />
    </div>
  );
};

export { Receiver };
