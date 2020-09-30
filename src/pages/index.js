import React from "react";
import { Helmet } from 'react-helmet';
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

const Text = styled.p`
  margin-bottom: 1em;
`;

const Home = () => {
  return (
    <Container>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <StyledLink to="/social-proof-section">
        <Image src={socialProofImg} alt="website" />
        <h1>Social Proof Section</h1>
      </StyledLink>

      <Text>Testing out: Styled Components, CSS Grid</Text>
      <a href="https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA" target="_blank" rel="noreferrer" >Challenge can be found here.</a>
      
      <hr />
    </Container>
  );
}

export default Home;
