import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "gatsby-plugin-transition-link"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardContent: {
    padding: "1em",
  },
  cardAction: {
    padding: "1em",
  },
  cardActionButton: {
    textTransform: "none",
  },
})

const Blogcard = ({ title, imageUrl, publishedDate, link }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={0} variant="outlined">
      <CardActionArea>
        <CardMedia component="img" alt={title} height="140" image={imageUrl} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography gutterBottom variant="caption">
            {publishedDate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button
          component={Link}
          to={link}
          variant="contained"
          color="secondary"
          size="small"
          disableElevation
          disableTouchRipple
          disableFocusRipple
          disableRipple
          className={classes.cardActionButton}
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  )
}

export default Blogcard
