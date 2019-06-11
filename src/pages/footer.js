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
	color: #7a49ff;

`

const Links = styled.a`
	display:flex;
	color: #7a49ff;
	text-decoration: none;
	font-weight: 600;
	font-size: 1.5em;
	line-height:1.1em;
	padding: 10px;
	text-align: center;
	transition: all 1s;
	justify-content:center;
	&:hover{
		  text-shadow: 0 8px 14px rgba(33,33,33,.1);
		  color: #7a49ff;

	}

`

const Column = styled.div`
	 
	  -webkit-box-flex: 1;
	  -ms-flex: 1 0 290px;
		  flex: 1 0 290px;
		
  
  -webkit-box-sizing: border-box;
		  box-sizing: border-box;
  line-height: 1.5em;`




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
			<Text justifyContent="center" textAlign = "center" fontWeight="500"
	fontSize= "3em"
	
    lineHeight=" 1.3em"
    margin="20px 0 10px" > <strong> Libre Not Gratis</strong></Text>
		</Column>
		<Column>
		<Links href="https://github.com/cristonkrizz/glug">GitHub</Links>

			<Links href="https://discuss.fsmk.org/">Disqus</Links>
			<Links href="https://gist.github.com/cristonkrizz/8c7a493530ca799feb83487a5bd234f9">
				Community Guidelines
			</Links>
		</Column>
		<Column>
			<Text justifyContent="center" textAlign = "center" fontWeight="500"
    fontSize={[2,4,5]}
    lineHeight=" 1em"
    margin="20px 0 10px" >
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
