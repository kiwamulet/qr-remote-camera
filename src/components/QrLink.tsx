import * as React from "react";
import { QRious } from "react-qrious";
import styles from "./QrLink.css";

type Props = { sender_url: string | undefined };

const QrLink: React.FC<Props> = ({ sender_url }) => {
  if (sender_url) {
    return (
      <div className={styles.base}>
        {/* <div className={styles.description}>Sender URL:{sender_url}</div> */}
        <div className={styles.description}>
          映像送信元にしたいデバイスのカメラで読み取ってください
        </div>
        <div className={styles.qrcodeFrame}>
          <QRious className={styles.qrcode} size={512} value={sender_url} />
        </div>
      </div>
    );
  } else {
    return <div>Error: not configured yet</div>;
  }
};

export { QrLink };
