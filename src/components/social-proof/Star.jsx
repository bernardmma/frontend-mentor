import React from 'react';
import styled from 'styled-components';
import StarSvg from '../../assets/social-proof/images/icon-star.svg';

const StyledStar = styled.img`
  margin-right: .25em;
`;

const Star = () => {
  return <StyledStar src={StarSvg} alt="star" />
}

export default Star;