import React from "react"
import { Box, Text } from "rebass"
import styled from "styled-components"

const Foot = styled(Box)({
  fontFamily: "Arvo, serif",
  width: "100%",
  flexWrap: "wrap",
  background: "rgb(27,30,70)",
})

const Lnks = styled.span`
  color: white;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: #fc2f70;
    transform-origin: bottom center;
    transform: scaleY(0);
    transition: all 0.1s ease-in-out;
  }

  &:hover::before {
    transform: scaleY(1);
    background-color: #fc2f70;
  }
`

const Container = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`

const Links = styled.a`
  display: flex;
  color: #7a49ff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.1em;
  padding: 10px;
  text-align: center;
  transition: all 1s;
  justify-content: center;
  &:hover {
    text-shadow: 0 8px 14px rgba(33, 33, 33, 0.1);
    color: #7a49ff;
  }
`

const Column = styled.div`

	  -webkit-box-flex: 1;
	  -ms-flex: 1 0 290px;
		  flex: 1 0 290px;
		  color: #7a49ff;
		  padding="70px 0";
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
        <Text
          justifyContent="center"
          textAlign="center"
          fontWeight="500"
          fontSize="3em"
          padding="40px 0"
          lineHeight="1.2em"
        >
          {" "}
          <strong> Libre Not </strong>
          <br />
          <strong> Gratis </strong>{" "}
        </Text>
      </Column>
      <Column>
        <Box padding="30px 0">
          <Links href="https://github.com/cristonkrizz/glug">
            {" "}
            <Lnks>GitHub</Lnks>
          </Links>

          <Links href="https://discuss.fsmk.org/">
            <Lnks>Disqus</Lnks>
          </Links>
          <Links href="https://gist.github.com/cristonkrizz/8c7a493530ca799feb83487a5bd234f9">
            <Lnks>Community Guidelines</Lnks>
          </Links>
        </Box>
      </Column>
      <Column>
        <Box fontSize="1.6em" padding="40px 0" margin="20px">
          <Text justifyContent="center" textAlign="center" fontWeight="500">
            <strong>Glug Infinite</strong>
          </Text>

          <Text
            fontSize="0.8em"
            justifyContent="center"
            textAlign="center"
            fontWeight="200"
          >
            Vivekananda College of Engineering and Technology,Puttur-574203
          </Text>
        </Box>
      </Column>
      <Copyright color="white">
        <p>
          {" "}
          Glug Infinite © {new Date().getFullYear()} Made with <span>❤️</span> &{" "}
          <span>🔨</span> by
          <Links href="https://github.com/cristonkrizz">Cris</Links>
        </p>
      </Copyright>
    </Container>
  </Foot>
)

export default Footer
