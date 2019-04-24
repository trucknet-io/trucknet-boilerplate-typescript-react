import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import Header from "src/layouts/Header";
// tslint:disable-next-line import-name
import Pages from "src/pages";

const styles = (theme: Theme) => ({
  layout: {
    paddingTop: 30,
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(theme.spacing.unit * 3 * 2 + 900)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

interface IProps extends WithStyles<typeof styles> {}

class Body extends React.Component<IProps> {
  public render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Header />
        <main className={classes.layout}>
          <Pages />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Body);
