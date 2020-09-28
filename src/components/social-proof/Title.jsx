import React from "react"
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: var(--very-dark-magenta-primary);
  text-align: center;

  @media(min-width: 960px) {
    font-size: 3em;
    margin-bottom: 0px;
    text-align: left;
  }
`;

const Title = ({ text }) => {
  return <StyledTitle>{ text }</StyledTitle>
}

export default Title;