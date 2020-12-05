import React from "react"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import Card from "../components/shared/Card"
import MobileCard from "../components/shared/MobileCard"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Button from "@material-ui/core/Button"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { theme } from "../theme"

const useStyles = makeStyles(theme => ({
  bodyGridContainer: {
    width: "100%",
    paddingTop: "2em",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "2em",
  },
  button: {
    textTransform: "none",
    "&:hover": {
      background: "transparent",
    },
  },
}))

export const data = graphql`
  query($skip: Int!, $limit: Int!) {
    desktopQuery: allContentfulBlogPost(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          slug
          createdAt(fromNow: true)
          image {
            fluid(
              maxWidth: 350
              quality: 100
              toFormat: WEBP
              resizingBehavior: FILL
            ) {
              src
            }
          }
        }
      }
    }

    mobileQuery: allContentfulBlogPost {
      edges {
        node {
          title
          slug
          createdAt(fromNow: true)
          image {
            fluid(
              maxWidth: 151
              maxHeight: 151
              quality: 100
              toFormat: WEBP
              resizingBehavior: FILL
            ) {
              src
            }
          }
        }
      }
    }
  }
`

const Body = ({ data, pageContext }) => {
  const classes = useStyles()
  const { desktopQuery, mobileQuery } = data

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div className={classes.bodyGridContainer}>
          <Hidden only={["xs"]}>
            <Grid container justify="flex-start" spacing={2}>
              {desktopQuery.edges.map(edge => {
                return (
                  <Grid item key={edge.node.slug} xs={12} md={4} sm={6} lg={4}>
                    <Card
                      title={edge.node.title}
                      imageUrl={edge.node.image.fluid.src}
                      publishedDate={edge.node.createdAt}
                      link={`/blog/${edge.node.slug}`}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </Hidden>
          <Hidden only={["sm", "md", "lg", "xl"]}>
            <Grid container justify="center" spacing={2}>
              {mobileQuery.edges.map(edge => {
                return (
                  <Grid item key={edge.node.slug} xs={12}>
                    <MobileCard
                      title={edge.node.title}
                      imageUrl={edge.node.image.fluid.src}
                      createdAt={edge.node.createdAt}
                      link={`/blog/${edge.node.slug}`}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </Hidden>
          <div className={classes.buttonContainer}>
            <Button
              component={Link}
              to={pageContext.previousPagePath}
              className={classes.button}
              size="medium"
              disableElevation
              disableTouchRipple
            >
              Previous
            </Button>
            <Button
              component={Link}
              to={pageContext.nextPagePath}
              className={classes.button}
              size="medium"
              disableElevation
              disableTouchRipple
            >
              Next
            </Button>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default Body
