import { createMuiTheme } from "@material-ui/core";
import { GREEN, RED_PURPLE, BLUE } from "../../Components/themes/colors";
//mport { BLUE, GREEN, RED_PURPLE } from "../../Components/Atoms/mycolors";
const theme = createMuiTheme({
  palette: {
    primary: { main: GREEN },
    secondary: { main: RED_PURPLE },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        margin: ".5em 0",
        padding: ".5em",
        color: "white",
        textTransform: "none",
        fontSize: "14pt",
      },
    },
    MuiPaper: {
      root: {
        borderRadius: 8,
        background: BLUE,
      },
    },
    MuiFormControl: {
      root: {
        borderRadius: 8,
        background: "white",
        width: "100%",
        margin: "1em 0",
        padding: 0,
      },
    },
    MuiInputBase: {
      root: {
        padding: ".5em 1em",
      },
      multiline: {
        padding: "1em",
      },
    },
  },
});

export default theme;
