import React from 'react';
import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuNavbar from "./components/MenuNavbar";
import {Container} from "react-bootstrap";
import {Login, Main, Profile, Signup} from "./pages";
import ProtectRoute from "./routing/ProtectRoute";

const App = () => {
    return (
        <Router>
            <MenuNavbar/>
            <Container>
                <Routes>
                    <Route path={"/"} element={<Main/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/signup"} element={<Signup/>}/>
                    <Route element={<ProtectRoute/>}>
                        <Route path={'/profile'} element={<Profile/>}/>
                    </Route>
                    <Route path={"*"} element={<Navigate to={'/'} replace/> }/>
                </Routes>
            </Container>
        </Router>
    );
};

export default App;