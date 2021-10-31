import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([])
    const [isUpdate, setIsUpdated] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://bloodcurdling-cat-91200.herokuapp.com/addOrders')
            .then(res => res.json())
            .then(data => setOrders(data));

    },
        []);
    const handleUpdate = id => {
        const proceed = window.confirm('Are you sure you want to update')
        if (proceed) {
            const url = `https://bloodcurdling-cat-91200.herokuapp.com/addOrders/${id}`
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setIsUpdated(true);
                        alert('Updated');
                        window.location.reload();
                    } else {
                        setIsUpdated(false);
                    }
                })
        }
    }

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
                        orders.map(order =>
                            <Col key={order.item.id} className='p-3 ' >
                                <Card className='h-100 hover-card card-border' >
                                    <Card.Img className='img1 p-5 ' variant="top" src={order.item.image} height='300' />
                                    <Card.Body>
                                        <Card.Title>{order.item.foodName}</Card.Title>
                                        <Card.Title>{order.email}</Card.Title>
                                        <Card.Text>
                                            <p className='text-muted'>{order.item.description}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Price: {order.item.price}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p>Price: {order.status}</p>
                                        </Card.Text>
                                        <button className="btn btn-warning ms-3 rounded-pill px-4 " onClick={() => handleDeleteUser(order._id)}>DELETE</button>

                                        <Button onClick={() => handleUpdate(order._id)} className='py-2 px-4 ms-3 rounded-pill text-white' variant="btn btn-danger">Update Status</Button>

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

export default ManageAllOrder;