import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Welcome to page 2</p>
    <Link className="exlink" to="/">Go back to the homepage</Link>
  </Layout>
)

export default About