import Grid from "@material-ui/core/Grid";
import * as React from "react";
import SvgRender from "src/components/examples/SvgRender";

class SvgRenderPage extends React.PureComponent {
  public render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <SvgRender />
        </Grid>
      </Grid>
    );
  }
}

export default SvgRenderPage;
