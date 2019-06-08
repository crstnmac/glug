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
	color:transparent;
	text-decoration: none;
	text-align: center;
`

const Pic = styled(Image)({})

const Bottom = () => (

	<Container>
	
		<Box width={[1, 1 / 2]} alignSelf="center" p={3}>
			<Left>
				<Pic filename="teaching.svg" />
			</Left>
		</Box>

		<Box width={[1, 1 / 2]} alignSelf="center" p={3}>
			<Heading>We Teach</Heading>
			<Right>

			We often do meetups in the college premises,and share the knowledge.The main goal is to share information and to develop critical thinking. Some might say that this is what turns information into knowledge. We respect and celebrate your individuality. We treat you as a human being, not as a product.We respect Learn-Think-Do-Share-Apply platform.....as opposed to a Come-Share-Go platform.
			</Right>
			
			{/* <Button ><Link href="https://fsmk.org"> Learn More</Link> </Button>*/}
		</Box>
		
	</Container>

)

export default Bottom
