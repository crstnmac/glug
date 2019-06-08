import { Link } from "gatsby"
import React from "react"
import { Flex, Text, Heading } from "rebass"
import styled from "styled-components"


const NavBar = styled.div`
  display: flex;
  position: fixed;
  position: -webkit-fixed;
  width: 100%;
  z-index: 200;
  height: 80px;
  background-color: rgb(255,255,255);
  box-shadow: 0 2px 4px 0 rgba(127, 0, 255, 0.12);
`

const Links = styled(Link)({
  color: "#7a49ff",
  textDecoration: "none",
})


const Logo = styled(Heading)({
  marginRight: "20px",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  filter: "drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))",

})

const MenuItems = styled(Text)({
  marginRight: "20px",
  fontFamily: "Arvo",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  filter: "drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))",
})

const Header = ({ siteTitle }) => (
  
  <NavBar>
  <Flex p={4} width={1 / 2} fontSize={[3, 4, 5]} justifyContent="flex-start">
  
    <Logo>
      <Links to="/">Glug Infinite</Links>
    </Logo>
    
    </Flex>

    <Flex p={4} width={1 / 2} fontSize={[2,3,4]} justifyContent="flex-end">
      <MenuItems>
        <Links to="/team">Team</Links>
      </MenuItems>

      <MenuItems>
        <Links to="/blog">Blog</Links>
      </MenuItems>
    </Flex>
  </NavBar>
  
)

export default Header
