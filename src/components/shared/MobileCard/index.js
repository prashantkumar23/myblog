import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    width: "400",
  },
  cover: {
    width: 151,
    height: 151,
    objectFit: "cover",
  },
  button: {
    textTransform: "none",
    width: 101,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 0,
  },
})

const MobileCard = ({ title, imageUrl, createdAt, link }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0} variant="outlined">
      <Grid container direction="row" justify="space-between">
        <Grid item xs={8}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="caption" color="textSecondary" gutterBottom>
              {createdAt}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to={link}
              size="small"
              disableElevation
              disableTouchRipple
              disableFocusRipple
              disableRipple
              className={classes.button}
            >
              Read more
            </Button>
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardMedia className={classes.cover} image={imageUrl} title={title} />
        </Grid>
      </Grid>
    </Card>
  )
}

export default MobileCard
