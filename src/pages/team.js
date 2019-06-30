import React from "react"
import Layout from "../components/layout"
import Card from "../components/memberCard"
import styled from "styled-components"
import { Box } from "rebass"
import SEO from "../components/seo"

// function getMembers(data) {
//   let members = []
//
//   let memberList = data.allMarkdownRemark.edges
//
//   memberList.map(element => {
//     return members.push(
//       <Card
//         username={element.node.frontmatter.username}
//         full_name={element.node.frontmatter.name}
//         designation={element.node.frontmatter.designation}
//       />
//     )
//   })
//
//   return members
// }

const OutContainer = styled(Box)({
  fontFamily: "Arvo, serif",
  display: "flex",
  flexDirection: "row",
  maxWidth: "100%",
  paddingTop: "60px",
  margin: "0 auto",
  height: "auto",
  flexWrap: "wrap",
  flexFlow: "column",
  justifyContent: "space-around",
  color: "#2d3748",
  border: "6px dashed #7a49ff",
  borderRadius: "10px",
  padding: "10px",
})

const Container = styled(Box)({
  alignSelf: "center",
  width: "100%",
  fontFamily: "Arvo, serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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

const Team = ({ data }) => (
  <Layout>
    <SEO title="Team" />
    <Box
      height="100%"
      width={["100%", "80%", "80%"]}
      marginLeft="auto"
      marginRight="auto"
      paddingTop="60px"
      color="#2d3748"
    >
      <Heading>Team</Heading>
      <OutContainer>
        <Container>
          <Box width={[1, 1, 1 / 3]}>
            <Card
              username="crstnmac"
              full_name="Criston Mascarenhas"
              designation="FSMK Regional Coordinator"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Card
              username="hyraze"
              full_name="Hanishraj B Rao"
              designation="FSMK Member"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Card
              username="abs87"
              full_name="Akshay B Shetty "
              designation="FSMK Member"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Card
              username="Being007"
              full_name="Akshay Irodi "
              designation="FSMK Member"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Card
              username="sbhat893"
              full_name="Sumuk Bhat"
              designation="FSMK Member"
            />
          </Box>
        </Container>
      </OutContainer>
    </Box>
  </Layout>
)

export default Team
