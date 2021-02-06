import React from 'react';
import {Row, Col } from 'react-bootstrap';

const IntroHeader = () => {
    return (
        <Row>
            <Col  className='IntroHeader' md={12}>
                <div className='dark'>
                    <h1>Центар за Учење, Кариера и Иновација</h1>
                </div>
            </Col>
        </Row>
    )
}

export default IntroHeader;