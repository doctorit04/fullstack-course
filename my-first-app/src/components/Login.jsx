
import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function Login() {


    // State variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle input changes
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //package the data to be sent
        const dataLogin = {
            email: email,
            password: password
        };
        
        console.log('Data to be sent:', dataLogin);

        // Here you would typically send the data to your server
        const url = 'http://localhost:3000/api/auth/login'; 
        
        axios.post(url, dataLogin)
            .then(response => {
                console.log('Login successful:', response.data);

                //set the user data in localStorage or state management
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('token', response.data.token);

                // Redirect or update UI after successful login
                navigate('/dashboard'); //ไปหน้า Dashboard

            })
            .catch(error => {
                console.error('There was an error logging in:', error);
                // Handle error (e.g., show error message)
            }); 
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

        <Button variant="primary" type="submit" onClick={handleSubmit}>
        เข้าสู่ระบบ
      </Button>
    </>
  )
}
