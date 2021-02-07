import * as React from "react";
import * as Ayame from "@open-ayame/ayame-web-sdk";
import { QrLink } from "~/components/QrLink";
import { Video } from "~/components/Video";
import { SIGNALING_URL } from "~/common/constants";
import { constructAppUrl } from "~/common/appUrlUtils";

// type Props = {
//   signalingKey?: string;
//   roomId: string;
//   signalingUrl: string;
// };

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

type State = { srcObject: MediaStream | null };

class Receiver extends React.Component<Props, State> {
  readonly roomId: string;
  readonly senderUrl: URL;

  constructor(props: Props) {
    super(props);
    this.state = { srcObject: null };
    const { signalingKey, baseRoomId } = this.props;
    this.roomId = `${baseRoomId}@${getUniqueStr()}`;

    this.senderUrl = constructAppUrl(
      props.baseSenderUrl,
      this.roomId,
      props.signalingKey
    );
  }

  componentDidMount() {
    const { signalingKey, baseRoomId } = this.props;
    if (signalingKey) {
      this.startConnection(SIGNALING_URL, signalingKey, this.roomId);
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
      });
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
    return (
      <div>
        <QrLink sender_url={this.senderUrl.href} />
        <br />
        <Video srcObject={this.state.srcObject} autoPlay />
      </div>
    );
  }
}

export { Receiver };
