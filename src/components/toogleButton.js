import React from "react"
import { Flex, Text, Heading } from "rebass"
import styled from "styled-components"
import "./toogleButton.scss"

import ThemeContext from "../context/ThemeContext"

const toggleButton = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="toggle">
          <span>☀️</span>
          <input
            type="checkbox"
            id="toggle-switch"
            onClick={theme.toggleDark}
          />
          <label htmlFor="toggle-switch">
            <span className="screen-reader-text">Toggle Color Scheme</span>
          </label>

          <span>🌙</span>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default toggleButton
