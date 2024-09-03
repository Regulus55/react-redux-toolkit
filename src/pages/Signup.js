import React, {useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signupUser} from "../features/auth/authActions";

const Signup = () => {
    const {register, handleSubmit, errors} = useForm();

    const {loading, userInfo, error, success} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signupHandler = async (values) => {
        console.log('values', values)
        dispatch(signupUser(values))

        // await mutateAsync(values)
    }
    useEffect(()=>{
        if(userInfo) navigate('/profile')
        if(success) navigate('/login')
    },[navigate, userInfo, success])


    return (
        <Container className='mt-5'>
            {error && <h1>{error}</h1>}
            {loading && <h1>로딩중</h1>}
            <Row>
                <Col lg={3}/>
                <Col lg={6}>
                    <h1>Signup</h1>
                    <Form className='mt-5' onSubmit={handleSubmit(signupHandler)}>
                        <Form.Group className="mb-3">

                            <Form.Group className="mb-3">
                                <Form.Label>userName</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="user name"
                                    {...register('userName')}
                                />
                            </Form.Group>


                            <Form.Group className="mb-3">
                                <Form.Label>nickname</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="nick name"
                                    {...register('nickName')}
                                />
                            </Form.Group>

                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                {...register('email')}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register('password')}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>phone number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="phone number"
                                {...register('phone')}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col lg={3}/>
            </Row>
        </Container>

    );
};

export default Signup;