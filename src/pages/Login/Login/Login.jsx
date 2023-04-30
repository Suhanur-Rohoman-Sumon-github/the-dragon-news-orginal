import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provaider/AuthProvider';



const Login = () => {
    const { loginUser } = useContext(AuthContext)

    const navigat = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handelalogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user
                navigat(from, { replace :true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage)
            });
    }
    return (
        <Container className='mx-auto w-25 mt-5'>
            <h5>Login your account</h5>
            <Form onSubmit={handelalogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>alrady have not account please <Link to={'/register'} > register</Link></p>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-sucsses">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;