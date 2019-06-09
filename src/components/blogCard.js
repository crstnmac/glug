import React from 'react'
import styled from "styled-components"
import Card from "./card"
import {Box,Link, Text} from "rebass"



const BlogCard= styled(Card)({
  width: "50%",
  height: "auto",
  margin: "10px 0px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor:"#F0F0F0",
})


const BlogC = ({ children}) => (
  <Box>
  <BlogCard >

  {children}
    
 
  </BlogCard>
    </Box>
)

export default BlogC