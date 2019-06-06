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
	flexWrap: "wrap",
	justifyContent: "space-around",
})
const Left = styled(Box)({
	display: "flex",
	flexDirection: "column",
	padding: "30px",
	maxWidth: "auto",
	justifyContent: "space-around",
	alignContent: "center",
})

const Right = styled(Box)({
	display: "flex",
	width: "100%",
	justifyContent: "space-around",
	padding: "30px",
	alignContent: "center",
})

const Pic = styled(Image)({})

const Top = () => (
	<Container>
		<Box width={[1, 1 / 2]} alignSelf="center">
			<Left>
				<Pic filename="good_team.png" />
			</Left>
		</Box>
		<Box width={[1, 1 / 2]} alignSelf="center">
			<Right>
				Free Software Movement Karnataka is a registered not-for-profit
				organization. Our primary objective is to create and spread awareness of
				Free Software technologies in different strata of society. We are driven
				by volunteers, who by day are software engineers, students,
				academicians, or government officials, and by night are Free Software
				evangelists.
			</Right>
		</Box>
	</Container>
)

export default Top
