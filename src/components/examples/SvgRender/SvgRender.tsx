import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { T } from "lioness";
import React from "react";

// tslint:disable-next-line import-name
import ReactSVG from "react-svg";
import rickSvg from "./rick.svg";
import { styles } from "./SvgRender.styles";

const colors = {
  black: "#000",
  "Lime Green": "#2CCE62",
  Tarawera: "#29464D",
  Nero: "#212121",
  "Dodger Blue": "#2979FF",
  "Lightning Yellow": "#F9A825",
  "Torch Red": "#FF1744",
};

type Color = keyof typeof colors;

interface Props extends WithStyles<typeof styles> {
  color?: Color;
}
interface State {
  color: Color;
}

export class SvgRender extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      color: this.props.color || "black",
    };
  }

  public render() {
    const { classes } = this.props;
    const { color } = this.state;
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={this.changeColor}>
          <ReactSVG
            svgClassName={classes.svg}
            svgStyle={{ fill: this.getColorValue(color) }}
            src={rickSvg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <T
                context="svg.title"
                message="This is Rick from SVG universe!"
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            data-testid="color-button"
            onClick={this.changeColor}
            color="primary">
            <T context="svg.changeColor" message="Change color!" />
          </Button>
        </CardActions>
      </Card>
    );
  }

  private getColorValue = (color: Color): string => colors[color];

  private getRandomInt = (max: number) => {
    // tslint:disable next-line insecure-random
    return Math.floor(Math.random() * Math.floor(max));
  };

  private getRandomColor = (): Color => {
    const colorNames = Object.keys(colors);
    return colorNames[this.getRandomInt(colorNames.length)] as Color;
  };

  private changeColor = () => {
    this.setState({
      color: this.getRandomColor(),
    });
  };
}

export default withStyles(styles)(SvgRender);
