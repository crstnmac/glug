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
      paddingTop="20px"
      height="100%"
      width={["100%", "80%", "80%"]}
      marginLeft="auto"
      marginRight="auto"
    >
      <Top />
      <Middle />
      <Bottom />
    </Box>
  </Layout>
)

export default IndexPage
