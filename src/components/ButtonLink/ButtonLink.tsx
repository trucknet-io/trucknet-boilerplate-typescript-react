import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { LocationDescriptor } from "history";
import * as React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { styles } from "./ButtonLink.styles";

interface Props
  extends WithStyles<typeof styles>,
    Pick<ButtonProps, Exclude<keyof ButtonProps, "classes">> {
  to: LocationDescriptor;
  exact?: boolean;
  strict?: boolean;
}

const createLink = (navLinkProps: NavLinkProps) => ({
  innerRef,
  ...buttonProps
}: ButtonProps) => {
  // Remove `innerRef` from properties as the interface
  // is incompatible. The property `innerRef` should not be
  // needed as the `ListItem` component already provides that
  // feature with a different interface.
  return <NavLink {...navLinkProps} {...buttonProps} />;
};

class ButtonLink extends React.PureComponent<Props> {
  public render() {
    const { classes, to, exact, strict, ...props } = this.props;
    return (
      <Button
        component={createLink({
          to,
          activeClassName: classes.active,
          exact,
          strict,
        })}
        {...props}>
        {this.props.children}
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonLink);
