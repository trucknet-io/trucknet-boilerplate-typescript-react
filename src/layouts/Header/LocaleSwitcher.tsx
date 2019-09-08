import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Language from "@material-ui/icons/Language";
import React from "react";
import { withLocale, WithLocaleStateful } from "react-targem";

import { Locale, LOCALES } from "src/config/locales";

type State = {
  anchorEl?: HTMLElement;
};

class LocaleSwitcher extends React.Component<WithLocaleStateful, State> {
  public state: State = {};
  public render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const ariaOwns = open ? "menu-appbar" : undefined;

    return (
      <div>
        <IconButton
          aria-owns={ariaOwns}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit">
          <Language />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={this.handleClose}>
          {LOCALES.map(this.renderLocaleMenuItem)}
        </Menu>
      </div>
    );
  }

  private renderLocaleMenuItem = (l: Locale) => {
    const { changeLocale, locale } = this.props;
    const handleClick = () => {
      changeLocale(l.code);
      this.handleClose();
    };
    const selected = locale === l.code;

    return (
      <MenuItem key={l.code} selected={selected} onClick={handleClick}>
        {l.localTitle} ({l.englishTitle})
      </MenuItem>
    );
  };

  private handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  private handleClose = () => {
    this.setState({ anchorEl: undefined });
  };
}

export default withLocale(LocaleSwitcher);
