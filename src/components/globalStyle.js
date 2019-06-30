import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`




*:before,
*:after {
 box-sizing: border-box;
}

html,
body {
 height: 100%;
 position: relative;
 -webkit-font-smoothing: smooth;
        font-smoothing:smooth;
        margin: 0;
}

.main-container {
 min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 display: block;
 position: relative;
 padding-bottom: 100px; /* height of your footer */
}

footer {
 position: absolute;
 bottom: 0;
 width: 100%;
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


.Navbar {
  background-color: #46ACC2;
  display: flex;
  padding: 16px;
  font-family: sans-serif;
  color: white;
}

.Navbar__Link {
  padding-right: 8px;
}

.Navbar__Items {
  display: flex;
}

.Navbar__Items--right {
  margin-left:auto;
}

.Navbar__Link-toggle {
  display: none;
}

@media only screen and (max-width: 768px) {
  .Navbar__Items,
  .Navbar {
    flex-direction: column;
  }
    
.Navbar__Items {
    display:none;
  }
    
.Navbar__Items--right {
    margin-left:0;
  }
    
.Navbar__ToggleShow {
    display: flex;
  }
    
.Navbar__Link-toggle {
    align-self: flex-end;
    display: initial;
    position: absolute;
    cursor: pointer;
   } 
}

`

export default GlobalStyle
