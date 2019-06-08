import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  font-family:Arvo;
  position: absolute;
  width: auto;
  height:50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  
  border:none;
  
  cursor:pointer;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  background: -webkit-linear-gradient(top right ,#7a49ff, #5878f3 );	
  -webkit-font-smoothing: smooth;
  fontStyle :'bold';
  border-radius: 30px;
  z-index: 1;
  outline:none;
}

&:hover{
  color:#fff;
}


&:before{
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index:-1;
  background: -webkit-linear-gradient(top right ,#7a49ff, #5878f3 );	
  border-radius: 40px;
  filter: blur(20px);
  opacity: 0;
  transition: all 1s;

}

&:hover:before{
  filter: blur(20px);
  opacity: 1;
}


`


const Button = ({  children, }) => {
	return (
		<StyledButton>
			{children}
		</StyledButton>
	)
}

export default Button
