import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MobileApp.css'

const MobileApp = () => {
    return (
        <div className='pt-5 app-body'>
            <Container>

                <Row className='py-5 my-auto align-items-center'>
                    <Col className='digi-care'>
                        <h5>Get More With Our Application</h5>
                        <h2>Virtula Urgent Care</h2>
                        <p className='pt-3'>We are currently available in Dhaka and Chattogram. We are constantly expanding to more places! Parcel will cover more places soon. Find Your Way app will help you:</p>
                        <ul className='digital-ul'>
                            <li>Follow Delivery Status.</li>
                            <li>Order From Any Location.</li>
                            <li>Find amenities and services along your way</li>
                            <li>Get Important Notices.</li>
                            <li>Access My Orders.</li>
                        </ul>



                    </Col>


                    <Col xs={12} md={6}>
                        <img className='img-fluid' height='600' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b4ddd64777309.5addec761ed38.gif" alt="" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default MobileApp;