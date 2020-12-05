import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#393232",
    },
    secondary: {
      main: "#8d6262",
    },
    background: {
      default: "#393232",
      paper: "rgb(220, 221, 215)",
    },
    text: {
      primary: "rgb(42, 46, 47)",
      secondary: "rgb(42, 46, 47)",
    },
  },
  typography: {
    h1: {
      fontFamily: "Libre Baskerville",
      fontWeight: "700",
    },
    h2: {
      fontFamily: "Libre Baskerville",
    },
    button: {
      fontFamily: "Source Sans Pro",
    },
    h5: {
      fontFamily: "Libre Baskerville",
      fontWeight: "600",
    },
    caption: {
      fontFamily: "Libre Baskerville",
      fontWeight: "100",
      opacity: 0.8,
    },
  },
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: "rgb(220, 221, 215)",
      },
    },
    MuiCard: {
      root: {
        background: "rgb(185, 152, 133)",
      },
    },
    MuiButton: {
      root: {
        color: "rgb(42, 46, 47)",
      },
    },
  },
})

//****************h1**************** */
theme.typography.h1 = {
  [theme.breakpoints.only("xs")]: {
    fontSize: "7rem",
  },
}

theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "7rem",
  },
}

//****************h2**************** */
theme.typography.h2 = {
  [theme.breakpoints.only("xs")]: {
    fontSize: "3rem",
  },
}

theme.typography.h2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "3rem",
  },
}

//****************h5**************** */

theme.typography.h5 = {
  [theme.breakpoints.only("xs")]: {
    fontSize: "1rem",
  },
}

theme.typography.h5 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.2rem",
  },
}
//****************caption**************** */

theme.typography.caption = {
  [theme.breakpoints.only("xs")]: {
    fontSize: ".8rem",
  },
}

theme.typography.caption = {
  [theme.breakpoints.up("xs")]: {
    fontSize: ".7rem",
  },
}
