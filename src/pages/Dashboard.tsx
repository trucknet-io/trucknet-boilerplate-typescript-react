import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import * as React from "react";
import HelloWorld from "src/components/examples/HelloWorld";

const styles = {};

interface IProps extends WithStyles<typeof styles> {}

class DashboardPage extends React.PureComponent<IProps> {
  public render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <HelloWorld message="Hello, Dashboard!" color="#000" />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(DashboardPage);
