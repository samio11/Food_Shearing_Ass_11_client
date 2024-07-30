import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootElement from '../Pages/RootElement';
import ErrorElement from '../Pages/ErrorElement';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Avilable_Foods from '../Pages/Avilable_Foods';
import AddFood from '../Pages/AddFood';
import PrivateRoute from '../Pages/PrivateRoute';
import MyAddedFoodManage from '../Pages/MyAddedFoodManage';
import MyFoodUpdate from '../Pages/MyFoodUpdate';
import FoodInfo from '../Pages/FoodInfo';
import MyRequestedFood from '../Pages/MyRequestedFood';

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
            },
            {
                path: '/available_foods',
                element: <Avilable_Foods></Avilable_Foods>
            },
            {
                path: '/add_food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/added_food_manage',
                element: <PrivateRoute><MyAddedFoodManage></MyAddedFoodManage></PrivateRoute>
            },
            {
                path: '/update_food_manage/:id',
                element: <PrivateRoute><MyFoodUpdate></MyFoodUpdate></PrivateRoute>,
                loader: ({params})=>fetch(`${import.meta.env.VITE_BACKEND_URL}/my_food_data/${params.id}`)
            },
            {
                path: '/food_info/:id',
                element: <PrivateRoute><FoodInfo></FoodInfo></PrivateRoute>,
                loader: ({params})=>fetch(`${import.meta.env.VITE_BACKEND_URL}/food_info/${params.id}`)
            },
            {
                path: '/requested_food',
                element: <PrivateRoute><MyRequestedFood></MyRequestedFood></PrivateRoute>,
            }
        ]
    }
])

export default Paths;