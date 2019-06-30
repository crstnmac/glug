import { Link } from "gatsby"
import React from "react"
import { Flex, Text, Heading } from "rebass"
import styled from "styled-components"
import ThemeContext from "../context/ThemeContext"

const NavBar = styled.div`
  display: flex;
  position: fixed;
  position: -webkit-fixed;
  top:0;
  padding:16px;
  width: 100%;
  z-index: 200;
  height: 60px;
  background-color: white;
  box-shadow: 0 5px 30px rgba(127, 0, 255, 0.15);
  border-top: 6px solid #7a49ff;

  
`

const Lnks = styled.span`
  color: #2d3748;
  position: relative;
  z-index: 1;
  padding:6px;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #7a49ff;
    transform-origin: bottom  center;
    transform: scaleY(0.15);
    transition: all 0.1s ease-in-out;
  }

  &:hover::before {
    transform: scaleY(1);
    background-color: #7a49ff;
  }
`

const Links = styled(Link)({
  color: "#7a49ff",
  textDecoration: "none",
})

const Logo = styled(Heading)({
  marginRight: "20px",
  fontFamily: "Montserrat",
  fontWeight: "800px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  filter: "drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))",
  zIndex: "1",
  fontSize: "1.3em",
})

const MenuItems = styled(Text)({
  marginRight: "30px",
  fontFamily: "Arvo",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  filter: "drop-shadow(-0px 0px 15px rgba(53, 42, 87, 0.3))",
})

 

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {
      theme =>
     (
      <NavBar>
        <Flex
          p={4}
          width={3 / 4}
          fontSize={[3, 4, 5]}
          justifyContent="flex-start"
        >
          <Logo>
            <Links to="/">glug-infinite.</Links>
          </Logo>
        </Flex>



        <Flex
          p={4}
          width={1 / 4}
          fontSize={[3, 4, 4]}
          justifyContent="flex-end"
        >
          <MenuItems>
            <Links
              activeStyle={{ backgroundColor: "#7a49ff", color: "white" }}
              partiallyActive={true}
              to="/team"
            >
              {" "}
              <Lnks>Team</Lnks>{" "}
            </Links>
          </MenuItems>

          <MenuItems>
            <Links
              activeStyle={{ backgroundColor: "#7a49ff", color: "white" }}
              partiallyActive={true}
              to="/blog"
            >
              <Lnks>Blog</Lnks>
            </Links>
          </MenuItems>
        </Flex>
      </NavBar>
    )}
  </ThemeContext.Consumer>
)

export default Header
