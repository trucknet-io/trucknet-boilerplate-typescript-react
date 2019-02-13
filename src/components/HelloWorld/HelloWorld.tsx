import * as React from "react";
import * as textMd from "src/components/HelloWorld/text.md";

type Props = {
  message: string;
  color: string;
  onChange?(newValue: number): void;
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
        {/* tslint:disable-next-line react-no-dangerous-html */}
        <div dangerouslySetInnerHTML={{ __html: textMd }} />
      </div>
    );
  }
  private updateCounter = () => {
    const newValue = this.state.counter + 1;
    this.setState({
      counter: newValue,
    });
    if (this.props.onChange) {
      this.props.onChange(newValue);
    }
  };
}

export default HelloWorld;
