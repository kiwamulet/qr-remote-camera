import * as React from "react";
import * as Ayame from "@open-ayame/ayame-web-sdk";
import { QrLink } from "~/components/QrLink";
import { Video } from "~/components/Video";
import { SIGNALING_URL } from "~/common/constants";
import { constructAppUrl } from "~/common/appUrlUtils";

function getUniqueStr() {
  return (
    new Date().getTime().toString(16) +
    Math.floor(Math.random() * 1000).toString(16)
  );
}

type Props = {
  baseSenderUrl: string;
  baseRoomId: string;
  signalingKey?: string;
};

type State = { srcObject: MediaStream | null; roomId: string; senderUrl: URL };

class Receiver extends React.Component<Props, State> {
  setupRoom() {
    const { baseSenderUrl, baseRoomId, signalingKey } = this.props;
    const roomId = `${baseRoomId}@${getUniqueStr()}`;
    const senderUrl = constructAppUrl(baseSenderUrl, roomId, signalingKey);
    return { roomId, senderUrl };
  }

  constructor(props: Props) {
    super(props);
    this.state = { srcObject: null, ...this.setupRoom() };
  }

  componentDidMount() {
    const { signalingKey } = this.props;
    if (signalingKey) {
      this.startConnection(SIGNALING_URL, signalingKey, this.state.roomId);
    }
  }

  componentWillUnmount() {}

  async startConnection(
    signalingUrl: string,
    signalingKey: string,
    roomId: string
  ) {
    const options = Ayame.defaultOptions;
    options.signalingKey = signalingKey;
    options.video.direction = "recvonly";
    options.audio.direction = "recvonly";
    options.audio.enabled = false;
    const connection = Ayame.connection(signalingUrl, roomId, options, true);
    await connection.connect(null);
    connection.on("disconnect", (e: object) => {
      console.log("conn.disconnect", e);
      this.setState({
        srcObject: null,
        ...this.setupRoom(),
      });
      // prepare for new connection from new sender
      this.startConnection(SIGNALING_URL, signalingKey, this.state.roomId);
    });
    connection.on("addstream", (e: any) => {
      // todo: e seems to be RTCTrackEvent, but RTCTrackEvent does not have "stream" property
      console.log("conn.addstream", e);
      this.setState({
        srcObject: e.stream,
      });
    });
  }

  render() {
    if (!this.state.srcObject) {
      return <QrLink sender_url={this.state.senderUrl.href} />;
    } else {
      return <Video srcObject={this.state.srcObject} autoPlay />;
    }
  }
}

export { Receiver };
