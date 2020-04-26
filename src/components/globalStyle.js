import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`




*:before,
*:after {
 box-sizing: border-box;
}




html,
body {
 position: relative;
 -webkit-font-smoothing: smooth;
        font-smoothing:smooth;
        margin: 0;
}


.main-container {
 min-height: 100vh; /* will cover the 100% of viewport */
 overflow: hidden;
 position: relative;
 display:flex;
 align-items:center;
 justify-content:center;
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




.borderMarker {
    position: relative;
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


.slideUp {
    width: 120px;
    height: 40px;
    color: #5878F3;
    padding: 0 14px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    position: relative;
    transition: 0.5s ease-out;
    overflow: hidden;
}

.slideUp::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    background-color: #5878F3;
    transition: transform 0.2s ease-out;
    z-index: -1;
}

.slideUp:hover {
    color: white;
}

.slideUp:hover::after {
    transform: translateY(0);
    transition: transform 0.2s ease-in;
}


nav {
  position: fixed;
  position: -webkit-fixed;
  z-index: 200;
  top:0;
  height: 2.5rem;
  width:100%;
  align-items: center;
  background-color: white;
  box-shadow: 0 5px 30px rgba(127, 0, 255, 0.15);
  border-top: 6px solid #7a49ff;

    @media (min-width: 600px){
        padding: 20px;
    }   

    ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;      
    }

    a {
      font-size: 1.25rem;
      
      @media (min-width: 42em){
        font-size: 1.5rem;
      }
    }
}

nav.flexbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 6rem;

    @media (min-width: 600px){
    height: 2.5rem;

        justify-content: space-between;
    }

    > a {
        margin-bottom: 10px;

        @media (min-width: 600px){
            margin-bottom: 0px;
        }
    }

    .fullwidth {
        flex: 0 0 100%;
        justify-content: center;

        @media (min-width: 600px){
            flex: 0 1 auto;
        }
    }

    ul {        
        display: flex;
        align-items: center;
    }

    ul li {
        flex: 0 0 100px;
        margin-right: 10px;
        text-align: center;

        @media (min-width: 600px){
            flex: 0 0 auto;
            margin-right: 20px;
        }

       
    }
}
`

export default GlobalStyle
