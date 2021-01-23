import React from "react";

type Props = { srcObject: MediaStream | null; [attr: string]: any };

class Video extends React.Component<React.VideoHTMLAttributes<any> & Props> {
  ref = React.createRef<HTMLVideoElement>();

  set srcObject(srcObject: MediaStream) {
    if (this.ref.current) {
      this.ref.current.srcObject = srcObject;
    }
  }

  componentDidMount() {
    if (this.props.srcObject) {
      this.srcObject = this.props.srcObject;
    }
  }

  componentDidUpdate(prevPrpos: Props) {
    if (this.props.srcObject && this.props.srcObject !== prevPrpos.srcObject) {
      this.srcObject = this.props.srcObject;
    }
  }

  render() {
    const { srcObject, ...rest } = this.props;
    return <video {...rest} ref={this.ref} />;
  }
}

export { Video };
