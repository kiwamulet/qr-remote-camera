import * as React from "react";
import { QRious } from "react-qrious";

type Props = { sender_url: string | undefined };

const QrLink: React.FC<Props> = ({ sender_url }) => {
  if (sender_url) {
    return (
      <div>
        <div>Sender URL:</div>
        <div>{sender_url}</div>
        <QRious value={sender_url} />
      </div>
    );
  } else {
    return <div>Error: not configured yet</div>;
  }
};

export { QrLink };
