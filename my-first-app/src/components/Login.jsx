
import React, { useState } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import './LoginPage.css';

//import { useNavigate } from 'react-router-dom';

export default function Login() {


    // State variables for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const navigate = useNavigate();

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
                //navigate('/dashboard'); //ไปหน้า Dashboard
                window.location.href = '/dashboard'; //ไปหน้า Dashboard


            })
            .catch(error => {
                console.error('There was an error logging in:', error);
                // Handle error (e.g., show error message)
            }); 
    }   


    // Render the form
    // Note: The form is not actually submitted anywhere in this example
  return (
 <div className="login-wrapper">
      <Card className="login-box">
        <Card.Body>
          <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleInputChange}
                placeholder="Enter password"
              />
              <Form.Text muted>
                Password must be 8–20 characters long and not contain symbols.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              เข้าสู่ระบบ
            </Button>
          </Form>

          {/* Optional: แสดงค่า email/password */}
          <div className="mt-3">
            {email && <p>Email: {email}</p>}
            {password && <p>Password: {password}</p>}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
