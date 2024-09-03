import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuNavbar from "./components/MenuNavbar";

const App = () => {
    return (
        <>
            <MenuNavbar/>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;