import AppBar from "@material-ui/core/AppBar";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import T from "src/components/T";
import { t } from "ttag";
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
            <T id={t`Some name`} />
          </Typography>
          <LocaleSwitcher />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
