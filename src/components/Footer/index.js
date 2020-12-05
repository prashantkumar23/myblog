import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  footerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
})

const Footer = () => {
  const classes = useStyles()

  return <div className={classes.footerContainer}>Footer</div>
}

export default Footer
