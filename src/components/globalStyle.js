import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


    html, body,nav{
    	  -webkit-font-smoothing: smooth;
    	  font-smoothing:smooth;
        margin: 0;
        }


.dark {
  transition: all 0.6s ease;
  background-color: rgb(27,30,70);
  color:#7a49ff;
}

.light {
  transition: all 0.6s ease;
  background-color: #fefefe;
}

`

export default GlobalStyle
