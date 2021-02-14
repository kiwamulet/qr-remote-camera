import * as React from "react";
import { SIGNALING_URL } from "~/common/constants";
import { Video } from "~/components/Video";
import * as Ayame from "@open-ayame/ayame-web-sdk";
import style from "./Sender.css";

type Props = { roomId: string; signalingKey?: string };
type State = { srcObject: MediaStream | null };

class Sender extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { srcObject: null };
  }

  componentDidMount() {
    const { roomId, signalingKey } = this.props;
    if (signalingKey) {
      this.startConnection(roomId, signalingKey);
    }
  }

  async startConnection(roomId: string, signalingKey: string) {
    const options = Ayame.defaultOptions;
    options.signalingKey = signalingKey;
    options.video.direction = "sendonly";
    options.audio.direction = "sendonly";
    const connection = Ayame.connection(SIGNALING_URL, roomId, options, true);
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: { ideal: "environment" },
      },
    });
    connection.on("disconnect", (e: object) => {
      console.log("conn.disconnect", e);
      this.setState({
        srcObject: null,
      });
    });
    await connection.connect(mediaStream, null);
    this.setState({
      srcObject: mediaStream,
    });
  }

  render() {
    return (
      <Video
        className={style.base}
        srcObject={this.state.srcObject}
        autoPlay
        playsInline
      />
    );
  }
}

export { Sender };
