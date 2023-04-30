import React from 'react';
import NavigationBar from '../pages/sheard/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayouts = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default LoginLayouts;