import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`


    html, body{
    	  -webkit-font-smoothing: smooth;
    	  font-smoothing:smooth;
        margin: 0;

        }
.darkmode--activated p, .darkmode--activated li {
  color: #000;
}

.button {
  isolation: isolate;
}

.darkmode--activated .logo {
  mix-blend-mode: difference;
}

.borderMarker {
    position: relative;
    color:rgb(45, 55, 72);
}

.borderMarker::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 70%;
    left: -0.1px;
    right: -0.1px;
    bottom: 0;
    transition: top .1s ease-in-out;
    background-color: rgba(87,120,243,0.5);
}

.borderMarker:hover::after {
    top: 0;
}

.darkmode-layer,.darkmode-toggle {
  z-index: 500;
}


`






export default GlobalStyle
