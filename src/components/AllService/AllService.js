import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AllService = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://bloodcurdling-cat-91200.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    },
        []);

    const status = "pending"
    const handleAddToCart = (index, email, status) => {
        const item = services[index]
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
    }
    return (
        <Container>
            <Row xs={1} lg={3} className="g-3">
                {

                    services.map((service, index) => <Col key={service._id} className='p-3 ' >
                        <Card className='h-100 hover-card card-border' >
                            <Card.Img className='img1 p-5 ' variant="top" src={service.image} height='300' />
                            <Card.Body>
                                <Card.Title>{service.foodName}</Card.Title>
                                <Card.Text>
                                    <p className='text-muted'>{service.description}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>Price: {service.price}</p>
                                </Card.Text>
                                {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                                <br />
                                <Link to={`/order/${service._id}`}>
                                    <button className="btn btn-warning">Detail</button>
                                </Link>
                                <button
                                    onClick={() => handleAddToCart(index, user.email, status)}
                                    className="btn btn-warning m-2"
                                >
                                    buy now
                                </button>


                            </Card.Body>
                        </Card>
                    </Col>

                    )

                }

            </Row>
        </Container>

    );
};

export default AllService;