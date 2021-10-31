import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import useAuth from '../Hooks/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://bloodcurdling-cat-91200.herokuapp.com/addOrders')
            .then(res => res.json())
            .then(data => setOrders(data));

    },
        []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://bloodcurdling-cat-91200.herokuapp.com/addOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = orders.filter(user => user._id !== id)
                        setOrders(remainingUsers)
                    }
                })
        }

    }
    return (
        <Container>
            <div>
                <Row xs={1} lg={3} className="g-3">
                    {
                        orders.map(order => user.email == order.email &&
                            <Col key={order.item.id} className='p-3 ' >
                                <Card className='h-100 hover-card card-border' >
                                    <Card.Img className='img1 p-5 ' variant="top" src={order.item.image} height='300' />
                                    <Card.Body>
                                        <Card.Title>{order.item.foodName}</Card.Title>
                                        <Card.Text>
                                            <p className='text-muted'>{order.item.description}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Price: {order.item.price}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Price: {order.status}</p>
                                        </Card.Text>

                                        <button className="btn btn-warning ms-3" onClick={() => handleDeleteUser(order._id)}>DELETE</button>
                                        {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                                        <br />

                                    </Card.Body>
                                </Card>
                            </Col>


                        )
                    }
                </Row>
            </div>
        </Container>
    );
};

export default MyOrder;