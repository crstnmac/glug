import React from "react"
import Button from "../components/button"
import Layout from "../components/layout"
import Card from "../components/card"
import styled from "styled-components"
import {Box} from "rebass"

const Container = styled(Box)({
	fontFamily: "Arvo, serif",
	display: "flex",
	flexDirection: "row",
	maxWidth: "1200px",
	margin: "0 auto",
	height: "auto",
	width: "1 1/2",
	flexWrap: "wrap",
	justifyContent: "space-around",
})

const Team = () => (
	<Layout>
	<Container>
	<h1 textAlign="center" >Team</h1>
	<Button>Hello</Button>	
	<Card primary>Team</Card>
	</Container>
	</Layout>
)

export default Team
