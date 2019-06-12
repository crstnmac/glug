import React from "react"
import styled from "styled-components"
import Card from "./card"
import { Box, Text } from "rebass"

const Memcard = styled(Card)({
  width: "80%",
  height: "auto",
  margin: "10px 0px",
  padding: "15px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#F0F0F0",
})

const Image = styled.img`
  width: 80px;
  height: 80px;
  min-width: 80px;
  border-radius: 50%;
  object-fit: cover;
`

const MemDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexFlow: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
})

const MemberCard = ({ username, full_name, designation }) => (
  <Memcard>
    <Image
      alt=""
      src={`https://avatars1.githubusercontent.com/${username}?size=100`}
    />

    <MemDetails p={2}>
      <Text fontSize={[2]} my={2} fontWeight="bolder">
        {full_name}
      </Text>
      <Text fontSize={[2]}>{designation}</Text>
    </MemDetails>
  </Memcard>
)

export default MemberCard
