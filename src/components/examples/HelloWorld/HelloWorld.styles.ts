import { createStyles } from "@material-ui/core";

export const styles = createStyles({
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
