import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Box, Text } from "rebass"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

const OutContainer = styled(Box)({
  fontFamily: "Varela Round, sans-serif",
  display: "flex",
  paddingTop: "80px",
  margin: "0 auto",
  height: "auto",
  flexWrap: "wrap",
  flexFlow: "column",
  flexDirection: "column",
  justifyContent: "space-around",
  alignContent: "center",
  color: "#2d3748",
})

const BlogContent = styled(Box)({
  fontFamily: "Varela Round, sans-serif",
  fontSize: "1.2em",
  marginLeft: "0px",
  marginRight: "0px",
})

const Wrapper = styled(Box)({
  display: "flex",
  flexFlow: "column",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "auto",
  marginRight: "auto",
})

const Dotted = styled(Box)({
  border: "6px dashed #7a49ff",
  borderRadius: "10px",
  padding: "20px",
})

const Image = styled(Img)({
  display: "flex",
  width: "100%",
  borderRadius: "10%",
  alignSelf: "center",
})

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <OutContainer>
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />

        <Wrapper width={["80%", "80%", "60%"]}>
          <Dotted>
            <Text fontSize={[5, 5, 6]} fontWeight="bold" py={3}>
              {post.frontmatter.title}
            </Text>
            <Box px={3}>
              <Text fontSize={[2]}>{post.frontmatter.date}</Text>
              <Text fontSize={[2]}>{post.fields.readingTime.text}</Text>
            </Box>
            <Wrapper alignSelf="center" width={[1, 1, "80%"]} p={[3]}>
              <Image fluid={post.frontmatter.cover.childImageSharp.fluid} />
            </Wrapper>
            <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
          </Dotted>
        </Wrapper>
      </OutContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        cover {
          childImageSharp {
            resize(width: 1000, height: 1000) {
              src
            }
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
