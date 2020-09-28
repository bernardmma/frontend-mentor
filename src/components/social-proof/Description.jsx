import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.p`
  color: var(--dark-grayish-magenta-neutral);
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 3em;
  text-align: center;

  @media(min-width: 960px) {
    text-align: left;
    font-size: 16px;
    margin-bottom: 0;
  }
`;

const Description = ({ text }) => {
  return <StyledDescription>{ text }</StyledDescription>
}

export default Description;