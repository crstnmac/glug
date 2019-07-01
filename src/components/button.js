import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`

  font-family:Varela Round;
  position: absolute;
  width: auto;
  height:40px;
  text-align: center;
  color: #fff;
  border:none;
  fontWeight :bold;
  cursor:pointer;
  font-size: 15px;
  text-decoration: none;
  background: -webkit-linear-gradient(top right ,#7a49ff, #5878f3 );
  -webkit-font-smoothing: smooth;
  fontStyle :'bold';
  border-radius: 10px;
  z-index:1;
  outline:none;
}

&:hover{
  color:#fff;
}


&:before{
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 0px;
  z-index:-1;
  background: -webkit-linear-gradient(top right ,#7a49ff, #5878f3 );
  border-radius: 300px;
  filter: blur(20px);
  opacity: 0;
  transition: all 1s;

}

&:hover:before{
  filter: blur(20px);
  opacity: 1;
}


`

const Button = ({ children }) => {
  return <StyledButton className="darkmode-ignore">{children}</StyledButton>
}

export default Button
