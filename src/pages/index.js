import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "./Home/top"
import Middle from "./Home/middle"
import Bottom from "./Home/bottom"


const IndexPage = () => (
	<Layout>
	

		<SEO title="Home" />

		<Top />
		<Middle />
		<Bottom />

	</Layout>
)

export default IndexPage
