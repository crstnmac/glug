import React from "react"
import Card from "../components/card"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Box, Text } from "rebass"

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

const BlogCard = styled(Card)({
  height: "100px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#F0F0F0",
})

const Container = styled(Box)({
  width: "100%",
  fontFamily: "Arvo, serif",
  display: "flex",
  display: "-webkit-box",
  display: "-moz-box",
  display: "-ms-flexbox",
  display: "-webkit-flex",
  flexWrap: "wrap",
})

const Heading = styled(Box)({
  fontFamily: "Arvo",
  fontWeight: "800",
  fontSize: "50px",
  marginBottom: "20px",
  textAlign: "center",
  filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})

const BlogDetails = styled(Box)({
  fontFamily: "Arvo",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
})

const Link = styled.a`
  color: "inherited";
  text-decoration: none;
  text-align: center;

  -webkit-background-clip: "text";
`

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <OutContainer>
        <Box width={[1]}>
          <Heading>Blog</Heading>
        </Box>
        <Container>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <Link
                  href={post.frontmatter.path}
                  key={post.id}
                  textDecoration="none"
                >
                  <Box>
                    <BlogCard>
                      <BlogDetails p={2}>
                        <Text
                          fontSize={[2]}
                          my={2}
                          fontWeight="bolder"
                          color="black"
                        >
                          {post.frontmatter.title}
                        </Text>
                        <Text fontSize={[2]} color="black">
                          {post.frontmatter.date}
                        </Text>
                        <p>{post.excerpt}</p>
                      </BlogDetails>
                    </BlogCard>
                  </Box>
                </Link>
              )
            })}
        </Container>
      </OutContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
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
            title
            date(formatString: "DD-MMM-YYYY")
          }
        }
      }
    }
  }
`
