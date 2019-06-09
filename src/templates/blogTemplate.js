import React from "react"
import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'
import { graphql } from 'gatsby'
import styled from "styled-components"
import {Box,Text} from "rebass"
import {Helmet} from "react-helmet"

const OutContainer = styled(Box)({
  fontFamily: "Arvo, serif",
  display: "flex",
  flexDirection: "row",
  maxWidth: "1280px",
  paddingTop:"60px",
  margin: "0 auto",
  height: "auto",
  flexWrap: "wrap",
  flexFlow:"column",
  justifyContent: "space-around",


})


const BlogCard= styled(Card)({
  height: "100px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor:"#F0F0F0",
})

const Container = styled(Box)({
  width:"100%",
  fontFamily: "Arvo, serif",
  display: "flex",
  display: "-webkit-box",
  display: "-moz-box",
  display: "-ms-flexbox",
  display: "-webkit-flex",
  flexWrap:"wrap"
})

const Heading = styled(Box)({
  fontFamily: "Arvo",
    fontWeight: "800",
    fontSize :"50px",
    marginBottom:"20px",
    textAlign:"center",
    filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})



const BlogDetails = styled(Box)({
      fontFamily:"Arvo",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
})

const Link = styled.a`
  color:"inherited";
  text-decoration: none;
  text-align: center;

  -webkit-background-clip:"text";

`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (

    <Layout>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
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