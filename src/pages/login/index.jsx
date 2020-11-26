import React from 'react';
import {Form, Container, Button} from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';

const Login = () =>{
    return (
        // <Menu/>
        // <Container className='form-height'>

            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
                        
        // {/* </Container> */}

    )

}

export default Login;