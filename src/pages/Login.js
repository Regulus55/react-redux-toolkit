import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

const Login = () => {
    const {register, handleSubmit, formState: {error}} = useForm();


    const submitHandler = async (values) => {
        console.log('values', values)
        // await mutateAsync(values)
    }


    return (
        <Container className='mt-5'>
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
                    <Form className='mt-5' onSubmit={handleSubmit(submitHandler)}>
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



                        <Button  type="submit">
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