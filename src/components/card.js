import React from "react"
import styled, { css } from "styled-components"

const animatedCss = css`
  opacity: 1;
  transform: translateY(0);
`

const primaryCss = css`
  background-color: #f0f0f0;
  color: "#353839";
`

const StyledCard = styled.div`
  width: ${props => (props.big ? "450px" : "300px")};
  padding: 15px;
  opacity: 0;
  transform: translateY(50px);
  transition: 500ms all ease-in-out;
  margin: ${props => (props.noMargin ? 0 : "15px")};
  border-radius: 25px;
  ${props => props.animated && animatedCss}
  ${props => props.primary && primaryCss}

&:hover {
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
    background-color: #fff;
  }
`

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animated: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { animated: true }
      })
    }, this.props.delay)
  }

  render() {
    const {
      delay = 0,
      noAnimation,
      primary,
      noMargin,
      big,
      ...props
    } = this.props
    return (
      <StyledCard
        animated={this.state.animated}
        delay={delay}
        primary={primary}
        noAnimation={noAnimation}
        big={big}
        noMargin={noMargin}
        {...props}
      />
    )
  }
}

export default Card
