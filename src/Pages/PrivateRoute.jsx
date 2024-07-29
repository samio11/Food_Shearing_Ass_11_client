import React, { useContext } from 'react';
import { ContextProvider } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(ContextProvider)
    const location = useLocation();
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;