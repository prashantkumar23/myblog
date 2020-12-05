const path = require("path")
const pagi = require("gatsby-awesome-pagination")

const { paginate } = pagi

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/template/blog.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  paginate({
    createPage,
    items: res.data.allContentfulBlogPost.edges,
    itemsPerPage: 6,
    pathPrefix: "/",
    component: path.resolve("./src/template/allblog.js"),
  })

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
