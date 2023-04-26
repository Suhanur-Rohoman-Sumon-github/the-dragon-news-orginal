import React from 'react';
import { Button } from 'react-bootstrap';

const RightNav = () => {
    return (
        <div>
            <h4>login with</h4>
            <Button variant="outline-primary">login with google </Button>
            <Button variant="outline-secondary">login with github</Button>
        </div>
    );
};

export default RightNav;