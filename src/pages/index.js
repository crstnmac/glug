import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "./Home/top"
import Middle from "./Home/middle"
import Bottom from "./Home/bottom"
import { Box } from "rebass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box
      height="100%"
      width={["100%", "80%", "80%"]}
      marginLeft="auto"
      marginRight="auto"
      paddingTop="60px"
      color="#2d3748"
      fontFamily="Arvo, serif"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      flexFlow="column"
      justifyContent="space-around"
    >
      <Top />
      <Middle />
      <Bottom />
    </Box>
  </Layout>
)

export default IndexPage
