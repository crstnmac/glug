import React from "react"
import Layout from "../components/layout"
import Top from "./Home/top"
import Middle from "./Home/middle"
import Bottom from "./Home/bottom"
import { Box } from "rebass"

function IndexPage() {
 return( <Layout>
    <Box
      height="100%"
      width={["100%", "80%", "80%"]}
      marginLeft="auto"
      marginRight="auto"
      color="#2d3748"
      fontFamily="Varela Round, sans-serif"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      flexFlow="column"
      justifyContent="space-between"
    >
      <Top />
      <Middle />
      <Bottom />
    </Box>
  </Layout>)
}

export default IndexPage
