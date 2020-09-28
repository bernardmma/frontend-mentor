import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import socialProofImg from '../assets/social-proof/images/social-proof.jpg';

const Container = styled.div`
  text-align: center;
`;

const Image = styled.img`
  display: inline-block;
  max-width: 800px;
`;

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const Home = () => {
  return (
    <Container>
      <StyledLink to="/social-proof-section">
        <Image src={socialProofImg} alt="website" />
        <h1>Social Proof Section</h1>
      </StyledLink>

      <a href="https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA" target="_blank">Challenge can be found here.</a>

      <hr />
    </Container>
  );
}

export default Home;
