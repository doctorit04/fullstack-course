import React from 'react'

import {Form, Button} from 'react-bootstrap';

export default function Login() {
  return (
    <>
    <Form.Label htmlFor="inputEmail5">Email address</Form.Label>
        <Form.Control
            type="email"
            id="inputEmail5"
            aria-describedby="emailHelpBlock"
        />    
        <br />
     <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
        <br />
    <Button variant="primary" type="submit">
        เข้าสู่ระบบ
      </Button>
    </>
  )
}
