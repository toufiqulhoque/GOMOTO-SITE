import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Row className='footer-main-bg'>
                <Col>
                </Col>
                <Col className='bg-black rounded-start'>
                    <img src="https://image.freepik.com/free-photo/concentrated-african-american-call-center-operator-working_74855-4048.jpg" height="150" alt="" />

                </Col>
                <Col className='footer-bg pt-4 rounded-end'>
                    <h3>Call us to make order now</h3>
                    <h2>01777223344</h2>
                </Col>
                <Col>
                </Col>
                <p className='mt-4'><img src="https://i.ibb.co/yFJBVg1/logo-1x.png" width="150"
                    height="40" alt="" /></p>
                <h6 className='text-muted'>Order food from the best restaurants and shops with GOMOTO Bangladesh</h6>
                <div className='d-flex justify-content-center footer-icon mt-3'>
                    <h5 className='ms-3 footer-icon-single'><FaFacebook /></h5>
                    <h5 className='ms-3 footer-icon-single'><FaTwitter /></h5>
                    <h5 className='ms-3 footer-icon-single'><FaLinkedin /></h5>
                    <h5 className='ms-3 footer-icon-single'><FaInstagram /></h5>
                </div>

            </Row>

        </div>
    );
};

export default Footer;