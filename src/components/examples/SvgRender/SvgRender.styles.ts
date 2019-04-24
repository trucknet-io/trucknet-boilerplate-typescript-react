import { createStyles, Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
    },
    svg: {
      marginLeft: "auto",
      marginRight: "auto",
      height: 300,
      width: "80%",
      display: "block",
    },
  });
