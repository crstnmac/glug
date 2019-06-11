import React from "react"
import { Box, Text, } from "rebass"
import styled from "styled-components"

const Foot = styled(Box)({
	fontFamily: "Arvo, serif",
	width:"100%",
	flexWrap: "wrap",
})

const Container = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
	flex-wrap: wrap;
`

const Links = styled.a`
	color: #7a49ff;
	text-decoration: none;
	padding: 5px;
	text-align: center;
	transition: all 1s;
	&:hover{
		  text-shadow: 0 8px 14px rgba(33,33,33,.1);
		  color: #7a49ff;

	}

`

const Column = styled(Box)({
	display: "flex",
	flexBasis: "33.33%",
	flexDirection: "column",
	alignContent: "middle",
	flexFlow:"column",
	padding: "10px",
	color: "#866bde",
	fontWeight: "700",
	fontFamily: "Montserrat, san-serif",
	flexWrap:"wrap",
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
		<Container>
		<Column>
			<Links href="https://github.com/cristonkrizz/glug">GitHub</Links>

			<Links href="https://discuss.fsmk.org/">Disqus</Links>
		</Column>
		<Column>
			<Links href="https://gist.github.com/cristonkrizz/8c7a493530ca799feb83487a5bd234f9">
				Community Guidelines
			</Links>

			<Links href="https://gist.github.com/cristonkrizz/8c7a493530ca799feb83487a5bd234f9">
				Code of Conduct 
			</Links>
		</Column>
		<Column>
			<Text justifyContent="center" textAlign = "center" >
				<strong>Glug Infinite</strong>
				<br />
				Vivekananda College of Engineering and Technology,Puttur-574203
				<br />
				<br />
				
			</Text>
		</Column>
		<Copyright >
			<p> Glug Infinite © {new Date().getFullYear()} Made with ❤️ & 🔨 by<Links href="https://github.com/cristonkrizz">Cris</Links></p>

		</Copyright>
		</Container>
	</Foot>
)

export default Footer
