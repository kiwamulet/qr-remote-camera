import * as React from "react";
import { QrLink } from "~/components/QrLink";
import { constructAppUrl } from "~/common/constructAppUrl";

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
