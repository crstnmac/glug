import React from "react"
import Navbar from "./navbar"
import { Box } from "rebass"
import Footer from "../pages/footer"
import ThemeContext from "../context/ThemeContext"
import Global from "./globalStyle"
import "../fonts/font.css"

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div>
          <Box margin="0" padding="0" >
                    <Navbar />

            <Global />
            <Box
              marginTop="90px"
              minHeight="100%"
              marginBottom="60px"
              className="main-container"
            >
              {children}
            </Box>
            <Footer className="footer"></Footer>
          </Box>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
