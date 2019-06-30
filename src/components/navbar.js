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
  width: 100%;
  z-index: 400;
  height: 80px;
  background-color: white;
  box-shadow: 0 5px 30px rgba(127, 0, 255, 0.15);
  border-top: 6px solid #7a49ff;
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
          width={["40%"]}
          fontSize={[3, 4, 5]}
          justifyContent="flex-start"
        >
          <Logo>
            <Links to="/">glug-infinite.</Links>
          </Logo>
        </Flex>



        <Flex
          p={4}
          width={"40%"}
          fontSize={[3, 4, 4]}
          justifyContent="flex-end"
        >
          <MenuItems>
            <Links
              activeStyle={{ backgroundColor: "#7a49ff " }}
              partiallyActive={true}
              to="/team"
            >
              {" "}
              <div className="borderMarker">Team</div>{" "}
            </Links>
          </MenuItems>

          <MenuItems>
            <Links
              activeStyle={{ backgroundColor: "#7a49ff"}}
              partiallyActive={true}
              to="/blog"
            >
              <div className="borderMarker">Blog</div>
            </Links>
          </MenuItems>
        </Flex>
      </NavBar>


{// <div class="Navbar">
//    <div class="Navbar__Link Navbar__Link-brand">
//       Website title
//     </div>
//     <div class="Navbar__Link Navbar__Link-toggle">
//       <i class="fas fa-bars"></i>
//     </div>
//   <nav class="Navbar__Items">
//     <div class="Navbar__Link">
//       Longer Link
//     </div>
//     <div class="Navbar__Link">
//       Longer Link
//     </div>
//     <div class="Navbar__Link">
//       Link
//     </div>
//   </nav>
//   <nav class="Navbar__Items Navbar__Items--right">
//     <div class="Navbar__Link">
//       Link
//     </div>
//     <div class="Navbar__Link">
//       Link
//     </div>
//   </nav>
// </div>}
    )}
  </ThemeContext.Consumer>
)

export default Header
