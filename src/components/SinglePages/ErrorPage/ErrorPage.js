import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';


const ErrorPage = () => {

    return (
        <Row className='ErrorPage'>
            <h1>ERROR</h1>
            <h3>Sorry, this page is not available</h3>
            <br/>
            <Link to='/' className='btn'>
                <h4>Go to Homepage</h4>
            </Link>
            <div>
            </div>
        </Row>
    )
}

export default ErrorPage;