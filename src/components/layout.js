import React from "react"
import Navbar from "./navbar"
import { Box } from "rebass"
import Footer from "../pages/footer"
import ThemeContext from "../context/ThemeContext"
import Global from "./globalStyle"
import "../fonts/font.css"

// import Darkmode from 'darkmode-js';



// var options = {
//   bottom: '565px', // default: '32px'
//   right: '6px', // default: '32px'
//   left: 'unset', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff',  // default: '#fff'
//   buttonColorDark: '#7a49ff',  // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: true, // default: true,
//   label: '🌓' // default: ''
// }


// const darkmode = new Darkmode(options);

// darkmode.showWidget();

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
