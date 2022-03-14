import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import HomeSvg from '../assets/svgs/home-svg';
import HomeCard from './cards/home-card'
import { IMAGES } from './constants';
// import HomeSvg from '../assets/svgs/home-svg.svg'
const Home = () => {
  return (
    <Container style={{ maxWidth: '90%' }}>
      <Row>
        {[0, 1, 2, 3, 4, 3, 5, 5, 5, 4, 5].map(ele => <HomeCard />)}
      </Row>
    

    </Container>
  )
}
export default Home
