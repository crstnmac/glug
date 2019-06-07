import React from "react"
import Image from "../../components/image"
import styled from "styled-components"
import { Box } from "rebass"

const Container = styled(Box)({
	fontFamily: "Arvo, serif",
	display: "flex",
	flexDirection: "row",
	maxWidth: "1200px",
	margin: "0 auto",
	height: "auto",
	width: "1 1/2",
	flexWrap: "wrap-reverse",
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
})
const Heading = styled(Box)({
	fontFamily: "Montserrat",
	marginBottom:"20px",
    fontWeight: "800",
    fontSize :"50px",
  	filter: `drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))`,
})

const Pic = styled(Image)({})

const Middle = () => (
	<Container>
		<Box width={[1, 1 / 2]} alignSelf="center" p={3}>
			<Heading>Purpose</Heading>
			<Right>
				The purpose of a GLUG is to equip students with FOSS and make them understand how FOSS is developed and why is it done so. While doing that - how one can contribute back to FOSS.It is a gathering of like minded people, where people speak about Freedom Software Philosophy and create awareness about the ‘usage’ of Freedom Software.
			</Right>
		</Box>
		<Box width={[1, 1 / 2]} alignSelf="center" p={3}>
			<Left>
				<Pic filename="open_source.png" />
			</Left>
		</Box>
	</Container>
)

export default Middle
