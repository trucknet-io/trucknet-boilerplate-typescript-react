import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import React from "react";

import { withLocale, WithLocale } from "src/contexts/LocaleContext";
import Header from "src/layouts/Header";
import Pages from "src/pages";
import { setInitialScope } from "src/utils/errorReporting";

const styles = (theme: Theme) => ({
  layout: {
    paddingTop: 30,
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(theme.spacing(6) + 900)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

interface IProps extends WithStyles<typeof styles>, WithLocale {}

class Body extends React.Component<IProps> {
  public componentDidMount() {
    // This is just an example usage of Sentry's error reporting
    setInitialScope(null, this.props.locale);
  }

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

export default withLocale(withStyles(styles)(Body));
