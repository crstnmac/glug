import React from "react"
import { Box, Text, } from "rebass"
import styled from "styled-components"

const Foot = styled(Box)({
	fontFamily: "Arvo, serif",
	display: "flex",
	flexDirection: "row",
	maxWidth:"1280px",
	margin: "0 auto",
	height: "auto",
	width:"100%",
	flexWrap: "wrap",
	justifyContent: "space-around",
})

const Links = styled.a`
	color: #7a49ff;
	text-decoration: none;
	padding: 10px;
	text-align: center;
	transition: all 1s;

	&:hover{
		  text-shadow: 0 8px 14px rgba(33,33,33,.1);
		  color: #7a49ff;
		  
	}

`

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
