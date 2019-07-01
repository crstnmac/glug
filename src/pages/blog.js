import React from "react"
import BlogCard from "../components/blogCard"
import Layout from "../components/layout"
import styled from "styled-components"
import { Box } from "rebass"
import { graphql } from "gatsby"
import SEO from "../components/seo"

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
  fontFamily: "Varela Round, sans-serif",
  display: "flex",
  flexDirection: "row",
  maxWidth: "1280px",
  paddingTop: "60px",
  margin: "0 auto",
  height: "auto",
  flexWrap: "wrap",
  flexFlow: "column",
  justifyContent: "space-around",
  border: "6px dashed #7a49ff",
  borderRadius: "10px",
  padding: "10px",
})

const Container = styled(Box)({
  width: "100%",
  fontFamily: "Varela Round, sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "10px",
})

const Heading = styled(Box)({
  fontFamily: "Montserrat",
  fontWeight: "800",
  fontSize: "50px",
  marginBottom: "20px",
  textAlign: "center",
  filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})

const BlogsPage = ({ data, readTime }) => (
  <Layout>
    <SEO title="Blog" />
    <Box
      height="100%"
      width={["100%", "80%", "80%"]}
      marginLeft="auto"
      marginRight="auto"
      paddingTop="60px"
      color="#2d3748"
    >
      <Heading>Blog</Heading>

      <OutContainer>
        <Container>{getBlogs(data, readTime)}</Container>
      </OutContainer>
    </Box>
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
