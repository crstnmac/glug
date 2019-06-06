import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import Navbar from "./navbar.js"
import { Box } from "rebass"
import XRay from "react-x-ray"
import Footer from "../pages/footer"

export default function Layout({ children }) {
  return (
    <XRay>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Box>
            <Navbar />

            <Box>{children}</Box>

            <Footer />
          </Box>
        </ThemeProvider>
      </React.StrictMode>
    </XRay>
  )
}
