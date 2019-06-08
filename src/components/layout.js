import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../theme"
import Navbar from "./navbar"
import { Box } from "rebass"
import Footer from "../pages/footer"
import GlobalStyle from "./globalStyle"


export default function Layout({ children }) {
  return (
    <React.StrictMode>
   
      <ThemeProvider theme={theme}>
        
        <Box >
        
                    <Navbar />
          <GlobalStyle />

          <Box paddingTop = '64px'>{children}</Box>

         <Footer /> 
        </Box>
        
        
      </ThemeProvider>
   
    </React.StrictMode>
  )
}
