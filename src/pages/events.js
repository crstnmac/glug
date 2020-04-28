import React from "react"
import BlogCard from "../components/blogCard"
import Layout from "../components/layout"
import styled from "styled-components"
import { Box } from "rebass"
import { graphql } from "gatsby"
import SEO from "../components/seo"

function getEvents(data, readTime) {
  let events = []
  let eventList = data.allMarkdownRemark.edges

  eventList.forEach((element) => {
    events.push(
      <BlogCard
        data={element.node.frontmatter}
        readTime={element.node.fields.readingTime.text}
      />
    )
  })

  return events
}

const OutContainer = styled(Box)({
  fontFamily: "Varela Round, sans-serif",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  flexFlow: "column",
  borderRadius: "10px",
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

const EventsPage = ({ data, readTime }) => (
  <Layout>
    <SEO title="Events" />
    <Box alignSelf="center" mx="auto" paddingTop="2em" color="#2d3748">
      <Heading>Events</Heading>

      <OutContainer>
        <Container>{getEvents(data, readTime)}</Container>
      </OutContainer>
    </Box>
  </Layout>
)

export default EventsPage

export const eventsQuery = graphql`
  query eventsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/events/.*md$/" } }
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
