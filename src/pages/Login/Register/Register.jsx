import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provaider/AuthProvider';

const Register = () => {

    const { creatUser } = useContext(AuthContext)
    const [accept , setAccept] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        creatUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    });
            })
    }

    const handleAccept = (event) =>{
        setAccept(event.target.checked)
    }

    return (
        <Container className='mx-auto w-25 mt-5'>
            <h5>Login your account</h5>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>imege url</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Enter img url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                    onClick={handleAccept}
                        name='accept'
                        label={<>accept <Link to={'/terms'}>terms and condition </Link></>} />
                </Form.Group>
                <Button disabled={!accept} variant="primary" type="submit">
                    Register
                </Button>
                <p>alrady have an account please <Link to={'/login'} >login</Link></p>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-sucsses">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;