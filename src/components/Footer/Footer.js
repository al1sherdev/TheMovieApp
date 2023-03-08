import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <Row className='footer_content'>
            <Col xs="12" xl="6">
                <h1>
                    The Movie
                </h1>
                <button type='button'>Join the community</button>
            </Col>
            <Col xs="12" xl="6" className='d-flex'>
                
                <ul className='mx-5'>
                <h4>The Basics</h4>
                    <li>
                        About THEMDB
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Support Forms
                    </li>
                    <li>
                        API
                    </li>
                    <li>
                        System Status
                    </li>
                </ul>
                <ul>
                <h4>Get involved</h4>
                    <li>
                        About THEMDB
                    </li>
                    <li>
                        Contribution Bible
                    </li>
                    <li>
                        Add New Movie
                    </li>
                    <li>
                        Add New TV Show
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
  )
}

export default Footer