const path = require("path")


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

  const eventPostTemplate = path.resolve(`./src/templates/event-post.js`)

  return graphql(`
    {
      blogs:allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/blog/.*md$/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }

      events:allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/events/.*md$/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    // highlight-start
    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    })
    // highlight-end
    result.data.events.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: eventPostTemplate,
        context: {}, // additional data can be passed via context
      })
  })
  })
}
