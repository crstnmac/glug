import { Link } from "gatsby"
import React from "react"
import { Flex, Text, Heading } from "rebass"
import styled from "styled-components"

const Links = styled(Link)({
  color: "#7a49ff",
  textDecoration: "none",
})

const Logo = styled(Heading)({
  fontFamily: "Montserrat",
  fontWeight: "800",
  color: "#7a49ff",
  textDecoration: "none",
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
  <Flex flexDirection="row"   >
    <Logo p={4} fontSize={[4,5,7]} width={1 / 2} justifyContent="flex-start">
      <Links to="/">Glug Infinite</Links>
    </Logo>

    <Flex p={4} width={1 / 2} fontSize={[3, 4, 5]} justifyContent="flex-end">
      <MenuItems>
        <Links to="/team">Team</Links>
      </MenuItems>

      <MenuItems>
        <Links to="/blog">Blog</Links>
      </MenuItems>
    </Flex>
  </Flex>
)

export default Header
