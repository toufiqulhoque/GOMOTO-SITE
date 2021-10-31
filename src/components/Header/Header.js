import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar className='nav-bar' expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to='/home'>
                            <img

                                alt=""
                                src="https://i.ibb.co/yFJBVg1/logo-1x.png"
                                width="150"
                                height="40"
                                className="d-inline-block "
                            />
                        </NavLink>


                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <NavLink
                                className='nav-text-style text-decoration-none mt-2'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F7B614"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className='nav-text-style text-decoration-none'
                                to="/addOrders"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F7B614"
                                }}
                            >
                                My Order
                            </NavLink>
                            <NavLink
                                className='nav-text-style text-decoration-none'
                                to="/allService"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F7B614"
                                }}
                            >
                                All Service
                            </NavLink>
                            {/* <NavLink
                                className='nav-text-style text-decoration-none'
                                to="/manageAllOrder"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#F7B614"
                                }}
                            >
                                Manage All Order
                            </NavLink> */}

                            {
                                user?.email &&
                                <Link className='text-decoration-none text-white me-3 header-font' to='/manageAllOrder'>Manage All Order</Link>
                            }
                            {
                                user?.email &&
                                <Link className='text-decoration-none text-white me-3 header-font' to='/addOrders'> My Order</Link>
                            }
                            {
                                user?.email &&
                                <Link className='text-decoration-none text-white me-3 header-font' to='/createService'>Create Service </Link>
                            }
                            {
                                user?.displayName &&
                                <img src={user?.photoURL} className='rounded-circle me-3' alt="" height='50px' />
                            }


                            <div className=' text-white me-4 user-text mt-2'>
                                {
                                    user?.displayName || <div>
                                        <Link to='/login' ><Button className='px-4  rounded-pill header-btn' variant="outline-warning">Login</Button></Link>


                                    </div>
                                }

                            </div>
                            {
                                user?.email &&
                                <Button onClick={logOut} className=' ms-3 rounded-pill header-btn' variant="outline-warning">LogOut</Button>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;