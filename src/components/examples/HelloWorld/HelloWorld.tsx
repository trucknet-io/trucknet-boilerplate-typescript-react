import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { T } from "lioness";
import * as React from "react";

import { styles } from "./HelloWorld.styles";
import rickPng from "./rick.png";
import textMd from "./text.md";

interface Props extends WithStyles<typeof styles> {
  message: string;
  color: string;
  onChange?(newValue: number): void;
}

// TODO jss-rtl does not work

export class HelloWorld extends React.PureComponent<Props> {
  public state = {
    counter: 1,
  };

  public render() {
    const { color, message, classes } = this.props;
    const { counter } = this.state;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} component="img" src={rickPng} />
          <CardContent>
            <Typography className={classes.title} variant="caption">
              <T context="helloWorld" message="Demo of jss-rtl" />
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: color }}>
              {message}!
            </Typography>
            {/* tslint:disable-next-line react-no-dangerous-html */}
            <Typography
              component="p"
              dangerouslySetInnerHTML={{ __html: textMd }}
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            data-testid="counter-button"
            onClick={this.updateCounter}
            color="primary">
            {counter}
          </Button>
        </CardActions>
      </Card>
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
const withHocs = withStyles(styles)(HelloWorld);

export default withHocs;
