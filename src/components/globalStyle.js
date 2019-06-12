import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


    html, body {
    	  -webkit-font-smoothing: smooth;
    	  font-smoothing:smooth
        margin: 0;
        }


.dark {
  background-color: rgb(27,30,70);
  transition: all 0.6s ease;
  color:#7a49ff;
}

.light {
  transition: all 0.6s ease;
  background-color: #fefefe;
}

`

export default GlobalStyle
