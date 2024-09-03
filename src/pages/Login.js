import React, {useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../features/auth/authActions";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {register, handleSubmit, errors} = useForm();

    const {loading, userInfo, error} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const loginHandler = (values) => {
        console.log('values', values)
        dispatch(loginUser(values))
        // await mutateAsync(values)
    }
    useEffect(() => {
        if (userInfo) navigate('/profile')
    }, [navigate, userInfo])

    return (
        <Container className='mt-5'>
            {error && <h1>{error}</h1>}
            {loading && <h1>로딩중</h1>}
            <Row>
                {/*{isLoading && (*/}
                {/*    <div>로딩</div>*/}
                {/*)}*/}
                {/*{error && (*/}
                {/*    <div>에러</div>*/}
                {/*)}*/}
                <Col lg={3}/>
                <Col lg={6}>
                    <h1>Login</h1>
                    <Form className='mt-5' onSubmit={handleSubmit(loginHandler)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                {...register('email')}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                {...register('password')}
                            />
                        </Form.Group>


                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col lg={3}/>
            </Row>
        </Container>
    );
};

export default Login;