import * as React from "react";
import * as ReactDOM from "react-dom";
import { QrLink } from "~/components/QrLink.tsx";
import { constructAppUrl } from "~/common/constructAppUrl.ts";

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
  return <QrLink sender_url={senderUrl.href} />;
};

export { Receiver };
