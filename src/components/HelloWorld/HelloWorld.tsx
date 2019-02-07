import * as React from "react";

type Props = {
  message: string;
  color: string;
};

class HelloWorld extends React.PureComponent<Props> {
  public state = {
    counter: 1,
  };

  public render() {
    const { color, message } = this.props;
    const { counter } = this.state;

    return (
      <div>
        <h1 style={{ color: color }}>{message}!</h1>
        <button data-testid="counter-button" onClick={this.updateCounter}>
          {counter}
        </button>
      </div>
    );
  }
  private updateCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
}

export default HelloWorld;
