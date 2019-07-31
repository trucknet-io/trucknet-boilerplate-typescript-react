import AppBar from "@material-ui/core/AppBar";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { T } from "lioness";
import * as React from "react";

import ButtonLink from "src/components/ButtonLink";
import LocaleSwitcher from "./LocaleSwitcher";

const styles = {
  title: {
    margin: "0 15px",
    flexGrow: 1,
  },
};

interface IProps extends WithStyles<typeof styles> {}

class Header extends React.PureComponent<IProps> {
  public render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit">
            <T context="header.title" message="Some name" />
          </Typography>
          <ButtonLink to="/" exact color="inherit">
            Hello
          </ButtonLink>
          <ButtonLink to="/clock" color="inherit">
            Clock
          </ButtonLink>
          <ButtonLink to="/svg" color="inherit">
            SVG
          </ButtonLink>
          <LocaleSwitcher />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
