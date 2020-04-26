import { Link } from "gatsby"
import React from "react"
import { Text, Box } from "rebass"
import styled from "styled-components"
import ThemeContext from "../context/ThemeContext"

const Links = styled(Link)({
  color: "#7a49ff",
  textDecoration: "none",
  fontFamily: "Montserrat",
  fontWeight: "600",
  filter: "drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))",
})

const HomeLink = styled(Link)({
  color: "#7a49ff",
  textDecoration: "none",
})

const Logo = styled(Text)({
  fontFamily: "Montserrat",
  fontWeight: "bold",
  filter: "drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))",
  fontSize: "2rem",
})


const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <Box>
      <nav class="flexbox">       
        <HomeLink to="/"><Logo>glug infinite</Logo></HomeLink> 
        <ul class="fullwidth">
            <li ><Links className="borderMarker" to="/team">Team</Links></li>
            <li><Links className="borderMarker" to="/blog">Blog</Links></li>
            <li><Links className="borderMarker" to="/events">Events</Links></li>
        </ul>
        </nav>
        </Box>
    )}
  </ThemeContext.Consumer>
)

export default Header
