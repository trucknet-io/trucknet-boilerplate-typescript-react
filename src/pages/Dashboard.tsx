import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import Clock from "src/components/examples/Clock";
import HelloWorld from "src/components/examples/HelloWorld";

const styles = {};

interface IProps extends WithStyles<typeof styles> {}

class Dashboard extends React.PureComponent<IProps> {
  public render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <HelloWorld message="Hello, Dashboard!" color="#000" />
          <Clock />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Dashboard);
