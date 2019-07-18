import { createStyles, Theme } from "@material-ui/core/styles";

// Need to use styles as a function
// Unless jss-rtl does not work
// https://github.com/mui-org/material-ui/issues/10823

export const styles = (theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: "cover",
    },
    title: {
      marginLeft: 20, // demo of jss-rtl
    },
  });
