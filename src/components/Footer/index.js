import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  footerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    left: 0,
    bottom: 0,
    position: "absolute",
    height: "30px",
  },
})

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footerContainer}>
      Copywrite &#169; Codelit
    </footer>
  )
}

export default Footer
