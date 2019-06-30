import "./fonts/font.css"
import theme from "styled-theming"

const blue = "#07c"
const lightgray = "#f6f6ff"
const black = "#2d3748"
const white = "#fff"

export default {
  ...theme,
  breakpoints: ["576px", "768px", "992px", "1200px", "1800px"],
  defaultWidths: [1, 1, 1, 7 / 8, 3 / 4, 1 / 2],
  colors: {
    blue,
    lightgray,
    black,
    white,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "Montserrat, sans-serif",
    serif: "Arvo, serif",
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
  },
}
