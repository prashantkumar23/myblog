import React from "react"
import { graphql } from "gatsby"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import Head from "../components/Head"
import { Typography, Paper } from "@material-ui/core"
import { theme } from "../theme"

const useStyles = makeStyles(theme => ({
  heading: {
    fontFamily: "Libre Baskerville",
    fontWeight: "700",
  },
  body: {
    fontFamily: "Source Sans Pro",
    fontWeight: "500",
  },
  postWrapper: {
    paddingTop: "1em",
    padding: "0.5em",
  },
}))

export const data = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const Blog = props => {
  const classes = useStyles()

  // const options = {
  //   renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: () => {
  //       // console.log(node)
  //       // const alt = node.data.target.fields.title["en-US"]
  //       // const url = node.data.target.fields.file["en-US"].url
  //       // return <img alt={alt} url={url} />
  //       props.data.contentfulBlogPost.body.references.map(fileObj => {
  //         return <img alt={"hey"} src={fileObj.file.url} />
  //       })
  //     },
  //   },
  // }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head title={props.data.contentfulBlogPost.title} />
        <Paper className={classes.postWrapper} elevation={0}>
          <Typography variant="h2" className={classes.heading}>
            {props.data.contentfulBlogPost.title}{" "}
          </Typography>
          <Typography variant="caption">
            {props.data.contentfulBlogPost.publishedDate}
          </Typography>

          <div className={classes.body}>
            {documentToReactComponents(
              JSON.parse(props.data.contentfulBlogPost.body.raw)
            )}
          </div>
        </Paper>
      </Layout>
    </ThemeProvider>
  )
}

export default Blog
