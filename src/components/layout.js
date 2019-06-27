import React from "react"
import theme from "../theme"
import Navbar from "./navbar"
import { Box } from "rebass"
import Footer from "../pages/footer"
import ThemeContext from "../context/ThemeContext"
import Global from "./globalStyle"
import Xray from "react-x-ray"

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "dark" : "light"}>
          <Global />
          <Navbar />
          <Box paddingTop="64px">
            <Box>{children}</Box>
            <Footer />
          </Box>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
