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
  background-color: rgb(27,30,70);
  box-shadow: 0 5px 30px rgba(127, 0, 255, 0.15);
`

const Lnks = styled.span`
color:white;
  position: relative;
  z-index: 1;

 &::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: #fc2f70;
  transform-origin: bottom center;
  transform: scaleY(0.1);
  transition: all 0.1s ease-in-out;
}

 &:hover::before {
   
  transform: scaleY(1);
  background-color: #fc2f70;
}
`


const Links = styled(Link)({
  color: "#7a49ff",
  textDecoration: "none",
  paddingLeft:"6px",
  paddingRight:"6px",
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
  zIndex:"1",
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
      <Links to="/">glug-infinite.</Links>
    </Logo>
    
    </Flex>

    <Flex p={4} width={1 / 2} fontSize={[2,3,4]} justifyContent="flex-end">
      <MenuItems>
        <Links activeStyle={{ backgroundColor:"#fc2f70", color:"white", }}
    partiallyActive={true} to="/team"> <Lnks>Team</Lnks> </Links>
      </MenuItems>

      <MenuItems>
        <Links activeStyle={{ backgroundColor:"#fc2f70", color:"white", }}
    partiallyActive={true} to="/blog"><Lnks>Blog</Lnks></Links>
      </MenuItems>
    </Flex>
  </NavBar>
  
)

export default Header
