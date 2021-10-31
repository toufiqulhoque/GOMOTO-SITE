import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Row className='banner-bg'>
                <Col className='banner-tag-align my-auto'>
                    <h1 className='banner-tag text-white'>Express</h1>
                    <h1 className='banner-tag'><span className='banner-tag-color'>Home Delivery</span></h1>
                    <h6 className='text-white'>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then GOMOTO Bangladesh is the right destination for you! </h6>
                    <button className='btn btn-warning text-white mt-3'>Read More</button>
                </Col>
                <Col >
                    <img className='img-fluid banner-image ' src="https://i.ibb.co/Q9RTKZH/slider-courier-mask.png" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Banner;