import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { IMAGES } from '../constants'
const HomeCard = () => {
    return (
        <Col lg={2} md={3} sm={12} style={{ marginTop: 30 }}>
            <Card className={'home-card'}>
                <img src={IMAGES.img1} style={{ height: 200, width: '100%' }} />
                <span>Arslan Khan</span>
            </Card>
        </Col>
    )
}
export default HomeCard
