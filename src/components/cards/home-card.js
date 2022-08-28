import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { IMAGES } from '../constants'
const HomeCard = () => {
    const navigate = useNavigate();
    return (
        <Col onClick={()=>navigate('/about?id=2')} lg={2} md={3} sm={12} style={{ marginTop: 30 }}>
            <Card className={'home-card'}>
                <img src={IMAGES.img1} style={{ height: 200, width: '100%' }} />
                <span>Arslan Khan</span>
            </Card>
        </Col>
    )
}
export default HomeCard
