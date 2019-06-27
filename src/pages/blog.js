import React from "react"
import BlogCard from "../components/blogCard"
import Layout from "../components/layout"
import styled from "styled-components"
import { Box } from "rebass"
import { graphql } from "gatsby"

function getBlogs(data, readTime) {
  let blogs = []
  let blogList = data.allMarkdownRemark.edges

  blogList.forEach(element => {
    blogs.push(
      <BlogCard
        data={element.node.frontmatter}
        readTime={element.node.fields.readingTime.text}
      />
    )
  })

  return blogs
}

const OutContainer = styled(Box)({
  fontFamily: "Arvo, serif",
  display: "flex",
  flexDirection: "row",
  maxWidth: "1280px",
  paddingTop: "60px",
  margin: "0 auto",
  height: "auto",
  flexWrap: "wrap",
  flexFlow: "column",
  justifyContent: "space-around",
})

const Container = styled(Box)({
  width: "100%",
  fontFamily: "Arvo, serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "10px",
})

const Heading = styled(Box)({
  fontFamily: "Arvo",
  fontWeight: "800",
  fontSize: "50px",
  marginBottom: "20px",
  textAlign: "center",
  filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})

const BlogsPage = ({ data, readTime }) => (
  <Layout>
    <OutContainer>
      <Box width={[1]}>
        <Heading>Blog</Heading>
      </Box>
      <Container>{getBlogs(data, readTime)}</Container>
    </OutContainer>
  </Layout>
)

export default BlogsPage

export const blogsQuery = graphql`
  query blogsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/.*md$/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  srcSet
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            date(formatString: "DD-MMM-YYYY")
          }

          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
