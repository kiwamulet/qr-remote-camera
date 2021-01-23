import * as React from "react";
import { Video } from "~/components/Video";
import * as Ayame from "@open-ayame/ayame-web-sdk";

type Props = { signalingKey: string; roomId: string; signalingUrl: string };
type State = { srcObject: MediaStream | null };

class ReceivingVideo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { srcObject: null };
  }

  componentDidMount() {
    this.startConnection(
      this.props.signalingUrl,
      this.props.signalingKey,
      this.props.roomId
    );
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
    return <Video srcObject={this.state.srcObject} autoPlay />;
  }
}

export { ReceivingVideo };
