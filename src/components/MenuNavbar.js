import React, {useEffect} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useGetDetailsQuery} from "../app/services/auth/authService";
import {logout, setCredentials} from "../features/auth/authSlice";

const MenuNavbar = () => {
    const {userInfo} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    // const {data, isFetching} = useGetDetailsQuery("userDetails", {
    //     pollInterval: 900000,
    // })
    // console.log('00000000000000000000', data)

    useEffect(() => {
        // if (data) {
        //     dispatch(setCredentials(data))
        // }
    }, [userInfo, dispatch])

    useEffect(() => {

    }, [userInfo])
    // console.log('22222222', userInfo?.body?.email)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">React-RTK</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {userInfo?.email}
                    {/*{isFetching*/}
                    {/*    ? `Fetching your profile...`*/}
                    {/*    : userInfo !== null*/}
                    {/*        ? `Login as ${userInfo?.body?.email !== undefined ? userInfo?.body?.email : userInfo?.email}`*/}
                    {/*        : "you're not logged in"*/}
                    {/*}*/}
                    <Nav>
                        {userInfo ? (
                            <Button
                                onClick={() => {
                                    dispatch(logout())
                                }}
                            >
                                Logout
                            </Button>
                        ) : (
                            <>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                                <Nav.Link href="/login"> Login </Nav.Link>
                            </>
                        )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuNavbar;