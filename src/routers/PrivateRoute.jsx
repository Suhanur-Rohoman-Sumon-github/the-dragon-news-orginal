import React, { useContext } from 'react';
import { AuthContext } from '../pages/Provaider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    const location = useLocation()
    if(loding){
        return <Spinner  animation="border" />;
    }
    if(user){
        return children
    }
    return <Navigate state={{from : location}}  to={'/login'}></Navigate>;
};

export default PrivateRoute;