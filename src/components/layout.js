import React from "react"
import theme from "../theme"
import Navbar from "./navbar"
import { Box } from "rebass"
import Footer from "../pages/footer"
import ThemeContext from "../context/ThemeContext"
import Global from "./globalStyle"

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={theme.dark ? "dark" : "light"}>
          <Global />
          <Box>
            <Navbar />

            <Box paddingTop="64px">{children}</Box>

            <Footer />
          </Box>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
