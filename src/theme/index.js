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
    },
    text: {
      primary: "#ed8d8d",
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
    },
  },
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: "#393232",
      },
    },
    MuiCard: {
      root: {},
    },
  },
})
