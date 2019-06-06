import React from "react"
import { Box, Text, Link } from "rebass"
import styled from "styled-components"

const Foot = styled(Box)({
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

const Info = styled(Box)({
	display: "flex",
	padding: " 10px",
	justifyContent: "space-between",
	flexDirection: "row",
})

const Links = styled(Link)({
	color: "#866bde",
	textDecoration: "none",
	padding: "10px",
	textAlign: "center",
})

const Column = styled(Box)({
	display: "flex",
	flexGrow: "0",
	flexBasis: "33.33%",
	flexDirection: "column",
	alignContent: "flex-start",
	padding: "10px",
	color: "#866bde",
	fontWeight: "700",
	fontFamily: "Montserrat, san-serif",
})

const Copyright = styled(Box)({
	display: "block",
	justifyContent: "center",
	textAlign: "center",
	fontWeight: "700",
	fontFamily: "Montserrat, san-serif",
	width: "100%",
})

const Footer = ({ siteTitle }) => (
	<Foot>
		<Column>
			<Links href="https://github.com/gluginfinte">GitHub</Links>
		</Column>
		<Column>
			<Links href="https://github.com/gluginfinte/code-of-conduct">
				Community Guidelines
			</Links>

			<Links href="https://github.com/gluginfinte/code-of-conduct">
				Code of Conduct
			</Links>
		</Column>
		<Column>
			<Text>
				<strong>Glug Infinite</strong>
				<br />
				Vivekananda College of Engineering and Technology - ,Puttur
				<br />
				<br />
				gluginfinte@vcetputtur.ac.in
				<br />
				+91 8722680069
			</Text>
		</Column>
		<Copyright>
			<p> Glug Infinite © {new Date().getFullYear()}</p>
		</Copyright>
	</Foot>
)

export default Footer
