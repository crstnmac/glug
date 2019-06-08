import React from "react"
import Image from "../../components/image"
import styled from "styled-components"
import { Box } from "rebass"
import Button from "../../components/button"

const Container = styled(Box)({
	fontFamily: "Arvo, serif",
	display: "flex",
	flexDirection: "row",
	maxWidth: "1280px",
	margin: "0 auto",
	height: "auto",
	width: "1 1/2",
	flexWrap: "wrap",
	justifyContent: "space-around",
})
const Left = styled(Box)({
	display: "flex",
	flexDirection: "column",
	maxWidth: "auto",
	justifyContent: "space-around",
	alignContent: "center",
})

const Right = styled(Box)({
	display: "flex",
	width: "100%",
	justifyContent: "space-around",
	alignContent: "center",
	marginBottom:"15px",
})

const Heading = styled(Box)({
	fontFamily: "Montserrat",
    fontWeight: "800",
    fontSize :"50px",
    marginBottom:"20px",
  	filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})

const Link = styled.a`
	color:"inherited";
	text-decoration: none;
	text-align: center;

	-webkit-background-clip:"text";

`

const Pic = styled(Image)({})

const Top = () => (

	<Container>
	
		<Box width={[1, 1 / 2]} alignSelf="center" p={3}>
			<Left>
				<Pic filename="good_team.png"/>
			</Left>
		</Box>

		<Box width={[1, 1 / 2]} alignSelf="center" p={3}>
			<Heading >GLUG</Heading>
			<Right>

				GLUGs(GNU/Linux user groups) are the means of spreading the idea of free software, hardware, and philosphy in campuses. GLUGs serve as a base to technically empower yourself and interact with professionals, right from installation of Linux to hacking the kernel, web technologies like drupal and mastering the latest python module, at the same time raising questions of self reliance.
			
			</Right>
			
			<Link href="https://fsmk.org/glugs"><Button > Learn More</Button></Link>
		</Box>
		
	</Container>

)

export default Top
