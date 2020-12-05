import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Header from "../Header"
import Footer from "../Footer"
import "../../styles/style.css"

const useStyles = makeStyles(theme => ({
  layoutContainer: {
    margin: "0 auto",
    maxWidth: "1050px",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  layoutSecondContainer: {
    flexGrow: "1",
  },
}))

const Layout = props => {
  const classes = useStyles()

  return (
    <div className={classes.layoutContainer}>
      <div className={classes.layoutSecondContainer}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
