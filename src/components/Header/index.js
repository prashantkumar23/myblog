import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    // flexGrow: 1,
    textDecoration: "none",
    color: "white",
    "&:active": {
      color: "white",
    },
  },
  titleContainer: {
    textAlign: "center",
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid item xs={12} className={classes.titleContainer}>
              <Typography
                variant="h1"
                className={classes.title}
                component={Link}
                to="/"
              >
                Codelit
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
