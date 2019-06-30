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
        <div className={theme.dark ? "dark" : "light"}>
          <Global />
          <Navbar />
          <Box marginTop="40px">{children}</Box>
          <Footer />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
