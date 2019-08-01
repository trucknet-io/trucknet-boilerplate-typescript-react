import indigo from "@material-ui/core/colors/indigo";
import teal from "@material-ui/core/colors/teal";
import { createMuiTheme } from "@material-ui/core/styles";

export const createTheme = (direction: "ltr" | "rtl") =>
  createMuiTheme({
    direction,
    palette: {
      primary: indigo,
      secondary: teal,
    },
    typography: {},
  });
