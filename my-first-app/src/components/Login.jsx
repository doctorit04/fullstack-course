
import React, { useState } from 'react'

import {Form, Button} from 'react-bootstrap';

export default function Login() {


    // State variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Function to handle input changes
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    }


    // Render the form
    // Note: The form is not actually submitted anywhere in this example
  return (
    <>
    <Form.Label htmlFor="inputEmail5">Email address</Form.Label>
        <Form.Control
            type="email"
            id="email"
            aria-describedby="emailHelpBlock"
            onChange={handleInputChange}
        />    
        <br />
     <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        aria-describedby="passwordHelpBlock"
        onChange={handleInputChange}
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
        <br />
        
        <div>
            {email && <p>Email: {email}</p>}
            {password && <p>Password: {password}</p>}
        </div>

        <Button variant="primary" type="submit" onClick={() => alert('Login clicked')}>
        เข้าสู่ระบบ
      </Button>
    </>
  )
}
