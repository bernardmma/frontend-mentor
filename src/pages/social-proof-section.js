import React from "react"
import styled from 'styled-components';
import '../styles/social-proof/style.css';
import Title from '../components/social-proof/Title';
import coltonImg from '../assets/social-proof/images/image-colton.jpg';
import anneImg from '../assets/social-proof/images/image-anne.jpg';
import ireneImg from '../assets/social-proof/images/image-irene.jpg';
import Description from '../components/social-proof/Description';
import RatingBlock from '../components/social-proof/RatingBlock';
import Testimonial from '../components/social-proof/Testimonial';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 100px 30px 0 30px;
`;

const TopContainer = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: 40% 1fr 40%;
    grid-column-gap: 20px;
    margin-bottom: 5em;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 30% 1fr 40%;
  }
`;

const Content = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
`;

const Ratings = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-column: 3 / 4;
`;

const BottomContainer = styled.div`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    margin-bottom: 50px;
  }
`;

export default function SocialProofSection() {
  return (
    <>
      <Container>
        <TopContainer>
          <Content>
            <Title text="10,000+ of our users love our products." />
            <Description text="We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services." />
          </Content>
        
          <Ratings>
            <RatingBlock text="Rated 5 Stars in Reviews" />
            <RatingBlock text="Rated 5 Stars in Report Guru" />
            <RatingBlock text="Rated 5 Stars in Best Tech" />
          </Ratings>
        </TopContainer>

        <BottomContainer>
          <Testimonial
            img={coltonImg}
            name="Colton Smith"
            text="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
          />
          <Testimonial
            img={ireneImg}
            name="Irene Roberts"
            text="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
          />
          <Testimonial
            img={anneImg}
            name="Anne Wallace"
            text="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
          />
        </BottomContainer>
      </Container>
    </>
  )
}
