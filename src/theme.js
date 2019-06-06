import { theme } from "rebass"
import "./fonts/font.css"

const blue = "#07c"
const lightgray = "#f6f6ff"
const black = "#000e1a"
const white = "#fff"

export default {
	...theme,
	breakpoints: ["40em", "52em", "64em"],
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
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
