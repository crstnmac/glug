import React from "react"

import { ThemeProvider } from "./src/context/ThemeContext"

export const onServiceWorkerUpdateReady = () => {
	const answer = window.confirm(
		`This application has been updated. ` +
			`Reload to display the latest version?`
	)

	if (answer === true) {
		window.location.reload()
	}
}




export const wrapRootElement = ({ element }) => (
	<ThemeProvider>{element}</ThemeProvider>
)

