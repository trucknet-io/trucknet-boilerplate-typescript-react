import Grid from "@material-ui/core/Grid";
import * as React from "react";
import Clock from "src/components/examples/Clock";

class ClockPage extends React.PureComponent {
  public render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <Clock />
        </Grid>
      </Grid>
    );
  }
}

export default ClockPage;
