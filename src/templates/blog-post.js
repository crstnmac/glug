import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Box } from "rebass"
import { Helmet } from "react-helmet"

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

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <OutContainer>
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </OutContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
