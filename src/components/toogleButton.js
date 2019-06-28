import React from "react"

import "./toogleButton.scss"

import ThemeContext from "../context/ThemeContext"

const toggleButton = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="toggle">
          <span role="img" aria-label="day">
            ☀️
          </span>
          <input
            type="checkbox"
            id="toggle-switch"
            onClick={theme.toggleDark}
          />
          <label htmlFor="toggle-switch"></label>

          <span role="img" aria-label="night">
            🌙
          </span>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default toggleButton
