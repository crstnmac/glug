import React from "react"
import { Link } from "gatsby"

import Button from "../components/button"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Top from "./Home/top"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
    <Top />
    <Button buttonText="Hello"/>
    
    <h1>Welcome</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div >
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    </div>
    <Link className="exlink" to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
