import React from "react"
import styled, { css } from "styled-components"
import Loader from "./Loader"

{/*// const StyledButton = styled.button`
// 	background-color: ${props => (props.secondary ? "#F7A072" : "#fff")};
// 	font-size:16px;
// 	outline: none;
// 	border: none;
// 	cursor: pointer;
// 	height:45px;
// 	border-radius: 20px;
// 	background: -webkit-linear-gradient(top right ,#13f3b9, #5878f3 );	
// 	-webkit-background-clip:text;
// 	-webkit-text-fill-color:transparent;
// 	-webkit-font-smoothing: antialiased;
// 	font-weight: bolder;
// 	transition-duration: 0.3s;
// 	padding: 10px 15px;
// 	transition: all 0.3s ease-in;
// 	box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
// 	&:hover {
// 		backgroundposition: 0 0;
// 		outline: none;
// 		box-shadow: 0 8px 16px rgba(50, 50, 93, 0.1), 0 6px 12px rgba(122,73,255, 0.3);
	
// 	}
// `
*/}

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
  fontWeight :'bolder';
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
