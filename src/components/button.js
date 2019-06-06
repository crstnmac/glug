import React from "react"
import styled, { css } from "styled-components"
import Loader from "./Loader"

const StyledButton = styled.button`
	border-radius: 10px;
	background-color: ${props => (props.secondary ? "#F7A072" : "#fff")};
	color: #fff;
	color: transparent;
	transition-duration: 0.3s;
	padding: 10px 15px;
	transition: all 0.3s ease-in;
	box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	font-size:16px;
	outline: none;
	border: none;
	cursor: pointer;
	margin: 15px;
	background: linear-gradient(to right, #13f3b9 0%, #5878f3 50%);	
	background-clip: text;
	&:hover {
		backgroundposition: 0 0;
		outline: none;
		box-shadow: 0 8px 16px rgba(50, 50, 93, 0.1), 0 6px 12px rgba(0, 128, 255, 0.3);
	
	}
`

const Button = ({ secondary, big, inverse, loading, children, ...props }) => {
	return (
		<StyledButton secondary={secondary} big={big} inverse={inverse} {...props}>
			{loading ? <Loader small white /> : children}
		</StyledButton>
	)
}

export default Button
