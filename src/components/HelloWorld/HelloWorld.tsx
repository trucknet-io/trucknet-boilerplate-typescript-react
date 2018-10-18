import * as React from "react";

type Props = {
  message: string;
  color: string;
};

class HelloWorld extends React.PureComponent<Props> {
  public render() {
    const { color, message } = this.props;

    return <h1 style={{ color: color }}>{message}!</h1>;
  }
}

export default HelloWorld;
