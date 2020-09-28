import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const StyledRating = styled.div`
  background-color: var(--light-grayish-magenta-neutral);
  border-radius: 10px;
  margin-bottom: 1em;
  padding: 1.5em;
  text-align: center;

  @media(min-width: 960px) {
    display: flex;
    margin-bottom: 1.5em;

    &:first-child {
      position: relative;
      right: 100px;
    }

    &:nth-child(2) {
      position: relative;
      right: 50px;
    }

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media(min-width: 1200px) {
    &:first-child {
      right: 150px;
    }

    &:nth-child(2) {
      right: 75px;
    }
  }
`;

const StarRatingContainer = styled.div`
  margin-bottom: 1em;
  text-align: center;

  @media(min-width: 960px) {
    margin: 0 15px 0px 0px;
  }

  @media(min-width: 1200px) {
    margin: 0 30px 0px 0px;
  }
`;

const RatingText = styled.div`
  color: var(--very-dark-magenta-primary);
  font-weight: 700;
`;

const RatingBlock = ({ text }) => {
  return (
   <StyledRating>
      <StarRatingContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarRatingContainer>
      <RatingText>
        { text }
      </RatingText>
   </StyledRating> 
  );
}

export default RatingBlock;