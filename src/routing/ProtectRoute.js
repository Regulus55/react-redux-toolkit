import React from 'react';
import {useSelector} from "react-redux";
import {Button, Container} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";

const ProtectRoute = () => {
    const {userInfo} = useSelector(state => state.auth)
    if(!userInfo){
        return (
            <Container>
                <h1>unAuthorized</h1>
                <Link to={'/login'}>
                <Button >로그인으로 가기</Button>
                </Link>
            </Container>
        )
    }
    return (
       <Outlet/>
    );
};

export default ProtectRoute;