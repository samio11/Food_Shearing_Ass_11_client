import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootElement from '../Pages/RootElement';
import ErrorElement from '../Pages/ErrorElement';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const Paths = createBrowserRouter([
    {
        path: '/',
        element: <RootElement></RootElement>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Paths;