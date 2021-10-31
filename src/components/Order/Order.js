import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Order = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [services, setServices] = useState({});
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors, } } = useForm();

    useEffect(() => {
        fetch(`https://bloodcurdling-cat-91200.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])

    useEffect(() => {
        fetch('https://bloodcurdling-cat-91200.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    },
        []);
    const status = "pending"
    const handleAddToCart = (item, email, status) => {
        // const item = services[service]
        const data = { item, email, status };

        fetch(`https://bloodcurdling-cat-91200.herokuapp.com/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("add to cart");
                } else {
                    alert("add korte pari nai");
                }
            });
    };



    return (
        <div >
            <div >

                <div >
                    <Row xs={1} lg={3} className="justify-content-center mt-5 p-5">

                        <Col className=' border-rounded my-5 p-5' >
                            <Card className='hover-card card-border my-5 p-5 ' >
                                <Card.Img className='img1 ' variant="top" src={service.image} />
                                <Card.Body>
                                    <Card.Title>{service.foodName}</Card.Title>
                                    <Card.Text>
                                        <p className='text-muted'>{service.description}</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <p>Price: {service.price}</p>
                                    </Card.Text>

                                    <button
                                        onClick={() => handleAddToCart(service, user.email, status)}
                                        className="btn btn-warning m-2"
                                    >
                                        buy now
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

            </div>
        </div>
    );
};

export default Order;